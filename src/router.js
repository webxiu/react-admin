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

/**
 * 改造后的路由, 去掉/admin前缀,
 * 将同级路由/login, /order/detail 放在前面方便匹配, 同时在外面又包了一个Switch
 */
export default class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/order/detail" component={Login} />
                        {/* /根目录 放最下面 */}
                        <Route path="/" render={() =>
                            <Admin>
                                <Switch>
                                    {/* <Route path="/ui/:id" component={Button} /> */}
                                    <Redirect from="/" to="/home" exact={true} />
                                    <Route path="/home" component={Home} />
                                    <Route path="/ui/button" component={Button} />
                                    <Route path="/ui/banner" component={Banner} />
                                    <Route path="/hacker" component={Hacker} />
                                    <Route path="/table" component={Table} />
                                    <Route path="/form" component={UserForm} />
                                    <Route path="/permission" component={Permission} />
                                    <Route component={Nomatch} />
                                </Switch>
                            </Admin>
                        } />
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
