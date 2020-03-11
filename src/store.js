import { createStore, combineReducers } from 'redux';
import applicationReducer from 'src/app/reducer';

const rootReducer = combineReducers({
  applicationReducer: applicationReducer
});

const store = createStore(rootReducer);

export default store;
