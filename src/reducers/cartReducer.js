import getLunchData from '../jsonFile/menuLunchData'
import getBarData from '../jsonFile/MenuBarData'
import getStoryData from '../jsonFile/OurStoryData'
import getData from '../jsonFile/carousalData'
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  UPDATE_CART_ICON,
  UPDATE_HEADER,
  UPDATE_SIDEBAR_OPEN_STATUS
} from '../actions/action-types/cart-actions'

const _ = require('lodash')

const initState = {
  Lunchitems: getLunchData(),
  Baritems: getBarData(),
  Storytems: getStoryData(),
  Carousalitems: getData(),
  addedItems: [],
  subTotal: 0,
  StateData: {},
  shippingCharge: 25,
  restaurentCharges: 25,
  deliveryCharges: 20,
  isUserLoggedIn: false,
  sidebarOpen: false
}

const cartReducer = (state = initState, action) => {
  state = state || initState
  let newTotal = state.subTotal

  if (action.type === ADD_TO_CART) {
    let addedItem = []

    if (state.addedItems.length > 0) {
      const item = state.addedItems.findIndex(
        (items) => items.foodMenuID === action.id
      )
      if (item < 0) {
        addedItem = state.Lunchitems.find(
          (Lunchitems) => Lunchitems.foodMenuID === action.id
        )
        addedItem.quantity = 1
        addedItem.foodProductTotal = Number(addedItem.foodMenuProductPrice)
        newTotal = newTotal + addedItem.foodProductTotal
        state.addedItems.push(addedItem)
      } else {
        state.addedItems[item].foodProductTotal =
          Number(state.addedItems[item].foodProductTotal) +
          Number(state.addedItems[item].foodMenuProductPrice)
        state.addedItems[item].quantity += 1
        newTotal =
          newTotal + Number(state.addedItems[item].foodMenuProductPrice)
      }
    } else {
      addedItem = state.Lunchitems.find(
        (Lunchitems) => Lunchitems.foodMenuID === action.id
      )
      addedItem.quantity = 1
      addedItem.foodProductTotal = Number(addedItem.foodMenuProductPrice)
      newTotal = newTotal + Number(addedItem.foodMenuProductPrice)
      state.addedItems.push(addedItem)
    }

    return {
      ...state,
      addedItems: state.addedItems,
      subTotal: newTotal
    }
  }

  if (action.type === ADD_QUANTITY) {
    const addedItem = state.Lunchitems.find(
      (Lunchitems) => Lunchitems.foodMenuID === action.id
    )
    if (addedItem.quantity <= 8) {
      addedItem.quantity += 1
      addedItem.foodProductTotal =
        Number(addedItem.foodMenuProductPrice) * addedItem.quantity
      newTotal = newTotal + Number(addedItem.foodMenuProductPrice)
      return {
        ...state,
        addedItems: state.addedItems,
        subTotal: newTotal
      }
    } else {
      alert('Maximum Quantity Limit Exceeded')
    }
  }

  if (action.type === SUB_QUANTITY) {
    const addedItem = state.Lunchitems.find(
      (Lunchitems) => Lunchitems.foodMenuID === action.id
    )
    if (addedItem.quantity === 1) {
      const newItems = _.filter(state.addedItems, function (o) {
        return o.foodMenuID !== action.id
      })

      addedItem.foodProductTotal =
        addedItem.foodProductTotal - Number(addedItem.foodMenuProductPrice)
      newTotal = newTotal - Number(addedItem.foodMenuProductPrice)

      return {
        ...state,
        addedItems: newItems,
        subTotal: newTotal
      }
    } else {
      addedItem.quantity -= 1
      addedItem.foodProductTotal =
        addedItem.foodProductTotal - Number(addedItem.foodMenuProductPrice)
      newTotal = newTotal - Number(addedItem.foodMenuProductPrice)
      return {
        ...state,
        addedItems: state.addedItems,
        subTotal: newTotal
      }
    }
  }

  if (action.type === REMOVE_ITEM) {
    const addedItem = state.Lunchitems.find(
      (Lunchitems) => Lunchitems.foodMenuID === action.id
    )
    const newItems = _.filter(state.addedItems, function (o) {
      return o.foodMenuID !== action.id
    })
    newTotal = newTotal - Number(addedItem.foodProductTotal)

    return {
      ...state,
      addedItems: newItems,
      subTotal: newTotal
    }
  }

  if (action.type === UPDATE_CART_ICON) {
    const addedItem = state.Lunchitems.find(
      (Lunchitems) => Lunchitems.foodMenuID === action.id
    )

    const newItems = _.filter(state.addedItems, function (o) {
      return o.foodMenuID !== action.id
    })

    newItems.quantity = action.payload.quantity

    newItems.push(addedItem)

    return {
      ...state,
      cart: newItems
    }
  }

  if (action.type === UPDATE_HEADER) {
    return {
      ...state,
      isUserLoggedIn: action.isUserLoggedIn
    }
  }

  if (action.type === UPDATE_SIDEBAR_OPEN_STATUS) {
    return {
      ...state,
      sidebarOpen: action.value
    }
  } else {
    return state
  }
}

export default cartReducer
