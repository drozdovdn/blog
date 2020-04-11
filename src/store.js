import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunk from 'redux-thunk'

import applicationReducer from 'src/app/reducer';
import signInReducer from 'src/pages/sing-in/reduce';
import signUpReducer from 'src/pages/sing-up/reduce';
import newPostReducer from 'src/pages/new-post/reduser';
import postReduser from 'src/pages/post/reduser';
import mainReduser from 'src/pages/main/reduser';
import myPageReduser from 'src/pages/my-page/reduser';
import modalReduser from 'src/components/modal/reduser';
import {history} from 'src/history';

const logger = createLogger({
    collapsed: true
});
// --------- ПРИМЕР: --------------
// function myMiddleware(store) {
//     return function (next) {
//         return function (action) {
//             if(typeof action === 'function' ) {
//                 action(store.dispatch)
//             } else {
//                 next(action);
//             }
//             // console.log('myMiddleware', action);
//
//         }
//     }
// }

const middlewares = [
    routerMiddleware(history),
    logger,
    thunk
];


const createRootReducer = (history) => combineReducers({
    router:connectRouter(history),
    applicationReducer: applicationReducer,
    signIn: signInReducer,
    signUp: signUpReducer,
    newPost: newPostReducer,
    postPage: postReduser,
    main: mainReduser,
    myPage: myPageReduser,
    modal: modalReduser
});


const store = createStore(createRootReducer(history), applyMiddleware(...middlewares));
export default store;