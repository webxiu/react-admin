import React, { Component } from 'react'
import { Button } from 'antd';

export default class Buttons extends Component {

    state = {
        num: 100
    }
    static defaultProps = {
        abc: 11
    }
    // getDefaultProps(){
    //     console.log('getDefaultProps--1');
    // }
    // getInitialState(){
    //     console.log('getInitialState--2');
    // }

    //生命周期函数及其参数:
    componentWillMount() {
        console.log('componentWillMount--3');
    }
    componentDidMount() {
        console.log('componentDidMount--5');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate--11');
        // console.log(nextProps, nextState.num);
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate--33');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate--55');
    }

    // 方法
    add = () => {
        let num = this.state.num
        console.log('点击获取状态', this.state.num);
        console.log('点击获取属性', this.props.abc);
        this.setState({
            num: ++num
        })
    }
    render() {
        console.log('render--4');
        return (
            <div>
                Button 页面 {this.state.num}
                <Button type="primary" onClick={this.add}>Primary</Button>
                <hr />
                <Son num={this.state.num}></Son>
            </div>
        )
    }
}

class Son extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    // 监听函数
    componentWillReceiveProps(nextProps) {
        console.log(`componentWillReceiveProps--旧数据:${this.props.num},新数据:${nextProps.num}`);
    }

    render() {
        return (
            <div>
                子组件页面---{this.props.num}
            </div>
        )
    }
}

