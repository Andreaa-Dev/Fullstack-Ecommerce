import express from 'express'
import passport from 'passport'
import postCharge from '../controllers/postCharge'

const router = express.Router()

router.post('/', passport.authenticate('jwt', { session: false }), postCharge)

export default router
