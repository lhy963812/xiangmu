<template>
	<div class="page-wrapper">
		<LenovoNav></LenovoNav>
		<LoginPwd></LoginPwd>
	</div>

</template>

<script type="text/ecmascript-6">
        import LenovoNav from "../../components/LenovoNav.vue";
        import LoginPwd from "./LoginPwd.vue";
        import Cookies from "js-cookie";

        export default {
                name: "Login",
                components: {LenovoNav, LoginPwd},         // 当前组件使用了哪些其他组件

	        // 组件路由守卫（进入之前）
	        beforeRouteEnter(to,from,next) {
                        Cookies.set("target", from.path);
                        next();         // 放行
	        }
        }
</script>

<style scoped>
	.page-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>