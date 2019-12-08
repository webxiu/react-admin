import React, { Component } from 'react'
import './App.less';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    )
  }
}
// 使用 Mock
// var Mock = require('mockjs')
// var data = Mock.mock({
//     'list|1-10': [{
//         'id|+1': 1,
//         'name': '@name',
//         'address': '@address'
//     }]
// })
// // 输出结果
// // console.log('mock',JSON.stringify(data, null, 4))
// console.log('App.js => mock')
