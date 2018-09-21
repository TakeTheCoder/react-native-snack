import { LOADING, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS, LOGOUT_FAILED, SIGNUP_SUCCESS, SIGNUP_FAILED } from './../actions/types';


const initialState = {
  isAuthenticated: false,
  user: null,
  loginErrors: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
    return {
      ...state,
      isLoading: true,
    }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true, 
        user: action.payload,
        loginErrors: [],
        isLoading: false
      }
    case LOGIN_FAILED:
      return {
        ...state,
        loginErrors: action.payload,
        isLoading: false
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        isLoading: false
      }
    default:
      return state;
  }
}