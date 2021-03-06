import { VOTES_STATUS, USER_STATUS } from "../actionTypes";

export default function(state={}, action) {
  switch(action.type) {
    case VOTES_STATUS:
      return { ...state, votes: action.payload };
    case USER_STATUS:
      return { ...state, user: action.payload };

    default:
      return state;
  }
}