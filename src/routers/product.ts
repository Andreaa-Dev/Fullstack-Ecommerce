import express from 'express'

import {
  createProduct,
  findById,
  deleteProduct,
  findAll,
  updateProduct,
} from '../controllers/product'

const router = express.Router()

// Every path we define here will get /api/v1/product prefix
router.post('/', createProduct)
router.put('/:productId', updateProduct)
router.get('/', findAll)
router.get('/:productId', findById)
router.delete('/:productId', deleteProduct)

export default router
