import React, { useState } from 'react'
import * as yup from 'yup'
import { Box, IconButton, MenuItem } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Field, Form, Formik } from 'formik'
import { LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { TextField } from 'formik-mui'
import InputAdornment from '@mui/material/InputAdornment'

import {
  CustomizedText,
  CustomizedButton,
  BoxColumn,
  useStyles,
  BoxRow,
} from '../customizedCSS'
import { countryList } from '../../misc/countryList'
import { DatePicker } from 'formik-mui-lab'

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
  country: 'Country',
  address: '',
  phone: '',
  date: new Date(),
  acceptedTerms: false,
}

function UserAccount() {
  const classes = useStyles()

  const [countryName, setCountryName] = useState('Country')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(event.target.value)
  }

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
            console.log(values, 'k')
            setTimeout(() => {
              actions.setSubmitting(false)
            }, 500)
          }}
        >
          {({ isSubmitting, isValid, dirty }) => {
            return (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Form>
                  <Box>
                    <Box>
                      <Field
                        component={TextField}
                        name="email"
                        type="email"
                        label="Email"
                        variant="outlined"
                        helperText="Please Enter Email"
                      />
                    </Box>
                    <Box>
                      <Field
                        component={TextField}
                        name="password"
                        type="password"
                        label="Password"
                        variant="outlined"
                        helperText="Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                      />
                    </Box>
                    <Box>
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
                        type="address"
                        label="Phone number"
                        variant="outlined"
                      />
                    </Box>

                    <Box></Box>
                  </Box>

                  <Box mt="50px">
                    <Field
                      component={DatePicker}
                      name="date"
                      label="Date"
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
                      helperText="Choose your country"
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
                      I WISH I HAVE READ THE PRIVACY POLICY AND CONSENT TO THE
                      PROCESSING OF MY PERSONAL DATA IN ORDER FOR MY ACCOUNT TO
                      BE CREATED
                    </label>
                  </Box>

                  <CustomizedButton
                    type="submit"
                    disabled={!isValid || !dirty || isSubmitting}
                  >
                    CREATE AN ACCOUNT
                  </CustomizedButton>
                </Form>
              </LocalizationProvider>
            )
          }}
        </Formik>
      </Box>
    </div>
  )
}

export default UserAccount
