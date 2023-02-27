import getLunchData from '../jsonFile/menuLunchData'
import getBarData from '../jsonFile/MenuBarData'
import getStoryData from '../jsonFile/OurStoryData'
import getData from '../jsonFile/carousalData'
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, UPDATE_CART_ICON , SIGN_UP , LOG_IN , LOG_OUT , REGISTER , LOADER_UPDATE, UPDATE_HEADER } from '../actions/action-types/cart-actions'

var _ = require('lodash');

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
    isRegister : false,
    isLoggedIn : false,
    email : "",
    password : "",
    navUser : false,
    userData : {},
    isUserLoggedIn: false,
}

const cartReducer = (state = initState, action) => {

    state = state || initState
    var newTotal = state.subTotal;

    // let cart = state.cart;
// debugger
    if (action.type === ADD_TO_CART) {

        let addedItem = [];

        if (state.addedItems.length > 0) {
            var item = state.addedItems.findIndex(items => items.foodMenuID === action.id);
            if (item < 0) {
                addedItem = state.Lunchitems.find(Lunchitems => Lunchitems.foodMenuID === action.id)
                addedItem.quantity = 1;
                addedItem.foodProductTotal = Number(addedItem.foodMenuProductPrice);
                newTotal = newTotal + addedItem.foodProductTotal
                // console.log(newTotal)
                state.addedItems.push(addedItem);
            }
            else {
                state.addedItems[item].foodProductTotal = Number(state.addedItems[item].foodProductTotal) + Number(state.addedItems[item].foodMenuProductPrice)
                state.addedItems[item].quantity += 1;
                newTotal = newTotal + Number(state.addedItems[item].foodMenuProductPrice)
                //    console.log(newTotal)
            }
        }
        else {
            addedItem = state.Lunchitems.find(Lunchitems => Lunchitems.foodMenuID === action.id)
            addedItem.quantity = 1;
            addedItem.foodProductTotal = Number(addedItem.foodMenuProductPrice);
            newTotal = newTotal + Number(addedItem.foodMenuProductPrice)
            // console.log(newTotal)
            state.addedItems.push(addedItem);
        }

        return {
            ...state,
            addedItems: state.addedItems,
            subTotal: newTotal
        }
    }

    if (action.type === ADD_QUANTITY) {
        let addedItem = state.Lunchitems.find(Lunchitems => Lunchitems.foodMenuID === action.id)
        if (addedItem.quantity <= 8) {
            addedItem.quantity += 1
            addedItem.foodProductTotal = Number(addedItem.foodMenuProductPrice) * addedItem.quantity
            newTotal = newTotal + Number(addedItem.foodMenuProductPrice)
            //  console.log(newTotal)
            return {
                ...state,
                addedItems: state.addedItems,
                subTotal: newTotal
            }
        }

        else {
            alert('Maximum Quantity Limit Exceeded')
        }
    }

    if (action.type === SUB_QUANTITY) {
        let addedItem = state.Lunchitems.find(Lunchitems => Lunchitems.foodMenuID === action.id)
        if (addedItem.quantity === 1) {
            // alert('Maximum Quantity Limit Exceeded')

            let new_items = _.filter(state.addedItems, function (o) { return o.foodMenuID !== action.id; });

            addedItem.foodProductTotal = addedItem.foodProductTotal - (Number(addedItem.foodMenuProductPrice))
            newTotal = newTotal - Number(addedItem.foodMenuProductPrice);
            // console.log(newTotal)

            return {
                ...state,
                addedItems: new_items,
                subTotal: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            addedItem.foodProductTotal = addedItem.foodProductTotal - Number(addedItem.foodMenuProductPrice)
            newTotal = newTotal - Number(addedItem.foodMenuProductPrice)
            // console.log(newTotal)
            return {
                ...state,
                addedItems: state.addedItems,
                subTotal: newTotal
            }
        }
    }

    if (action.type === REMOVE_ITEM) {
        let addedItem = state.Lunchitems.find(Lunchitems => Lunchitems.foodMenuID === action.id)
        let new_items = _.filter(state.addedItems, function (o) { return o.foodMenuID !== action.id; });
        newTotal = newTotal - Number(addedItem.foodProductTotal)

        return {
            ...state,
            addedItems: new_items,
            subTotal: newTotal
        }
    }

    if (action.type === UPDATE_CART_ICON) {

        let addedItem = state.Lunchitems.find(Lunchitems => Lunchitems.foodMenuID === action.id)

        let new_items = _.filter(state.addedItems, function (o) { return o.foodMenuID !== action.id; });

        new_items.quantity = action.payload.quantity;

        new_items.push(addedItem);

        return {
            ...state,
            cart: new_items
        };
    }

    if(action.type === SIGN_UP){

        if(action.id){
            state.isRegister = true;
        }
        else{
            state.isRegister = false;
        }

        return {
            ...state,
        }
    }

    if(action.type === LOG_IN){
        if(action.id){
            state.isLoggedIn = true;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.navUser = true
        }

        return {
            ...state,
        }
    }

    if(action.type === LOG_OUT){
        state.isLoggedIn = false;
        return {
            ...state
        }
    }

    if(action.type === REGISTER){
        state.userData.first_name = action.payload.first_name;
        state.userData.last_name = action.payload.last_name;
        state.userData.email = action.payload.email;
        state.userData.password = action.payload.password;

        if(state.userData.first_name === "" || state.userData.last_name ==="" || state.userData.email === "" || state.userData.password === ""){
            state.isRegister = true
        }
        else{
            state.isRegister = false
        }

        return {
            ...state
        }
    }

    if(action.type === UPDATE_HEADER) {
        return {
            ...state,
            isUserLoggedIn: action.isUserLoggedIn
        }
    }

    if(action.type === LOADER_UPDATE){
        console.log(['loader'])
    }

    else {
        return state
    }
}



export default cartReducer;