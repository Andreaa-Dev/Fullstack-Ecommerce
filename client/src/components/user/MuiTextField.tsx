import React from 'react'
import { FieldAttributes, useField } from 'formik'
import { TextField } from '@mui/material'

function MuiTextField(props: FieldAttributes<{}>) {
  const [field, meta] = useField(props.name)
  const errorText = meta.error && meta.touched ? meta.error : ''

  return (
    <TextField
      helperText={errorText}
      error={Boolean(errorText)}
      placeholder={props.placeholder}
      {...field}
    />
  )
}

export default MuiTextField
