import getData from '../jsonFile/carousalData'
import getLunchData from '../jsonFile/menuLunchData'
import getBarData from '../jsonFile/MenuBarData'
import getStoryData from '../jsonFile/OurStoryData'

const initialState = {
  initialState : {},
  initialStateMenuLunch : {},
  initialStateMenuBar : {},
  initialStateStory : {},
  initialFoodMenu : {},
  initialFoodMenuDetail:{},
  initialcartDetail:{},
};

export const carousalAction = () => async dispatch => {

  var initialState = getData()
  await dispatch({
      type: 'SIMPLE_ACTION',
      payload:initialState
  })
 }

 export const MenuLunchAction = () => async dispatch => {
  var initialStateMenuLunch = getLunchData()
  await dispatch({
      type: 'MENU_LUNCH_ACTION',
      payload:initialStateMenuLunch
  })
 }

 export const MenuBarAction = () => async dispatch => {
  var initialStateMenuBar = getBarData()
  await dispatch({
      type: 'MENU_BAR_ACTION',
      payload:initialStateMenuBar
  })
 }

 export const StoryAction = () => async dispatch => {
  var initialStateStory = getStoryData()
  await dispatch({
      type: 'MENU_STORY_ACTION',
      payload:initialStateStory
  })
 }

 export const FoodMenuDetailsAction = () => async dispatch => {
  var initialFoodMenu = getLunchData()
  await dispatch({
    type: 'FOOD_LUNCH_MENU_ACTION',
    payload: initialFoodMenu
  })
 }

 export const GetProductDetailById = (id) => async dispatch => {
  var initialFoodMenuDetail = getLunchData().find(x=>x.foodMenuID===id)
  await dispatch({
    type: 'FOOD_PRODUCT_DETAIL_ACTION',
    payload: initialFoodMenuDetail
  })
 }

 export const CartDetailsAction = () => async dispatch => {
  var initialcartDetail = getLunchData()
  await dispatch({
    type: 'FOOD_PRODUCT_CART_ACTION',
    payload: initialcartDetail
  })
 }

 

  export const reducer = ( state , action )=>{
  state = state || initialState;
  switch (action.type) {
    case 'SIMPLE_ACTION':
     return {
      ...state,
      initialState: action.payload
    }
    
    case 'MENU_LUNCH_ACTION' :
      return {
        ...state,
        initialStateMenuLunch: action.payload
    }
    
    case 'MENU_BAR_ACTION' :
      return {
        ...state,
        initialStateMenuBar: action.payload
    }

    case 'MENU_STORY_ACTION' :
        return {
          ...state,
          initialStateStory: action.payload
      }

      case 'FOOD_LUNCH_MENU_ACTION' :
        return {
          ...state,
          initialFoodMenu: action.payload
      }

      case 'FOOD_PRODUCT_DETAIL_ACTION' :
        return {
          ...state,
          initialFoodMenuDetail : action.payload

        }

      case 'FOOD_PRODUCT_CART_ACTION' :
        return {
          ...state,
          initialcartDetail : action.payload
        }
    
    default:
     return state
   }
 }