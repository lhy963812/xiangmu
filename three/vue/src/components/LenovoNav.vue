<template>
	<!-- 组件的html模板 -->
	<div class="nav-wrapper">
		<div class="top clearfix">
			<a href="javascript:void(0)" onclick="window.history.back()">&lt;</a>
			<title v-text="$route.meta.title"></title>
			<a href="javascript:void(0)" @click="isShow=!isShow">···</a>
		</div>
		<div class="nav" v-show="isShow">
			<router-link to="./Home">
				<i><img src="./shouye.png" ></i>
				<span>首页</span>
			</router-link>
			<router-link to="">
				<i><img src="./sousuo.png" ></i>
				<span>搜索</span>
			</router-link>
			<router-link to="./Profile">
				<i><img src="./geren.png" ></i>
				<span>个人中心</span>
			</router-link>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import router from "../router";
	// 组件的相关js代码

	export default {
		data() {
		        return {
		                isShow: false,
		        }
		}
	};
</script>

<style scoped>
	.nav-wrapper{
		width: 100%;
	}
	/* 头部 */
	.top {
		height: 45px;
		flex-shrink: 0;
		background-color: #e8e8e8;
		display: flex;
	}
	.top>a:first-child{
		float: left;
		flex-shrink: 0;
		margin-left: 15px;
		font-size: 30px;
		color: #666;
		width: 40px;
		height: 40px;
		line-height: 45px;
	}
	.top>title{
		flex-grow: 1;
		display: inline-block;
		text-align: center;
		line-height: 45px;
		font-size: 16px;
		font-weight: normal;
	}
	.top>a:last-child{
		float: right;
		flex-shrink: 0;
		margin-left: 15px;
		font-size: 35px;
		color: #666;
		width: 40px;
		height: 40px;
		line-height: 40px;
	}
	/* 导航 */
	.nav{
		height: 40px;
		width: 100%;
		text-align: center;
		line-height: 40px;
		font-size: 12px;
		position: absolute;
		top: 45px;
		background-color: rgba(255,255,255,0.8);
	}
	.nav>a{
		color: #333;
		width: 80px;
		display: inline-block;
	}
	.nav>a>i{

	}
	.nav>a>span{
		vertical-align: middle;
	}
	.nav>a>i>img{
		width: 16px;
		height: 16px;
		vertical-align: middle;
		background-size: cover;
	}
</style>