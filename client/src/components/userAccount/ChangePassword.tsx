import React from 'react'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-mui'
import * as yup from 'yup'
import { useNavigate } from 'react-router'

import {
  BoxColumn,
  BoxRow,
  CustomizedButton,
  CustomizedText,
  CustomizedTitle,
} from '../customizedCSS'
import axios from 'axios'

const validationSchema = yup.object({
  email: yup
    .string()
    .required('No email provided')
    .email('Invalid email address'),
})

const initialValues = {
  email: '',
}
function ChangePassword() {
  const navigate = useNavigate()
  return (
    <div>
      <CustomizedTitle>CHANGE PASSWORD</CustomizedTitle>
      <CustomizedText>
        Please enter your email to change password.
      </CustomizedText>
      <Formik
        validateOnChange={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          console.log(values, 'k')
          setTimeout(() => {
            actions.setSubmitting(false)
          }, 500)

          const result = await axios.post('/sendEmail', values)
          console.log(result, 'k')
          if (result.status === 204) {
            navigate(`/userCheck`)
          }
        }}
      >
        {({ isSubmitting, isValid, dirty }) => {
          return (
            <Form>
              <BoxRow>
                <Field
                  component={TextField}
                  name="email"
                  type="text"
                  label="Email"
                  variant="outlined"
                />
                <BoxColumn>
                  <CustomizedButton
                    type="submit"
                    disabled={!isValid || !dirty || isSubmitting}
                  >
                    Go
                  </CustomizedButton>
                </BoxColumn>
              </BoxRow>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default ChangePassword
