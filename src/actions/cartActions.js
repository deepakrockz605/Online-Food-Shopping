import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  UPDATE_CART_ICON,
  UPDATE_HEADER,
  UPDATE_SIDEBAR_OPEN_STATUS
} from './action-types/cart-actions'

// add cart action
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id
  }
}
// remove item action
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  }
}
// subtract quntity action
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id
  }
}
// add quantity action
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id
  }
}

export const updateCartQuantity = (productId, quantity) => {
  return {
    type: UPDATE_CART_ICON,
    payload: {
      productId,
      quantity
    }
  }
}

export const onLoginStatusChange = (isUserLoggedIn) => {
  return {
    type: UPDATE_HEADER,
    isUserLoggedIn
  }
}

export const setSidebarOpen = (value) => {
  return {
    type: UPDATE_SIDEBAR_OPEN_STATUS,
    value
  }
}
