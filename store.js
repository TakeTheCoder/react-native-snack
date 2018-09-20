import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
const initialState = {};

const reduxMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const middlewares = [thunk, reduxMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares),
    
  
);

export default store;