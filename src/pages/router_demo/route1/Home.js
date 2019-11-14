import React, { Component } from 'react'
import { HashRouter,BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Topic from "./Topic";
export default class Home extends Component {
    render() {
        return (
            // <HashRouter>
            //     <div>
            //         <ul>
            //             <li><Link to="/">Main</Link></li>
            //             <li><Link to="/about">About</Link></li>
            //             <li><Link to="/topic">Topic</Link></li>
            //         </ul>
            //     </div>
            //     <hr />
            //     {/* <Route exact={true} path="/" component={Main}></Route>
            //     <Route path="/about" component={About}></Route>
            //     <Route path="/topic" component={Topic}></Route> */}
            //     <Switch>
            //         {/* 不加 exact={true}只能匹配的/ */}
            //         <Route exact={true} path="/" component={Main}></Route>
            //         <Route path="/about" component={About}></Route>
            //         <Route path="/topic" component={Topic}></Route>
            //     </Switch>
            // </HashRouter>



            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/">Main</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topic">Topic</Link></li>
                    </ul>
                </div>
                <hr />
                {/* <Route exact={true} path="/" component={Main}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/topic" component={Topic}></Route> */}
                <Switch>
                    {/* 不加 exact={true}只能匹配的/ */}
                    <Route exact={true} path="/" component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topic" component={Topic}></Route>

                </Switch>
            </BrowserRouter>
        )
    }
}
