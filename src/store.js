import { combineReducers } from 'redux'
import cartReducer from './reducers/cartReducer'
import userReducer from './reducers/userReducer'

export default combineReducers({
  cartReducer,
  userReducer
})
