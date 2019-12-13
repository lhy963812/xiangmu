<template>
	<div class="login-pwd">
		<img src="./logo.png" >
		<div class="login-input-warp">
			<input type="text" class="name" placeholder="请输入用户名" v-model="loginInfo.name" />
		</div>
		<div class="login-input-warp">
			<input type="password" class="pwd" placeholder="请输入密码" v-model="loginInfo.pwd" />
		</div>
		<button type="button" class="btn-login-pwd" @click="login">登录</button>
		<button type="button" class="register-btn">还没有账号？立即注册</button>
		<div class="login-mains clearfix">
			<router-link to="" class="login-phone-fast">手机验证码快捷登录></router-link>
			<router-link to="" class="reset-btn">忘记密码？</router-link>
		</div>
		<div class="coopertion">
			<div class="coopertion-title">
				<span></span>
				<em>您还可以用以下方式登录</em>
				<span></span>
			</div>
			<div class="coopertion-item">
				<router-link to=""><img src="./qq.png" ></router-link>
				<router-link to=""><img src="./wb.png" ></router-link>
				<router-link to=""><img src="./zfb.png" ></router-link>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Cookies from "js-cookie";
	import http from "../../util/http";

        export default {
		data() {
		        return {
		                loginInfo: { name: "", pwd: ""}
		        };
		},
	        methods: {
		        login() {
		                http({ url: "/user/login/pwd",data: this.loginInfo })
			                .then(token => {
			                        // 保存token令牌至cookies中
				                Cookies.set("token", token);
				                // 跳转到登录之前的页面
				                this.$router.replace(Cookies.get("target") || "./Home");
				                Cookies.remove("target");
			                });
		        }
	        }
        };
</script>

<style scoped>
	.login-pwd{
		flex-grow: 1;
	}
	.login-pwd>img{
		display: block;
		width: 160px;
		margin: 35px  62px 74px 62px;
	}
	.login-pwd>.login-input-warp{
		width: 286px;
		height: 50px;
		margin-bottom: 3px;
		border-bottom: 1px solid #d6d6d6;
	}
	.login-pwd>.login-input-warp>input.name,
	.login-pwd>.login-input-warp>input.pwd{
		display: block;
		width: 100%;
		height: 100%;
		outline: none;
		border: none;
		font-size: 15px;
		color: #424242;
		padding-left: 5px;
	}
	.login-pwd>button.btn-login-pwd{
		margin: 12px 0;
		display: block;
		width: 100%;
		height: 42px;
		color: #fff;
		font-size: 15px;
		background-color: #e22319;
		border-radius: 5px;
	}
	.login-pwd>button.register-btn{
		display: block;
		width: 100%;
		height: 42px;
		border-radius: 5px;
		font-size: 15px;
		color: #424242;
		border: 1px solid #999;
		background-color: #fff;
	}
	.login-pwd>.login-mains{
		margin-top: 15px;
		width: 100%;
		font-size: 12px;
	}
	.login-pwd>.coopertion{
		margin-top: 60px;
	}
	.login-pwd>.coopertion>.coopertion-title{
		text-align: center;
		font-size: 13px;
		display: flex;
	}
	.login-pwd>.coopertion>.coopertion-title>span{
		height: 1px;
		width: 60px;
		flex-shrink: 0;
		background-color: #D6D6D6;
		margin-top: 7px;
	}
	.login-pwd>.coopertion>.coopertion-title>em{
		flex-grow: 1;
		font-style: normal;
		color: #8c8c8c;
	}
	.login-pwd>.coopertion>.coopertion-item{
		padding: 0 40px;
		margin-top: 10px;
	}
	.login-pwd>.coopertion>.coopertion-item>a{
		display: inline-block;
		margin-left: 23px;
	}
	.login-pwd>.coopertion>.coopertion-item>a>img{
		width: 35px;
	}
</style>