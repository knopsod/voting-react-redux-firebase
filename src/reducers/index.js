import { combineReducers } from 'redux';
import votesReducer from './votesReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  votes: votesReducer,
  user: userReducer
});

export default rootReducer;