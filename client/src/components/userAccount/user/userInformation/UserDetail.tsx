import React from 'react'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'

import { UserType } from '../../../../misc/type'
import {
  BoxColumn,
  CustomizedButton,
  CustomizedLink,
  CustomizedTextLeft,
  CustomizedTitle,
} from '../../../customizedCSS'
import { removeUserData } from '../../../../redux/action'

type UserDataPropType = {
  userData: UserType | null
}

function UserDetail({ userData }: UserDataPropType) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  let userRole = ''
  if (userData?.role === 'admin') {
    userRole = 'Role: Admin'
  } else {
    userRole = ''
  }

  const onClickHandler = () => {
    if (userData) {
      dispatch(removeUserData(userData))
    }
    localStorage.removeItem('userToken')
    navigate(`/userCheck`)
  }

  const userId = userData?._id
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
        <CustomizedTextLeft> {userRole}</CustomizedTextLeft>
        <CustomizedLink to={`/user/edit/${userId}`}>
          <CustomizedButton> Edit</CustomizedButton>
        </CustomizedLink>
        <CustomizedButton onClick={onClickHandler}> Log out</CustomizedButton>
      </Box>
    </BoxColumn>
  )
}

export default UserDetail
