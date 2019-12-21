/**
 * redux嘴核心的管理对象store
 */


// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import reducer from './reducer';

// // 向外暴露store
// const initUser = {};
// export default createStore(reducer, compose(
//     applyMiddleware(...thunk),
//     initUser,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ))


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension'

// 向外暴露store
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))