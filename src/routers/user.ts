import express from 'express'
import passport from 'passport'
import adminCheck from '../middlewares/admin'

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
router.put(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  updateUser
)
// router.get('/', findAll)
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  adminCheck,
  findAll
)
// check user log in
router.get('/:userId', findById)
router.delete('/:userId', deleteUser)
router.post(
  '/google-authenticate',
  passport.authenticate('google-id-token', { session: false }),
  authenticate
)

export default router
