import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from './user/userReducer';
import objectReducer from './object/objectReducer';
import contractReducer from './contract/contractReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  user: userReducer,
  obkect: objectReducer,
  contract: contractReducer
});

export default rootReducer;
