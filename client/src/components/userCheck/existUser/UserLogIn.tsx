import React from 'react'
import * as yup from 'yup'

import GoogleLogIn from '../newUser/googleLogIn/GoogleLogInPage'
import { BoxColumn, CustomizedText, CustomizedTitle } from '../../customizedCSS'

const validationSchema = yup.object({
  email: yup
    .string()
    .required('No email provided')
    .email('Invalid email address'),
  password: yup
    .string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 characters minimum.')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
})

const initialValues = {
  email: '',
  password: '',
}
function UserLogIn() {
  return (
    <BoxColumn sx={{ m: '20px' }}>
      <CustomizedTitle> YOU ALREADY HAVE A DIOR ACCOUNT</CustomizedTitle>

      <CustomizedText>--- OR ---</CustomizedText>
      <BoxColumn>
        <GoogleLogIn />
      </BoxColumn>
    </BoxColumn>
  )
}

export default UserLogIn
