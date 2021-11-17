import express from 'express'
import passport from 'passport'

import {
  createUser,
  findById,
  deleteUser,
  findAll,
  updateUser,
  authenticate,
} from '../controllers/user'

const router = express.Router()

router.post('/', createUser)
router.put('/:userId', updateUser)
router.get('/', findAll)
router.get('/:userId', findById)
router.delete('/:userId', deleteUser)

router.post(
  '/google-authenticate',
  passport.authenticate('google-id-token', { session: false }),
  authenticate
)

export default router
