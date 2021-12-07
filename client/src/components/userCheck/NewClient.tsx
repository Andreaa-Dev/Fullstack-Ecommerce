import React from 'react'

import {
  CustomizedButton,
  CustomizedLink,
  CustomizedText,
  CustomizedTitle,
} from '../customizedCSS'

function NewClient() {
  return (
    <div>
      <CustomizedTitle> NEW CLIENT</CustomizedTitle>
      <CustomizedText sx={{ fontSize: '10px' }}>
        Create an account to track and manage your orders, view all your
        personal information and items added to your wishlist.
      </CustomizedText>
      <CustomizedLink to="/createUser">
        <CustomizedButton>CREATE AN ACCOUNT</CustomizedButton>
      </CustomizedLink>
    </div>
  )
}

export default NewClient
