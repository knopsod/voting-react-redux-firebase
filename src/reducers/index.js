import { combineReducers } from 'redux';
import votesReducer from './votesReducer';
import userReducer from './userReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  votes: votesReducer,
  user: userReducer,
  loading: loadingReducer,
});

export default rootReducer;