import axios from 'axios'
import { Dispatch } from 'redux'

import {
  FetchUserById,
  FetchUserByIdAction,
  RemoveUserData,
  RemoveUserDataAction,
  UserType,
} from '../../misc/type'

export function fetchUserSuccess(userByIdData: UserType): FetchUserByIdAction {
  return {
    type: FetchUserById,
    payload: {
      userById: userByIdData,
    },
  }
}

export function removeUserData(userByIdData: UserType): RemoveUserDataAction {
  return {
    type: RemoveUserData,
    payload: {
      userById: userByIdData,
    },
  }
}
//redux-thunk

// fetch all product
export function fetchUserData(userId: string) {
  return (dispatch: Dispatch) => {
    axios
      .get(`/user/${userId}`)
      .then((res: any) => {
        const userData = res.data
        dispatch(fetchUserSuccess(userData))
      })
      .catch((error) => console.log(error))
  }
}
