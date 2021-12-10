import React from 'react'
import * as yup from 'yup'
import axios from 'axios'
import { TextField } from 'formik-mui'
import { useNavigate } from 'react-router'
import { Field, Form, Formik } from 'formik'
import { Box } from '@mui/material'

import { BoxColumn, CustomizedButton } from '../../../customizedCSS'

const validationSchema = yup.object({
  category: yup.string().required('No category provided'),
  name: yup.string().required('No name provided'),
  description: yup
    .string()
    .required('No description provided')
    .min(10, 'Description is too short - should be 100 characters minimum.'),
  price: yup.string(),
  imageLink: yup.string().required('No image provided'),
})
const initialValues = {
  category: '',
  name: '',
  description: '',
  price: 0,
  imageLink: '',
}
function ProductManageAdmin() {
  let navigate = useNavigate()

  return (
    <div>
      <Formik
        validateOnChange={true}
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          console.log(values, 'k')
          setTimeout(() => {
            actions.setSubmitting(false)
          }, 500)
          const result = await axios.post(
            'http://localhost:5000/api/v1/product',
            values
          )
          if (result.status === 200) {
            navigate(`/admin/product`)
          }
        }}
      >
        {({ isSubmitting, isValid, dirty, errors }) => {
          console.log(dirty, 'dirty')
          console.log(isSubmitting, 'submit')
          console.log(isValid, 'valid')
          console.log(errors, ' err')
          return (
            <Form>
              <Box>
                <Field
                  fullWidth
                  component={TextField}
                  name="category"
                  type="text"
                  label="Category"
                  variant="outlined"
                  helperText="Please category"
                />
                <Field
                  fullWidth
                  component={TextField}
                  name="name"
                  type="text"
                  label="Name"
                  variant="outlined"
                />
                <Field
                  fullWidth
                  component={TextField}
                  name="description"
                  type="text"
                  label="Description"
                  variant="outlined"
                />
                <Field
                  fullWidth
                  component={TextField}
                  name="price"
                  type="text"
                  label="Price"
                  variant="outlined"
                  helperText="Please enter price and the price must be greater than 0"
                />

                <Field
                  fullWidth
                  component={TextField}
                  name="imageLink"
                  type="text"
                  label="Image"
                  variant="outlined"
                  helperText="Please enter price and the price must be greater than 0"
                />
              </Box>
              <BoxColumn>
                <CustomizedButton
                  type="submit"
                  disabled={!isValid || !dirty || isSubmitting}
                >
                  ADD NEW PRODUCT
                </CustomizedButton>
              </BoxColumn>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default ProductManageAdmin
