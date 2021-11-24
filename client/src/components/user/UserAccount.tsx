import React from 'react'
import * as yup from 'yup'
import { Field, Form, Formik, FormikProps } from 'formik'
import { Box, TextField } from '@mui/material'

import { CustomizedText, CustomizedButton } from '../customizedCSS'
import MuiTextField from './MuiTextField'

const validationSchema = yup.object({
  email: yup.string().email('Invalid email address'),
  password: yup
    .string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 characters minimum.')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  acceptedTerms: yup
    .boolean()
    // .required('Required')
    .oneOf([true], 'You must accept the terms and conditions.'),
})

const initialValues = {
  email: '',
  password: '',
}

function UserAccount() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          border: '1px solid #cecece',
          maxWidth: '52.5rem',
          m: 'auto',
          p: 2,
          mt: 5,
          mb: 10,
        }}
      >
        <Box>
          <CustomizedText variant="h4">YOUR ACCOUNT</CustomizedText>
        </Box>
        <Formik
          validateOnChange={true}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log('values', values)
            setTimeout(() => {
              actions.setSubmitting(false)
            }, 500)
          }}
        >
          {({
            isSubmitting,
            isValid,
            dirty,
            touched,
            errors,
            getFieldMeta,
            handleSubmit,
          }) => {
            return (
              <Form>
                <MuiTextField
                  name="email"
                  placeholder="Email"
                  component={TextField}
                />

                <MuiTextField
                  name="password"
                  placeholder="Password"
                  component={TextField}
                />

                {/* <Field name="lastName" placeholder="Doe" component={TextField} /> */}
                <CustomizedButton
                  type="submit"
                  disabled={!isValid || !dirty || isSubmitting}
                >
                  CREATE AN ACCOUNT
                </CustomizedButton>
              </Form>
            )
          }}
        </Formik>
      </Box>
    </div>
  )
}

export default UserAccount
