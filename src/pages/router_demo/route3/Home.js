import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
                <div>
                    <ul>
                        <li><Link to="/main/abc">动态路由abc</Link></li>
                        <li><Link to="/main/564">动态路由564</Link></li>
                        <li><Link to="/about">About2</Link></li>
                        <li><Link to="/topic">Topic2</Link></li>
                        <li><Link to="/test">404测试页面</Link></li>
                        <li><Link to="/test2">404测试页面2</Link></li>
                    </ul>
                    <hr/>
                     {this.props.children}
                </div>

        )
    }
}
