import React from 'react'
import axios from 'axios'
import * as yup from 'yup'
import { TextField } from 'formik-mui'
import { DatePicker } from 'formik-mui-lab'
import { useNavigate } from 'react-router'
import { Box, MenuItem } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

import {
  CustomizedText,
  CustomizedButton,
  BoxColumn,
  BoxRow,
  BoxRowStart,
} from '../customizedCSS'
import { policy } from '../../misc/policy'
import { countryList } from '../../misc/countryList'

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
  date: yup.date().nullable(),
  acceptedTerms: yup
    .boolean()
    .required('Required')
    .oneOf([true], 'You must accept the terms and conditions.'),
})

const initialValues = {
  email: '',
  password: '',
  country: 'Choose your country',
  address: '',
  phone: '',
  date: new Date().toISOString(),
  acceptedTerms: false,
}

function CreateUserAccount() {
  const navigate = useNavigate()
  console.log(initialValues, 'i')

  return (
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
        <CustomizedText variant="h2" fontWeight="bold">
          CREATE YOUR ACCOUNT
        </CustomizedText>
      </Box>
      <Formik
        validateOnChange={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          console.log(values, 'v')
          setTimeout(() => {
            actions.setSubmitting(false)
          }, 500)

          const result = await axios.post('/user', values)
          if (result.status === 200) {
            navigate(`/userCheck`)
          }
        }}
      >
        {({ isSubmitting, isValid, dirty }) => {
          return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Form>
                <Box>
                  <BoxRow>
                    <Field
                      style={{ marginRight: '10px' }}
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
                      helperText="Must contain 8 characters, one uppercase, one lowercase, one number and one special character"
                    />
                  </BoxRow>
                  <Box>
                    <BoxRow>
                      <Field
                        style={{ marginRight: '10px' }}
                        fullWidth
                        component={TextField}
                        name="firstName"
                        type="text"
                        label="First Name"
                        variant="outlined"
                      />
                      <Field
                        fullWidth
                        component={TextField}
                        name="lastName"
                        type="text"
                        label="Last Name"
                        variant="outlined"
                      />
                    </BoxRow>

                    <Field
                      fullWidth
                      style={{ marginTop: '10px' }}
                      component={TextField}
                      name="address"
                      type="text"
                      label="Address"
                      variant="outlined"
                    />
                  </Box>
                  <Box>
                    <Field
                      style={{ marginTop: '10px' }}
                      fullWidth
                      component={TextField}
                      name="phone"
                      type="text"
                      label="Phone number"
                      variant="outlined"
                    />
                  </Box>
                </Box>

                <Box mt="10px">
                  <Field
                    component={DatePicker}
                    name="date"
                    label="DOB"
                    variant="standard"
                  />
                </Box>

                <Box>
                  <Field
                    style={{ marginTop: '10px' }}
                    fullWidth
                    component={TextField}
                    type="text"
                    name="country"
                    select
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  >
                    {countryList.map((option) => (
                      <MenuItem key={option.name} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Field>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    marginTop: '10px',
                  }}
                >
                  <label>
                    <BoxRowStart>
                      <Field type="checkbox" name="checked" value="checked-1" />
                      <CustomizedText>
                        I WISH TO RECEIVE FASHION & ACCESSORIES NEWS
                      </CustomizedText>
                    </BoxRowStart>
                  </label>
                  <label>
                    <BoxRowStart>
                      <Field type="checkbox" name="checked" value="checked-2" />
                      <CustomizedText>
                        I WISH I WISH TO RECEIVE PERFUMES & BEAUTY NEWS
                      </CustomizedText>
                    </BoxRowStart>
                  </label>
                  <label className="checkbox-input">
                    <BoxRowStart>
                      <Field
                        type="checkbox"
                        name="acceptedTerms"
                        id="checked"
                      />
                      <CustomizedText>
                        I HAVE READ THE PRIVACY POLICY AND CONSENT TO THE
                        PROCESSING OF MY PERSONAL DATA TO CREATE THIS ACCOUNT.
                      </CustomizedText>
                    </BoxRowStart>
                  </label>
                </Box>
                <BoxColumn>
                  <CustomizedButton
                    type="submit"
                    disabled={!isValid || !dirty || isSubmitting}
                  >
                    CREATE AN ACCOUNT
                  </CustomizedButton>
                </BoxColumn>
              </Form>
            </LocalizationProvider>
          )
        }}
      </Formik>
      <BoxColumn>
        <CustomizedText sx={{ textAlign: 'justify', fontSize: '12px' }}>
          {policy.name}
        </CustomizedText>
      </BoxColumn>
    </Box>
  )
}

export default CreateUserAccount
