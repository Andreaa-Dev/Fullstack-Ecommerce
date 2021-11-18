import Joi from 'joi'
import { passwordComplexity } from 'joi-password-complexity'
// const passwordComplexity = require('joi-password-complexity')

const complexityOptions = {
  min: 8,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
}

export const logInValidation = (data: any) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: passwordComplexity(complexityOptions).required(),
  })
}
