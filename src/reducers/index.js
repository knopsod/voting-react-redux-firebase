import { combineReducers } from 'redux';
import votesReducer from './votesReducer';

const rootReducer = combineReducers({
  votes: votesReducer
});

export default rootReducer;