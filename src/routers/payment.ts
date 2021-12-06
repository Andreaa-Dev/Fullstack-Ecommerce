import express from 'express'
import postCharge from '../controllers/postCharge'

const router = express.Router()

router.post('/', postCharge)

export default router
