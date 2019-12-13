import axios from "axios";
import Cookies from "js-cookie";
import router from "../router";
import { Message,Loading } from "element-ui";

let alwayPendingPromise = new Promise(() => {});                // 一个永远是pending的promise对象
let loadingInstance = null;

function http(options){
        let defaultOptions = {
                method: "post",
                // 让请求携带token
                headers: { "Authorization": Cookies.get("token") }
        };
        options = Object.assign({}, defaultOptions, options);
        loadingInstance = Loading.service({
                lock: true,
                text: "玩命加载中...",
                spinner: "el-icon-loading",
                background: "rgba(0,0,0,0.7)"
        });
        return axios(options)
        // 能进入第一个then说明服务器成功的收到了请求，并返回了一个结果
        // 第一个then的任务是判断有没有预期之外的错误情况出现，有就进入catch，没有就进入下一个then
                .then(response => {
                        setTimeout(() => loadingInstance.close(), 1000);        // ajax结束后一秒关闭loading
                        if(response.status === 200) return response.data;
                        else throw new Error(response.statusText);
                })
                // 进入第二个then说明服务器在处理过程中没有报错，返回了200
                // 第二个then的任务是根据服务器的返回判断有没有预期内的错误，有就进入catch，没有就进入下一个then
                .then(result => {
                        switch(result.status) {
                                case 200:
                                        if(result.message !== "")
                                                Message.success({ message: result.message });
                                        return result.data;
                                case 401:
                                        Cookies.remove("token");                        // 清除cookie中残留的过期的token
                                        router.replace("/login");                           // 跳转到登录页
                                        return alwayPendingPromise;                 //
                                case 199:
                                case 500:

                                        throw new Error(result.message);
                        }
                })
                // 任何可能错误都会流到此处进行统一处理
                .catch(error => {
                        Message.error({ message: error.message });
                        return alwayPendingPromise;   // 返回一个永远是pending的promise对象，不让程序在往后流了
                });
}

export default http;