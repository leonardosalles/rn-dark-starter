import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import userReducer from './user';


const reducers = {
  session: sessionReducer,
  userReducer
};

export default combineReducers(reducers);