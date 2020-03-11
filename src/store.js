import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import applicationReducer from 'src/app/reducer';
import signInReducer from 'src/pages/sing-in/reduce';

const rootReducer = combineReducers({
  applicationReducer: applicationReducer,
  signIn: signInReducer
});

const logger = createLogger({
  collapsed: true
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
