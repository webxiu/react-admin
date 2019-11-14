import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
                <div>
                    <ul>
                        <li><Link to="/main">Main2</Link></li>
                        <li><Link to="/about">About2</Link></li>
                        <li><Link to="/topic">Topic2</Link></li>
                    </ul>
                    <hr/>
                     {this.props.children}
                </div>

        )
    }
}
