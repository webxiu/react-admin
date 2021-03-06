import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Home from "./pages/router_demo/route1/Home";// 路由分发页面
// import Router from "./pages/router_demo/route2/router";// 路由分发页面
import Router from "./router"

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
