import express from 'express'

import {
  createUser,
  findById,
  deleteUser,
  findAll,
  updateUser,
} from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.post('/', createUser)
router.put('/:userId', updateUser)
router.get('/', findAll)
router.get('/:userId', findById)
router.delete('/:userId', deleteUser)

export default router
