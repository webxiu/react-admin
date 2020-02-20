import React, { Component } from 'react'
import ReactTypes from 'prop-types';

export default class Context extends Component {

    state = {
        color: 'red'
    }
    // 1.方法  getChildContext 固定写法
    getChildContext() {
        return {
            color: this.state.color
        }
    }

    // 2.类型约定
    static childContextTypes = { // childContextTypes 固定写法
        color: ReactTypes.string
    }


    render() {
        console.log('render--4');
        return (
            <div>
                <h1>这是父组件</h1>
                <hr />
                <Son></Son>
            </div>
        )
    }
}

class Son extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>这是子组件</h1>
                <hr />
                <Con color={this.props.color}></Con>
            </div>
        )
    }
}

class Con extends Component {

    // 3.校验属性--必须
    static contextTypes = { // contextTypes 固定写法
        color: ReactTypes.string
    }

    render() {
        return (
            <div>
                <h1 style={{ color: this.context.color }}>这是孙子组件</h1>
            </div>
        )
    }
}
