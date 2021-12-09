import React from 'react'
import { Box } from '@mui/system'

import { UserType } from '../../misc/type'
import {
  BoxColumn,
  CustomizedTextLeft,
  CustomizedTitle,
} from '../customizedCSS'

type UserDataPropType = {
  userData: UserType | null
}

function UserDetail({ userData }: UserDataPropType) {
  return (
    <BoxColumn>
      <CustomizedTitle> PERSONAL DETAILS</CustomizedTitle>
      <Box>
        <CustomizedTextLeft>
          <span style={{ fontWeight: 'bold' }}> First Name: </span>{' '}
          {userData?.firstName}
        </CustomizedTextLeft>
        <CustomizedTextLeft>
          Last Name : {userData?.lastName}
        </CustomizedTextLeft>
        <CustomizedTextLeft>Email : {userData?.email}</CustomizedTextLeft>
        <CustomizedTextLeft>
          Phone number : {userData?.phone}
        </CustomizedTextLeft>
        <CustomizedTextLeft>Address : {userData?.address}</CustomizedTextLeft>
        <CustomizedTextLeft>Country: {userData?.country}</CustomizedTextLeft>
      </Box>
    </BoxColumn>
  )
}

export default UserDetail
