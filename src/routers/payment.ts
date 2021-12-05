import express from 'express'
import postCharge from '../controllers/postCharge'

const router = express.Router()

router.post('/stripe/charge', postCharge)

export default router
