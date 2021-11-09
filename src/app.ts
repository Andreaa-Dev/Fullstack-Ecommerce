import express from 'express'
import lusca from 'lusca'
import dotenv from 'dotenv'

import productRouter from './routers/product'
import userRoute from './routers/user'
import orderRoute from './routers/order'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import compression from 'compression'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)
app.use(apiContentType)
// Use common 3rd-party middlewares
app.use(compression())
app.use(express.json())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))

// Use product router
app.use('/api/v1/product', productRouter)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/order', orderRoute)

// Custom API error handler
app.use(apiErrorHandler)

export default app
