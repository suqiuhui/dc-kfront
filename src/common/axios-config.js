import Qs from 'qs'

export default (
    {
        // `url` 是用于请求的服务器 URL
        url: '/',

        // `method` 是创建请求时使用的方法
        method: 'get', // 默认是 get

        // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
        // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
        baseURL: 'http://172.16.232.18:8089/mockjsdata/1',

        // `transformRequest` 允许在向服务器发送前，修改请求数据
        // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
        // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
        transformRequest: [function (data) {
            // 对 data 进行任意转换处理
            return Qs.stringify(data);
        }],

        // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
        transformResponse: [function (data) {
            // 对 data 进行任意转换处理

            return Qs.parse(data);
        }],

        // `headers` 是即将被发送的自定义请求头
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
        },

        // `paramsSerializer` 是一个负责 `params` 序列化的函数
        // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
        paramsSerializer: function(params) {
            return Qs.stringify(params, {arrayFormat: 'brackets'})
        },

        // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
        // 如果请求话费了超过 `timeout` 的时间，请求将被中断
        timeout: 10000,

        // `withCredentials` 表示跨域请求时是否需要使用凭证
        withCredentials: false, // 默认的

        // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
        responseType: 'json', // 默认的

    }
)