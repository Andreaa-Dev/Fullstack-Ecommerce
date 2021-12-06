import { OrderDocument } from './../models/Order'
import { Stripe } from '../app'
import { Request, Response, NextFunction } from 'express'

import { BadRequestError } from '../helpers/apiError'

type Body = {
  receipt_email: string
  order: OrderDocument
}

async function postCharge(req: Request, res: Response, next: NextFunction) {
  try {
    const { receipt_email, order } = req.body as Body

    const purchasingItems = order.products.map((prod) => {
      return {
        price_data: {
          currency: 'eur',
          product_data: {
            name: prod.name,
            images: [prod.imageLink],
          },
          unit_amount_decimal: `${prod.price * prod.quantity * 100}`,
        },
        quantity: prod.quantity,
      }
    })

    // console.log(purchasingItems[1].price_data.product_data.images, 'h')

    const session = await Stripe.checkout.sessions.create({
      line_items: purchasingItems,
      mode: 'payment',
      success_url: 'http://localhost:3000/order/success',
      cancel_url: 'http://localhost:3000/order/cancel',
    })

    res.json({ url: session.url })
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export default postCharge
