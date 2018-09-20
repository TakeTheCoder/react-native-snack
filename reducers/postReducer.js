import { ALL_POSTS} from './../actions/types';
import { NEW_POST} from './../actions/types';

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
      
    default:
      return state;
  }
}