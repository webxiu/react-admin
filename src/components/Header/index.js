import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal } from 'antd';
// import userInfo from '../../utils/userInfo';
import { logout } from '../../redux/actions';

import axios from "../../axios";
import "./index.less";

class Header extends Component {
    state = {
        city: ''
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        const url = 'http://api.map.baidu.com/reverse_geocoding/v3/?ak=vGTZDfGlspDOWumrAHKvBBhk7ZKWOBD1&output=json&coordtype=wgs84ll&location=31.225696,121.49884';
        axios.jsonp({
            url: url
        }).then(res => {
            let { city } = res.result.addressComponent
            this.setState({ city })
            // console.log('header天气==',city);
        }).catch(error => {
            console.log(556565);

        })
    }
    logout = () => {
        Modal.confirm({
            content: '确定要退出吗?',
            onOk: ()=>{
                // userInfo.removeUser()
                // this.props.history.replace('/login')
                // 使用分发操作
                this.props.logout()
            }
        })
    }
    render() {
        let title = this.props.headTitle
        let user = this.props.user
        return (
            <div className="header-box">
                <div className="header-left">位置 / {title}</div>
                <div className="header-right">
                    {this.state.city}&nbsp; 欢迎您,&nbsp;
                    <span>{user.username}</span>&nbsp;&nbsp;
                    <span style={{cursor: 'pointer'}} onClick={this.logout}>[退出]</span>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({ // 第一个单数传属性
        headTitle: state.headTitle,
        user: state.user
    }),
    {logout} // 第二个参数传方法
)(withRouter(Header))

