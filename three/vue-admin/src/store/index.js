// 使用vuex创建数据仓库，并导出
import Vue from "vue";
import Vuex from "vuex";
import category from "./category.js";

Vue.use(Vuex);

let store = new Vuex.Store({
        // 使用modules来配置整合所有子仓库
        modules: { category },
        // state中主要存放要放在vuex仓库中的数据
        state: { },
        // getters就是仓库中数据的计算属性
        getters: { },
        // mutations 中存放很多方法，只有mutations中的方法里面的代码才有资格修改state中的数据
        // mutations只能包含同步代码不能包含任何耗时的异步代码
        mutations: { },
        // actions中也存放很多方法，且actions中的方法无法修改state中的值
        // actions中的方法，可以包含异步的耗时的操作。
        actions: {

        }
});

export default store;