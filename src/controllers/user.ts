import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { Request, Response, NextFunction } from 'express'

import User, { UserDocument } from '../models/User'
import UserService from '../services/user'
import { JWT_SECRET } from '../util/secrets'
import { BadRequestError, InternalServerError } from '../helpers/apiError'

// POST /user => create user
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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

// DELETE /movies/:movieId => delete user
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
  //foundUser = req.user (from passport)
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
