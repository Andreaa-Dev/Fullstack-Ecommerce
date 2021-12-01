import React from 'react'
import { UserType } from '../../misc/type'

// type UserDataType = {
//   acceptedTerms: boolean
//   email: string
//   firstName: string
//   lastName: string
//   role: string
//   _id: string
// }

type UserDataPropType = {
  userData: UserType | null
}

function UserDetail({ userData }: UserDataPropType) {
  return <div>First Name: {userData?.firstName}</div>
}

export default UserDetail
