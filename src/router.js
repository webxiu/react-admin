import React, { Component } from 'react'
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Admin from "./admin"
import Home from "./pages/home"
import Button from "./pages/ui/button"
import Hacker from "./pages/hacker"
import Nomatch from "./pages/nomatch"

export default class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                {/* <Route path="/admin/ui/:id" component={Button} /> */}
                                <Route path="/admin/home" component={Home} />
                                <Route path="/admin/ui/button" component={Button} />
                                <Route path="/admin/hacker" component={Hacker} />
                                <Route component={Nomatch} />
                            </Switch>
                        </Admin>
                    } />
                    <Route path="/order/detail" component={Login} />
                </App>
            </HashRouter>
        )
    }
}
