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
  BoxRow,
  CustomizedButton,
  CustomizedLink,
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
  const [error, setError] = useState('string')
  const [open, setOpen] = useState(false)

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  })

  let navigate = useNavigate()

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

          await axios
            .post('http://localhost:5000/api/v1/user/login', values)
            .catch((error) => {
              console.log(error, 'err')
              if (error.response.status === 403) {
                setOpen(true)
                setError(
                  'Sorry, you are banned by Admin! Please contact admin for further question.'
                )
              }
              if (error.response.status === 400) {
                setOpen(true)
                setError('Please log in with Google')
              }
            })
            .then((response: any) => {
              console.log(response, 'res')
              navigate(`/account/${response.data.userData._id}`)
              const userToken = response.data.token
              localStorage.setItem('userToken', userToken)
            })
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
                <BoxRow>
                  <CustomizedButton
                    type="submit"
                    disabled={!isValid || !dirty || isSubmitting}
                  >
                    LOG IN
                  </CustomizedButton>
                  <CustomizedButton>
                    <CustomizedLink
                      to="changePassword"
                      sx={{
                        color: 'white',
                      }}
                    >
                      Forgot password
                    </CustomizedLink>
                  </CustomizedButton>
                </BoxRow>

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
                    {error}
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
