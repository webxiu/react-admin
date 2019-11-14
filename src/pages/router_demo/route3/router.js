import React, { Component } from 'react'
import { HashRouter as Router, Route, Link,Switch } from "react-router-dom";

import Home from "./Home";
import Main from "./Main";
import Info from "./Info";
import Nomatch from "./Nomatch";
import About from "../route1/About";
import Topic from "../route1/Topic";

export default class IRouter extends Component {
    render() {
        return (
            <Router>
                <Home>
                    {/* Switch是为了精确匹配路由 */}
                    <Switch>
                        {/* 不加 exact={true}只能匹配的/,加上就是精准匹配 */}
                        {/* <Route exact={true} path="/" component={Main}></Route> */}
                        <Route path="/main" render={() => 
                            <Main>
                                <Route path="/main/:id" component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route component={Nomatch}></Route>

                    </Switch>
                </Home>
            </Router>

        )
    }
}
