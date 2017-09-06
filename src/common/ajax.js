import axios from 'axios'
import Qs from 'qs'
// import cfg from './axios-config'

// axios.defaults = cfg
axios.defaults.baseURL = 'http://172.16.232.18:8089/mockjsdata/1'
axios.defaults.timeout = 10000

// 添加请求拦截器
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    if(config.method  === 'post'){
        config.data = Qs.stringify(config.data);
    }
    return config;
}, error => {
    // 对请求错误做些什么
    alert(error)
    return Promise.reject(error);
});

export default {
    ajaxapi (url, method, params) {
        return new Promise((resolve, reject) => {
            axios({
                url: url,
                method: method,
                data: params
            })
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch(error => {
                reject(error);
            })
        })
    }
}