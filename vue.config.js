module.exports = {
    devServer: {
        open: false,
        host: '0.0.0.0', //服务器域名ip ,设置为0.0.0.0则所有的地址均能访问
        port: 8081,
        https: true,
        disableHostCheck: true,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: {//配置跨域
            '/api': {
                target: 'http://localhost:8080',//这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': ''//请求的时候使用这个api就可以
                }
            }

        }
    }
    // /* webpack-dev-server 相关配置 */
    // devServer: {
    //     open: false, //自动打开浏览器
    //     host: '0.0.0.0', //服务器域名ip ,设置为0.0.0.0则所有的地址均能访问
    //     https: false, //是否开启HTTPS服务
    //     hotOnly: false,
    //     disableHostCheck: true,
    //
    //     /* 使用代理解决跨域问题（跨域的常用方式：
    //         1、在前端解决跨域问题
    //         2、后端直接设置访问控制允许源Access-Control-Allow-Origin：* 代表允许全部域名跨域，也可单独设置指定域名跨域
    //         3、后端配置Nginx反向代理）
    //     */
    //     proxy: {
    //         /* /api 开头的api接口全部会代理到 target 接口上 服务器需要把/api 删除*/
    //         '/api': {
    //             target: 'http://localhost:8080', //目标代理服务器地址
    //             changeOrigin: true, // 是否允许跨域
    //             /* 把api接口内的 /api 替换为空 */
    //             pathRewrite: {
    //                 '^/api': ''
    //             }
    //         },
    //     },
    // },
}
