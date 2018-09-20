import { ALL_POSTS, NEW_POST, DELETE_POST } from './../actions/types';


const initialState = {
  items: []
}

export default (state = initialState, action) => {
  switch(action.type){
    case ALL_POSTS:
      return {
        ...state,
        items: action.payload
      }
    case NEW_POST:
      return {
        ...state,
        items: [action.payload, ...state.items]
      }
    case DELETE_POST:
      return {
        ...state,
        items: state.items.filter((post) => {

          return post.id !== action.payload
        })
      }  
      
    default:
      return state;
  }
}