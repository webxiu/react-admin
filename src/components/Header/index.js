import React, { Component } from 'react'
import axios from "../../axios";
import "./index.less";
import memoryInfo from '../../utils/memoryInfo';

export default class Header extends Component {
    state = {
        city:''
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
            this.setState({city})
            // console.log('header天气==',city);
        }).catch(error => {
            console.log(556565);

        })
    }
    render() {
        let user = memoryInfo.user
        return (
            <div className="header-box">
                <div className="header-left">首页 / 系统设置</div>
                <div className="header-right">{this.state.city} = 欢迎您, <span>{user.username}</span></div>
            </div>
        )
    }
}
