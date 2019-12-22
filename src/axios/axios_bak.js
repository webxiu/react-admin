
// import Jsonp from "jsonp";
import axios from "axios";
import qs from 'qs';
import { message } from "antd";

let baseApi = process.env.NODE_ENV === 'development' ? 'http://localhost' : 'http://www.xiuhai.net/admin'
const instance = axios.create({
    baseURL: baseApi,
    timeout: 5000
})
// 请求拦截
instance.interceptors.request.use(
    config => {
        console.log('请求拦截', config);
        if (config.method ==='post') {
            config.data = qs.stringify(config.data)
        }

        // 请求前to do something
        return config
    }, error => {
        return Promise.reject(error)
    })
// 响应拦截
instance.interceptors.response.use(res => {
    console.log('响应拦截', res);
    if (res.status === 200) {
        // if (res.hasOwnProperty('data')) {
        //   return res.data
        // } else {
        //   return res
        // }
        // loadingDialog(options.params);
        return res
    } else {
        if (res.status === 401) {
            setTimeout(() => {
                // store.dispatch('user/logout')
                // location.href = '/login'
            }, 1000)
            message.error('token过期，请重新登录')
        } else {
            message({
                message: res.msg || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            loadingDialog(options.params);
            throw new Error(res)
        }
    }
    return res
}, error => {
    console.log('err' + error) // for debug
    message({
        message: error.msg,
        type: 'error',
        duration: 5 * 1000
    })
    loadingDialog(options.params);
    return Promise.reject(error)
})

export default instance


