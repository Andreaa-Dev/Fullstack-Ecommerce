import React from 'react'

import { UserType } from '../../misc/type'
import { BoxColumn, CustomizedText, CustomizedTitle } from '../customizedCSS'

type UserDataPropType = {
  userData: UserType | null
}

function UserDetail({ userData }: UserDataPropType) {
  console.log(userData, 'g')
  return (
    <BoxColumn>
      <CustomizedTitle> Details</CustomizedTitle>
      <BoxColumn sx={{ justifyContent: 'flex-start' }}>
        <CustomizedText>First Name: {userData?.firstName}</CustomizedText>
        <CustomizedText> Last Name : {userData?.lastName}</CustomizedText>
        <CustomizedText> Phone number : {userData?.phone}</CustomizedText>
        <CustomizedText> Address : {userData?.address}</CustomizedText>
      </BoxColumn>
    </BoxColumn>
  )
}

export default UserDetail

//if user log in by google: email, firstname, last name => need fill up
// if user log in by form: all information
