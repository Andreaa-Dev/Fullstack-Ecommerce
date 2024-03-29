import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { Request, Response, NextFunction } from 'express'

import User, { UserDocument } from '../models/User'
import UserService from '../services/user'
import { JWT_SECRET } from '../util/secrets'
import { ForbiddenError } from './../helpers/apiError'
import { BadRequestError, InternalServerError } from '../helpers/apiError'

// POST /user => create user
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.email) {
      next(new BadRequestError('Missing email'))
    }
    const existUserEmail = await UserService.findUserByEmail(req.body.email)
    if (existUserEmail) {
      next(new BadRequestError('Email has already taken'))
    }
    if (!req.body.password) {
      next(new BadRequestError('Missing password'))
    }

    const {
      firstName,
      lastName,
      email,
      password,
      country,
      address,
      phone,
      DOB,
      acceptedTerms,
      role,
      logInWith,
    } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      country,
      address,
      phone,
      DOB,
      acceptedTerms,
      role,
      logInWith,
    })

    await UserService.createUser(user)
    res.json(user)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /users/:userId => update user
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const userId = req.params.userId
    const updatedUser = await UserService.updateUser(userId, update)
    res.json(updatedUser)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /users/:userId => delete user
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await UserService.deleteUser(req.params.userId)
    //it just delete user so no need res.json
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /user/:userId => find User
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserService.findById(req.params.userId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /users => get all users
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// authentication
export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userGoogleData = req.user as UserDocument
    const { email, _id, firstName } = userGoogleData
    const token = jwt.sign(
      {
        email,
        _id,
        firstName,
      },
      JWT_SECRET,
      {
        expiresIn: '1h',
      }
    )

    res.json({ token, userGoogleData })
  } catch (error) {
    console.log('error', error)
    return next(new InternalServerError())
  }
}

export const logInWithPasswordController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.email) {
      throw new BadRequestError('No email sent !')
    }
    const foundUser = await UserService.findUserByEmail(req.body.email)
    if (foundUser?.isBanned === true) {
      throw new ForbiddenError('The user was banned !')
    }

    if (foundUser?.logInWith === 'google') {
      throw new BadRequestError('User only can log in by Google')
    }

    if (!req.body.password) {
      throw new BadRequestError('No password sent !')
    }
    const userData = await UserService.findUserByEmail(req.body.email)
    console.log(userData?.password, 'k')
    console.log(req.body.password, 'h')

    if (!userData) {
      throw new BadRequestError('Need to create an account !')
    }

    const match = await bcrypt.compare(userData.password, req.body.password)
    if (match) {
      throw new BadRequestError('Password doesnt match  !')
    }

    //sign: generate token. first argument : token payload: data sent, second: secrect
    const token = jwt.sign(
      {
        email: req.body.email,
        _id: userData._id,
        firstName: userData.firstName,
      },
      JWT_SECRET,
      {
        expiresIn: '1h',
      }
    )

    res.json({ token, userData })
  } catch (error) {
    console.log('error', error)
    return next(error)
  }
}

export const banUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId
    await UserService.banUser(userId)
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const makeAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId
    await UserService.makeAdminController(userId)
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
