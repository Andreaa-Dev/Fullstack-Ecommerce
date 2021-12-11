import { Response, Request, NextFunction } from 'express'
import { ForbiddenError } from '../helpers/apiError'
import { UserDocument } from '../models/User'

const adminCheck = async (req: Request, res: Response, next: NextFunction) => {
  const userData = req.user as UserDocument
  const userRole = userData.role
  console.log(userRole, 'user')
  if (userRole === 'admin') {
    next()
  } else {
    throw new ForbiddenError()
  }
}
export default adminCheck

//middleware = function
//get information admin
