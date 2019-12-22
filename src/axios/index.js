
import Jsonp from "jsonp";
import axios from "axios";
import qs from 'qs';
import { Modal, message } from "antd";

export default class Axios {
    // 跨域请求
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            Jsonp(options.url, {
                params: 'callback',
                timeout: 0,
                prefix: '__jp'
            }, (err, res) => {
                // console.log('jsonp', err, res);
                if (res && res.status === 0) {
                    resolve(res)
                } else {
                    reject(res)
                    message.error('获取天气失败')
                }
            })
        })
    }
    // axios
    static ajax(options) {
        // inde.html加载元素获取
        let loading = document.getElementById('ajaxLoading')
        // 接口baseurl
        let baseApi = process.env.NODE_ENV === 'development' ? 'http://localhost' : 'http://www.xiuhai.net/admin'
        // 是否显示加载
        let showLoading = false

        // 判断请求方法
        if (options.method === 'post') {
            showLoading = options.data.showLoading
        } else if (options.method === 'get') {
            showLoading = options.params.showLoading
        }

        // 加载函数
        const loadingDialog = (showLoading) => {
            if (showLoading) {
                loading.style.display = 'block'
            } else {
                setTimeout(() => {
                    loading.style.display = 'none'
                }, 3000)
            }
        }
        const instance = axios.create({
            baseURL: baseApi,
            timeout: 5000
        })
        // instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

        // 请求拦截
        instance.interceptors.request.use(
            config => {
                console.log('请求拦截', config);
                if (config.method === 'post') {
                    config.data = qs.stringify(config.data)
                }
                loadingDialog(showLoading)

                // 请求前to do something
                return config
            }, error => {
                return Promise.reject(error)
            })
        // 响应拦截
        instance.interceptors.response.use(response => {
            let res = response.data
            console.log('响应拦截', res);
            if (res.status === 200) {
                // if (res.hasOwnProperty('data')) {
                //   return res.data
                // } else {
                //   return res
                // }
                loadingDialog(false) // 隐藏加载
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
                    loadingDialog(false)
                    throw new Error(res)
                }
            }
            return res
        }, error => {
            console.log('err' + error) // for debug
            Modal.info({
                title: '提示',
                content: error.msg
            })
            loadingDialog(false)
            return Promise.reject(error)
        })
        return instance(options) // 将参数传入axios
    }
}



