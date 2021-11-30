import { AllAction, FetchUserById, UserState } from '../../misc/type'

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
    default:
      return state
  }
}
