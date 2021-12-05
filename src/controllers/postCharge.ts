import { Stripe } from '../app'
import { Request, Response, NextFunction } from 'express'

import { BadRequestError } from '../helpers/apiError'

async function postCharge(req: Request, res: Response, next: NextFunction) {
  try {
    const { amount, source, receipt_email } = req.body

    const charge = await Stripe.charges.create({
      amount,
      currency: 'usd',
      source,
      receipt_email,
    })

    if (!charge) throw new Error('charge unsuccessful')

    res.status(200).json({
      charge,
      message: 'charge posted successfully',
    })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export default postCharge
