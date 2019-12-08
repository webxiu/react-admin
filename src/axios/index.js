
import Jsonp from "jsonp";
import axios from "axios";
import { Modal } from "antd";

export default class Axios {
    static jsonp(options) {
        console.log(894, options.url);

        return new Promise((resolve, reject) => {
            Jsonp(options.url, {
                params: 'callback',
                timeout: 0,
                prefix: '__jp'
            }, (err, res) => {
                console.log(99999, err, res);

                // if (res) {
                //     resolve(res)
                // } else {
                //     reject(res)
                // }
            })
        })
    }
    // axios
    static ajax(options) {
        let loading = document.getElementById('ajaxLoading')
        let env = process.env.NODE_ENV
        let baseApi = env === 'development' ? 'http://www.xiuhai.net/admin' : 'http:www.taobao.com'
        console.log('当前环境:', env, baseApi);

        if (options.params && options.params.showLoading !== false) {
            loading.style.display = 'block'
        }

        const loadingDialog = (option) => {
            setTimeout(() => {
                if (option.showLoading && option.showLoading !== false) {
                    loading.style.display = 'none'
                }
            }, 3000)
        }
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: options.method,
                baseURL: baseApi,
                timeout: 5000,
                params: options.param
            }).then(res => {
                if (res.status === 200) {
                    if (res.status === 200) {
                        resolve(res.data)
                    } else {
                        Modal.info({
                            title: '提示',
                            content: res.msg
                        })
                    }
                    // 隐藏加载
                    loadingDialog(options.params);
                } else {
                    // 隐藏加载
                    loadingDialog(options.params);
                    reject(res.data)
                }
            }).catch(error => {
                // 隐藏加载
                loadingDialog(options.params);
            })
        })


    }

}



