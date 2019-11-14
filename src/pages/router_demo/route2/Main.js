import React, { Component } from 'react'
import { HashRouter, Route, Link } from "react-router-dom";

export default class Main extends Component {
    render() {
        return (
            <div>
                Main55555
                <Link to="/main/child">子路由</Link>
                <hr />
                {this.props.children}
            </div>

        )
    }
}
