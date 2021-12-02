import React from 'react'
import { BoxRow, CustomizedTitle } from '../customizedCSS'
import NewClient from './NewClient'
import UserLogIn from './UserLogIn'

function index() {
  return (
    <div>
      <CustomizedTitle> YOUR ACCOUNT</CustomizedTitle>
      <BoxRow>
        <NewClient />
        <UserLogIn />
      </BoxRow>
    </div>
  )
}

export default index
