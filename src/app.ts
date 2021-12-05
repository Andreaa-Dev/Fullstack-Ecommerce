import express from 'express'
import lusca from 'lusca'
import dotenv from 'dotenv'
import cors from 'cors'
import passport from 'passport'
import stripe from 'stripe'

import productRouter from './routers/product'
import userRoute from './routers/user'
import orderRoute from './routers/order'
import paymentRoute from './routers/payment'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import compression from 'compression'

import { jwtStrategy, googleStrategy } from './config/passport'

dotenv.config({ path: '.env' })
const app = express()

export const Stripe = new stripe(process.env.STRIPE_SECRET as string, {
  apiVersion: '2020-08-27',
})

// Express configuration
app.set('port', process.env.PORT || 3000)
app.use(apiContentType)

// Use common 3rd-party middlewares
app.use(cors())
app.use(compression())
app.use(express.json())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))

app.use(passport.initialize())
// app.use(passport.session())
passport.use(googleStrategy)
passport.use(jwtStrategy)

//router
app.use('/api/v1/product', productRouter)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/order', orderRoute)
app.use('/api/v1/payment', paymentRoute)

// Custom API error handler
app.use(apiErrorHandler)

export default app
