module.exports = {
        devServer: {
                proxy: {        // 配置请求代理
                        "/": {
                                target: "http://localhost:3000"
                        }
                }
        }
};