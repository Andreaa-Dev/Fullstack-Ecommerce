import React from 'react'

import {
  CustomizedButton,
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
      <CustomizedButton>CREATE AN ACCOUNT</CustomizedButton>
    </div>
  )
}

export default NewClient
