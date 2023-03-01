import { LOGIN_USER_DATA } from '../actions/action-types/cart-actions'

const initState = {
  userData: {}
}

const userReducer = (state = initState, action) => {
  state = state || initState
  if (action.type === LOGIN_USER_DATA) {
    console.log(action.userData)
    return {
      ...state,
      userData: action.userData
    }
  } else {
    return state
  }
}

export default userReducer
