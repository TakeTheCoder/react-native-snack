import { combineReducers } from 'redux';
import postReducer from './postReducer';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigator from './../navigation/AppNavigator';

const navReducer = createNavigationReducer(AppNavigator);

export default combineReducers({
  nav: navReducer,
  post: postReducer
});

