import express from 'express'
import passport from 'passport'
import adminCheck from '../middlewares/admin'

import {
  createUser,
  findById,
  deleteUser,
  findAll,
  logInWithPasswordController,
  updateUser,
  authenticate,
  banUser,
  makeAdmin,
} from '../controllers/user'

const router = express.Router()

router.post('/', createUser)
router.put(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  updateUser
)
router.patch(
  '/:userId/ban-user',
  passport.authenticate('jwt', { session: false }),
  adminCheck,
  banUser
)

router.patch(
  '/:userId/make-admin',
  passport.authenticate('jwt', { session: false }),
  adminCheck,
  makeAdmin
)

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  adminCheck,
  findAll
)
router.post('/login', logInWithPasswordController)
router.get(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  findById
)
router.delete('/:userId', deleteUser)
router.post(
  '/google-authenticate',
  passport.authenticate('google-id-token', { session: false }),
  authenticate
)

export default router
