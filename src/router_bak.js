import React, { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Admin from "./Admin"
import Home from "./pages/home"
import Button from "./pages/ui/button"
import Banner from "./pages/ui/banner"
import Hacker from "./pages/hacker"
import Table from "./pages/table"
import UserForm from "./pages/userForm"
import Permission from "./pages/permission"
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
                                <Route path="/admin/ui/banner" component={Banner} />
                                <Route path="/admin/hacker" component={Hacker} />
                                <Route path="/admin/table" component={Table} />
                                <Route path="/admin/form" component={UserForm} />
                                <Route path="/admin/permission" component={Permission} />
                                <Redirect from="/" to="/admin" exact={true} />
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
