import { combineReducers } from 'redux'
import simpleReducer from './simpleReducer'
import cartReducer from './cartReducer'

export default combineReducers({
  simpleReducer,
  cartReducer
})
