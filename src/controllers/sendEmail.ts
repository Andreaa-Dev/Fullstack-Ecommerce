import sgMail from '@sendgrid/mail'
import { Request, Response, NextFunction } from 'express'

import UserService from '../services/user'
import { BadRequestError, NotFoundError } from '../helpers/apiError'

async function sendEmail(req: Request, res: Response, next: NextFunction) {
  const foundUser = await UserService.findUserByEmail(req.body.email)
  if (!foundUser) {
    throw new NotFoundError('User does not no exist')
  }
  if (foundUser.logInWith === 'google') {
    throw new NotFoundError('User cant change password')
  }
  try {
    const newPassword =
      Math.random().toString(36).slice(2).toUpperCase() +
      Math.random().toString(36).slice(2) +
      '$'
    const msg = {
      to: req.body.email, // Change to your recipient
      from: 'ngocanhhsgs@gmail.com', // Change to your verified sender
      subject: 'Change your password',
      text: 'Please click to the link below to change your password',
      html: `<strong>Your new password: ${newPassword}`,
    }

    sgMail.send(msg).then((response) => {
      console.log(response[0].statusCode)
      console.log(response[0].headers)
    })

    const userWithNewPassWord = await UserService.updateUserWithNewPassword(
      req.body.email,
      newPassword
    )
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export default sendEmail
