import express from 'express'
import sendEmail from '../controllers/sendEmail'

const router = express.Router()

router.post('/', sendEmail)

export default router
