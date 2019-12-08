import React, { Component } from 'react'
import axios from "../../axios";
import "./index.css";
import memoryInfo from '../../utils/memoryInfo';

export default class Header extends Component {
    componentDidMount(){
        this.getData()
    }
    getData(){
        const url = 'https://enigmatic-island-47099.herokuapp.com/api/profiles/homepage';
        axios.jsonp({
            url:url
        }).then(res => {
            console.log(res);
            
        }).catch(error=>{
            console.log(556565);
            
        })
    }
    render() {
        let user = memoryInfo.user
        return (
            <div className="header-box">
                <div className="header-left">首页 / 系统设置</div>
                <div className="header-right">欢迎您, <span>{user.username}</span></div>
            </div>
        )
    }
}
