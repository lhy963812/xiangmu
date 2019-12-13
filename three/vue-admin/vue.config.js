// 这个文件用来存放我们自定的开发配置
module.exports = {
        devServer: {
                proxy: {        // 配置请求代理
                        "/": {
                                target: "http://localhost:3000"
                        }
                }
        }
};