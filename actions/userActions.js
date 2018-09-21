import { LOADING, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS, LOGOUT_FAILED, SIGNUP_SUCCESS, SIGNUP_FAILED } from './types';
import apiFetch from './../api';
import {NavigationActions} from 'react-navigation';
import {AsyncStorage} from 'react-native';


export const login = (user) => dispatch => {
  dispatch({
    type: LOADING
  })
  apiFetch('/auth/login', 'POST', {
    user: user
  })
  .then(resp => {
    if (resp.ok){
      resp.json().then(user => {
        AsyncStorage.setItem('userToken', user.token).then(token => {
          dispatch({
          type: LOGIN_SUCCESS,
          payload: user
          })
          dispatch(
            NavigationActions.navigate({routeName: 'App'})
          );
        })
        
      })
    } else {
      resp.json().then(resp => {
        dispatch({
          type: LOGIN_FAILED,
          payload: resp.errors
        })
      })
    }
  })
}

export const logout = (user) => dispatch => {
  dispatch({
    type: LOADING
  })
  apiFetch('/auth/logout', 'DELETE', {
    user: user
  })
  .then(resp => {
    if (resp.ok){
      resp.json().then(user => {
        AsyncStorage.removeItem('userToken').then(() => {
          dispatch({
          type: LOGOUT_SUCCESS,
          })
          dispatch(
            this.props.navigation.navigate('AuthLoading')
          );
        })
        
      })
    } else {
      resp.json().then(resp => {
        dispatch({
          type: LOGIN_FAILED,
          payload: resp.errors
        })
      })
    }
  })
}