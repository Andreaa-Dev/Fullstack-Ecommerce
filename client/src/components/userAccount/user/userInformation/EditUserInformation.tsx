import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { TextField } from 'formik-mui'
import { DatePicker } from 'formik-mui-lab'
import { Box, MenuItem } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { useNavigate } from 'react-router'

import {
  BoxColumn,
  BoxRow,
  CustomizedButton,
  CustomizedText,
} from '../../../customizedCSS'
import { countryList } from '../../../../misc/countryList'
import { AppState } from '../../../../misc/type'
import { fetchUserData } from '../../../../redux/action'

const validationSchema = yup.object({
  firstName: yup.string().required('No first name provided'),
  lastName: yup.string().required('No last name provided'),
})

function EditUserInformation() {
  const navigate = useNavigate()
  let param = useParams() as { id: string }
  const dispatch = useDispatch()
  const userData = useSelector((state: AppState) => state.userState.userById)

  const userId = userData?._id
  useEffect(() => {
    dispatch(fetchUserData(param.id))
  }, [dispatch, param.id])

  const initialValues = {
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    country: userData?.country,
    address: userData?.address,
    phone: userData?.phone,
    date: userData?.DOB,
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
          <CustomizedText variant="h4">EDIT YOUR ACCOUNT</CustomizedText>
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

            const result = await axios.put(`/user/${userId}`, values)
            console.log(result, 'k')
            if (result.status === 200) {
              navigate(`/account/${userId}`)
            }
          }}
        >
          {({ isSubmitting, isValid, dirty }) => {
            return (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Form>
                  <BoxRow mt="25px" m="5px">
                    <Field
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
                  <Box m="5px">
                    <Box mt="15px">
                      <Field
                        fullWidth
                        component={TextField}
                        name="address"
                        type="text"
                        label="Address"
                        variant="outlined"
                      />
                    </Box>

                    <Box mt="15px">
                      <Field
                        fullWidth
                        component={TextField}
                        name="phone"
                        type="text"
                        label="Phone number"
                        variant="outlined"
                      />
                    </Box>
                    <Box mt="15px">
                      <Field
                        component={DatePicker}
                        name="date"
                        label="DOB"
                        variant="standard"
                      />
                    </Box>

                    <Box mt="15px">
                      <Field
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
                  </Box>

                  <BoxColumn>
                    <CustomizedButton
                      type="submit"
                      disabled={!isValid || !dirty || isSubmitting}
                    >
                      SAVE
                    </CustomizedButton>
                  </BoxColumn>
                </Form>
              </LocalizationProvider>
            )
          }}
        </Formik>
      </Box>
    </div>
  )
}

export default EditUserInformation
