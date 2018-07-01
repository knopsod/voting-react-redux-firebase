import { GET_VOTES } from '../actionTypes';

export default function(state={}, action) {
  switch (action.type) {
    case GET_VOTES:
      return action.payload;
  
    default:
      return state;
  }
}