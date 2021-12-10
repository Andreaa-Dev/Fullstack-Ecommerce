import express from 'express'
import passport from 'passport'
import adminCheck from '../middlewares/admin'

import {
  createUser,
  findById,
  deleteUser,
  findAll,
  logInWithPassword,
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
// router.get (
//   /:userId ,
// )

// router.get('/', findAll)
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  adminCheck,
  findAll
)
// check user log in
router.post('/login', logInWithPassword)
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
