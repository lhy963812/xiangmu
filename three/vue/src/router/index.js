// 创建当前应用程序的路由对象，并导出
import Vue from "vue";
import Router from "vue-router";
import Pages from "../pages";

Vue.use(Router);

let router = new Router({
        routes: [
                {path: "/", redirect: "/home"},
                {path: "/home", component: Pages.Home },
                {path: "/category", component: Pages.Category,meta: {title:"商品分类"} },
                {path: "/profile", component: Pages.Profile },
                {path: "/login", component: Pages.Login, meta: {title:"联想会员登录"} },
                {path: "/cart", component: Pages.Cart, meta: {title:"购物车"} },
                {path: "/list/:cid", component: Pages.List },
                {path: "/detail/:id", component: Pages.Detail },
                {path: "/orderconfirm", component: Pages.OrderConfirm },
                {path: "/address", component: Pages.Address, meta: {title:"地址管理"} },
                {path: "/pay", component: Pages.Pay }
        ]
});
router.beforeEach((to,form,next) =>{
        /*路由变化修改title*/
        if(to.meta.title){
                document.title=to.meta.title
        }
        next();
});

export default router;