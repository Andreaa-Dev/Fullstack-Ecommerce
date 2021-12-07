import React from 'react'

import { UserType } from '../../misc/type'
import { BoxColumn, CustomizedText } from '../customizedCSS'

type UserDataPropType = {
  userData: UserType | null
}

function UserDetail({ userData }: UserDataPropType) {
  console.log(userData, 'g')
  return (
    <BoxColumn>
      <CustomizedText>First Name: {userData?.firstName}</CustomizedText>
      <CustomizedText> Last Name : {userData?.lastName}</CustomizedText>
      <CustomizedText> Phone number : {userData?.phone}</CustomizedText>
    </BoxColumn>
  )
}

export default UserDetail
