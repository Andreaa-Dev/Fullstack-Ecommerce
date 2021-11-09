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
router.get('/', findAll)
router.get('/:orderId', findById)
router.delete('/:orderId', deleteOrder)

export default router
