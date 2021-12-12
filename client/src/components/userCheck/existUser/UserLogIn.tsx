import React, { useState } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import { TextField } from 'formik-mui'
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

import {
  BoxColumn,
  CustomizedButton,
  CustomizedText,
  CustomizedTitle,
} from '../../customizedCSS'
import GoogleLogIn from '../newUser/googleLogIn/GoogleLogInPage'

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
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  })

  let navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  return (
    <BoxColumn sx={{ m: '20px' }}>
      <CustomizedTitle> YOU ALREADY HAVE A DIOR ACCOUNT</CustomizedTitle>
      <Formik
        validateOnChange={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          setTimeout(() => {
            actions.setSubmitting(false)
          }, 500)

          const result = await axios.post(
            'http://localhost:5000/api/v1/user/login',
            values
          )
          if (result.status === 403) {
            return <>{handleClick}</>
          }
          if (result.status === 200) {
            navigate(`/account/${result.data.userData._id}`)
            const userToken = result.data.token
            localStorage.setItem('userToken', userToken)
          }
        }}
      >
        {({ isSubmitting, isValid, dirty }) => {
          return (
            <Form>
              <BoxColumn sx={{ p: '50px' }}>
                <Field
                  fullWidth
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  helperText="Please Enter Email"
                />
                <Field
                  fullWidth
                  component={TextField}
                  name="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  helperText="Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                />
                <CustomizedButton
                  type="submit"
                  disabled={!isValid || !dirty || isSubmitting}
                  onClick={handleClick}
                >
                  LOG IN
                </CustomizedButton>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: '100%' }}
                  >
                    Sorry, you are banned by Admin! Please contact admin for
                    further question.
                  </Alert>
                </Snackbar>
              </BoxColumn>
            </Form>
          )
        }}
      </Formik>

      <CustomizedText>--- OR ---</CustomizedText>
      <BoxColumn>
        <GoogleLogIn />
      </BoxColumn>
    </BoxColumn>
  )
}

export default UserLogIn
