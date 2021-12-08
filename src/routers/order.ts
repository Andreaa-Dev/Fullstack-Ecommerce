import express from 'express'

import {
  createOrder,
  findById,
  findAll,
  findOrderByUser,
} from '../controllers/order'

const router = express.Router()

// Every path we define here will get /api/v1/orders prefix
router.post('/', createOrder)
router.get('/user/:userId', findOrderByUser)
router.get('/', findAll)
router.get('/:orderId', findById)

export default router
