import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Main from "./Main";
import About from "../route1/About";
import Topic from "../route1/Topic";
import Home from "./Home";

export default class IRouter extends Component {
    render() {
        return (
            <Router>
                <Home>
                    {/* 不加 exact={true}只能匹配的/ */}
                    {/* <Route exact={true} path="/" component={Main}></Route> */}
                    <Route path="/main" render={() => 
                        <Main>
                            <Route path="/main/child" component={Topic}></Route>
                        </Main>
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topic" component={Topic}></Route>
                </Home>
            </Router>

        )
    }
}
