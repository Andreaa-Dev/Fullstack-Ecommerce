import React from 'react'
import { BoxColumn, BoxRow, CustomizedTitle } from '../customizedCSS'
import NewClient from './newUser/NewClient'
import UserLogIn from './existUser/UserLogIn'

function index() {
  return (
    <BoxColumn sx={{ justifyContent: 'space-around' }}>
      <CustomizedTitle> YOUR ACCOUNT</CustomizedTitle>
      <BoxRow>
        <NewClient />
        <UserLogIn />
      </BoxRow>
    </BoxColumn>
  )
}

export default index
