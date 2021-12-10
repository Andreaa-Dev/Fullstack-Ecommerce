import {
  AllAction,
  FetchUserById,
  RemoveUserData,
  UserState,
} from '../../misc/type'

const intitialState: UserState = {
  userById: null,
}

export default function user(
  state = intitialState,
  action: AllAction
): UserState {
  switch (action.type) {
    case FetchUserById:
      return {
        ...state,
        userById: action.payload.userById,
      }

    case RemoveUserData:
      return intitialState
    default:
      return state
  }
}
