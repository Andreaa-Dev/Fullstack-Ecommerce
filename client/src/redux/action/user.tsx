import axios from 'axios'
import { Dispatch } from 'redux'

import { FetchUserById, FetchUserByIdAction, UserType } from '../../misc/type'

export function fetchUserSuccess(userByIdData: UserType): FetchUserByIdAction {
  return {
    type: FetchUserById,
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
      .get(`http://localhost:5000/api/v1/user/${userId}`)
      .then((res: any) => {
        const userData = res.data
        dispatch(fetchUserSuccess(userData))
      })
      .catch((error) => console.log(error))
  }
}
