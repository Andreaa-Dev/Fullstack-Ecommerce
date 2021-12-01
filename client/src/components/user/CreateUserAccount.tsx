import axios from 'axios'
import * as yup from 'yup'
import { TextField } from 'formik-mui'
import React, { useState } from 'react'
import { DatePicker } from 'formik-mui-lab'
import { useNavigate } from 'react-router'
import { Box, IconButton, MenuItem } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Field, Form, Formik } from 'formik'
import { LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import InputAdornment from '@mui/material/InputAdornment'
import GoogleLogIn from './googleLogIn/GoogleLogInPage'

import {
  CustomizedText,
  CustomizedButton,
  BoxColumn,
  useStyles,
  BoxRow,
  CustomizedTitle,
  CustomizedLink,
} from '../customizedCSS'
import { policy } from '../../misc/policy'
import { phoneCode } from '../../misc/phoneCode'
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
  date: new Date(),
  acceptedTerms: false,
}

function CreateUserAccount() {
  let navigate = useNavigate()

  const classes = useStyles()

  const [countryName, setCountryName] = useState('Choose your country')

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
        <CustomizedText>LOG IN WITH GOOGLE </CustomizedText>
        <BoxColumn>
          <GoogleLogIn />
        </BoxColumn>
        <BoxColumn>
          <CustomizedText>--- OR ---</CustomizedText>
        </BoxColumn>
        <Box>
          <CustomizedText variant="h4">CREATE YOUR ACCOUNT</CustomizedText>
        </Box>
        <Formik
          validateOnChange={true}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            console.log(values, 'k')
            setTimeout(() => {
              actions.setSubmitting(false)
            }, 500)

            const result = await axios.post(
              'http://localhost:5000/api/v1/user',
              values
            )
            if (result.status === 200) {
              navigate('/account')
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
                        component={TextField}
                        name="email"
                        type="email"
                        label="Email"
                        variant="outlined"
                        helperText="Please Enter Email"
                      />
                      <Field
                        component={TextField}
                        name="password"
                        type="password"
                        label="Password"
                        variant="outlined"
                        helperText="Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                      />
                    </BoxRow>
                    <Box>
                      <BoxRow>
                        <Field
                          fullWidth
                          component={TextField}
                          name="firstName"
                          type="firstName"
                          label="First Name"
                          variant="outlined"
                        />
                        <Field
                          fullWidth
                          component={TextField}
                          name="lastName"
                          type="lastName"
                          label="Last Name"
                          variant="outlined"
                        />
                      </BoxRow>

                      <Field
                        fullWidth
                        component={TextField}
                        name="address"
                        type="address"
                        label="Address"
                        variant="outlined"
                      />
                    </Box>
                    <Box>
                      <Field
                        fullWidth
                        component={TextField}
                        name="phone"
                        type="phone"
                        label="Phone number"
                        variant="outlined"
                      />
                    </Box>
                  </Box>

                  <Box mt="50px">
                    <Field
                      component={DatePicker}
                      name="date"
                      label="DOB"
                      variant="standard"
                    />
                  </Box>

                  <Box>
                    <Field
                      fullWidth
                      component={TextField}
                      type="text"
                      name="country"
                      select
                      variant="outlined"
                      // helperText="Choose your country"
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
                    }}
                  >
                    <label>
                      <Field type="checkbox" name="checked" value="checked-1" />
                      I WISH TO RECEIVE FASHION & ACCESSORIES NEWS
                    </label>
                    <label>
                      <Field type="checkbox" name="checked" value="checked-2" />
                      I WISH I WISH TO RECEIVE PERFUMES & BEAUTY NEWS
                    </label>
                    <label className="checkbox-input">
                      <Field
                        type="checkbox"
                        name="acceptedTerms"
                        id="checked"
                      />
                      I HAVE READ THE PRIVACY POLICY AND CONSENT TO THE
                      PROCESSING OF MY PERSONAL DATA IN ORDER FOR MY ACCOUNT TO
                      BE CREATED
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
    </div>
  )
}

export default CreateUserAccount
