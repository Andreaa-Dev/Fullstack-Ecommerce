import axios from 'axios'
import React, { useEffect } from 'react'

import { CustomizedText, CustomizedTitle } from '../../../customizedCSS'
import UserList from './UserList'

function Index() {
  useEffect(() => {
    async function getOrderByUser() {
      let response = await axios.get(`http://localhost:5000/api/v1/user`)
      const userData = response.data
      console.log(userData)
    }
    getOrderByUser()
  }, [])
  return (
    <div>
      <CustomizedTitle> User Manage</CustomizedTitle>
      <CustomizedText> User list </CustomizedText>
      <UserList userData={userData} />
    </div>
  )
}

export default Index
