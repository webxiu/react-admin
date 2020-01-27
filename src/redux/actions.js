/**
 * 包含n个action creator 函数的模块
 * 同步action: 对象 {type: 'xxx', data: 数据}
 * 异步action: 函数 dispatch => {}
 */

import { SET_HEAD_TITLE, LOGIN_INFO, SHOW_ERROR_MSG, RESET_USER } from './action-type';
import { reqLogin } from "../api";
import userInfo from '../utils/userInfo';
import { message } from 'antd';

// import { message } from 'antd';

// 设置头部标题的同步action
export const setHeadTitle = (data) => ({ type: SET_HEAD_TITLE, data: data })
// 获得登录信息的同步action
export const loginInfo = (loginData) => ({ type: LOGIN_INFO, loginData })
// 显示错误信息的同步action
export const showErrorMsg = (errorMsg) => ({ type: SHOW_ERROR_MSG, errorMsg })

// 退出登录
export const logout = () => {
    // 删除本地存储
    userInfo.removeUser()
    // 返回action对象
    return { type: RESET_USER }
}

export const login = (username, password) => {
    return dispatch => {
        // 执行一步ajax请求
        reqLogin({ username, password,showLoading: true }).then(res => {
            console.log('登录', res);
            if (res.status === 200) {
                message.success('登录成功')
                const userObj = res.data[0]
                userInfo.saveUser(userObj) // 设置本地存储
                dispatch(loginInfo(userObj)) // 分发接收用户的同步action
            } else {
                const msg = res.msg;
                message.error(msg) // 简单方式
                dispatch(showErrorMsg(msg)) // 分发出去
            }

        })
        // 分发成功/失败的同步action
    }
}