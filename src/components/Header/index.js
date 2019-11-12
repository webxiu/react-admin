import React, { Component } from 'react'
import axios from "../../axios";
export default class Header extends Component {
    componentDidMount(){
        this.getData()
    }
    getData(){
        const url = 'http://t.yushu.im/v2/movie/top250';
        axios.jsonp({
            url:url
        }).then(res => {
            console.log(res);
            
        }).catch(error=>{
            console.log(556565);
            
        })
    }
    render() {
        return (
            <div>
                Header
            </div>
        )
    }
}
