import express from 'express'

// import {
//   createMovie,
//   findById,
//   deleteMovie,
//   findAll,
//   updateMovie,
// } from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.post('/', createProduct)
router.put('/:productId', updateProduct)

router.get('/', findAll)
router.get('/:productId', findById)
router.delete('/:productId', deleteProduct)

export default router
