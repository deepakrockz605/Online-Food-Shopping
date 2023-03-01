import { LOGIN_USER_DATA } from './action-types/cart-actions'

export const setUserData = (userData) => {
  return {
    type: LOGIN_USER_DATA,
    userData
  }
}
