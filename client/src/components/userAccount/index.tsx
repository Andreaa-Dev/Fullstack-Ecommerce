import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { AppState } from '../../misc/type'
import { fetchUserData } from '../../redux/action'
import { CustomizedTitle } from '../customizedCSS'
import SideBar from './SideBar'
import UserDetail from './UserDetail'

function Index() {
  let param = useParams() as { id: string }
  const dispatch = useDispatch()
  const userData = useSelector((state: AppState) => state.userState.userById)

  useEffect(() => {
    dispatch(fetchUserData(param.id))
  }, [dispatch])

  console.log(userData, 'h')
  return (
    <div>
      <CustomizedTitle> YOUR ACCOUNT</CustomizedTitle>
      <SideBar />
      <UserDetail userData={userData} />
    </div>
  )
}

export default Index
