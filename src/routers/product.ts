import express from 'express'

import {
  createProduct,
  findById,
  deleteProduct,
  findAll,
  updateProduct,
  seedProduct,
} from '../controllers/product'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.post('/', createProduct)
router.put('/:productId', updateProduct)
router.get('/seed', seedProduct)
router.get('/', findAll)
router.get('/:productId', findById)
router.delete('/:productId', deleteProduct)

export default router
