import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
// import {  combineReducers, compose, createStore } from 'redux';
import * as carousalAction from './actions/carousalAction'
import * as MenuLunchAction from './actions/carousalAction'
import * as StoryAction from './actions/carousalAction'
import * as FoodMenuDetailsAction from './actions/carousalAction'
import * as CartDetailsAction from './actions/carousalAction'



export default function configureStore(initialState={}) {

  const reducers = {
    homePageData : carousalAction.reducer,
    menulunchdata : MenuLunchAction.reducer,
    storyData : StoryAction.reducer,
    foodmenulunchdata : FoodMenuDetailsAction.reducer,
    cartdata : CartDetailsAction.reducer
  };

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
});

 return createStore(
  rootReducer,
   initialState,
   applyMiddleware(thunk)
 );
}