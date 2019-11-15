
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
                prefix:'__jp'
            }, (err, res) => {
                console.log(99999,err, res);

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
        let baseApi = env === 'development' ? 'http:www.baidu.com' : 'http:www.taobao.com'
        console.log('当前环境:', env, baseApi);

        if (options.params && options.params.showLoading !== false) {
            loading.style.display = 'block'
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
                    if (res.code === 0) {
                        resolve(res)
                    } else {
                        Modal.info({
                            title: '提示',
                            content: res.msg
                        })
                    }
                    if (options.params && options.params.showLoading !== false) {
                        loading.style.display = 'none'
                    }
                } else {
                    if (options.params && options.params.showLoading !== false) {
                        loading.style.display = 'none'
                    }
                    reject(res.data)
                }
            }).catch(error => {
                setTimeout(() => {
                    if (options.params && options.params.showLoading !== false) {
                        loading.style.display = 'none'
                    }
                }, 1000)
            })
        })
    }
}



