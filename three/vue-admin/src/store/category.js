import http from "../util/http.js";
// 这是分类子仓库文件
export  default {
        namespaced: true,
        state: {
                list: [],               // 保存当前所有分类的数据
                isInit: false,       // 表示当前分类数据是否初始化过
        },
        getters: {},
        mutations: {
                init(state, list) {
                        state.list = list;
                        state.isInit = true;
                },
                remove(state, id) {
                        let i = state.list.findIndex(item => item.id === id);
                        state.list.splice(i, 1);
                },
                add(state, model) { state.list.push(model); },
                update(state, model) {
                        let i = state.list.findIndex(item => item.id === model.id);
                        state.list.splice(i, 1, model);
                }
        },
        actions: {
                // 给组件调用的方法我们尽量返回一个promise对象，这样组件那边如果有收尾方便进行
                init({ state, commit }) {
                        if(state.isInit)
                                return Promise.resolve();
                        else
                                return http({ url: "/category/all"})
                                        .then(list => commit("init", list));
                },
                remove({ commit }, data) {
                        return http({ url: "/category/remove", data }).then(() => commit("remove", data.id));
                },
                add({ commit }, model) {
                        return http({ url: "/category/add", data: model })
                                .then(id => {
                                        let { fid, name, newAvatar } = model;
                                        let avatar = newAvatar ? `/images/category/${ newAvatar }` : null ;
                                        commit("add", { id, fid, name, avatar });
                                })
                },
                update(context, model) {
                        return http({ url: "/category/update", data: model });
                }
        }
}