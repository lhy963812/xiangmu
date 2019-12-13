<template>
	<div class="page-wrapper">
		<div v-if="!isLoading" class="unlogin">
			<router-link to="/login">去登录</router-link>
			<img src="./img/logo.png" alt="" class="logo">
			<img src="./img/mobile-bg.png" alt="" class="bg">
		</div>
		<div v-else>
			<div class="header">
			<img class="touxiang" src="./img/3.png">
			<span class="name" v-text="list.name"></span>
			<img src="./img/1.png" class="shezhi">
			<img src="./img/2.png" class="xiaoxi">
		</div>
			<div class="membership clearfix">
				<span class="my-membership">我的会员卡</span>
				<span class="qiandao">签到</span>
				<p>普卡会员</p>
				<div class="clearfix">
					<span class="bianhao">No.10159592888</span>
					<span class="go-membership">进入会员中心 &gt;</span>
				</div>
			</div>
			<div class="my-order">
				<div class="order-title">
					<img src="./img/5.png">
					<h3>所有订单</h3>
					<span>查看全部订单&gt;</span>
				</div>
				<ul class="order-item">
					<li>
						<img src="./img/6.png">
						<span>待付款</span>
						<span class="count">0</span>
					</li>
					<li>
						<img src="./img/7.png">
						<span>待发货</span>
						<span class="count">0</span>
					</li>
					<li>
						<img src="./img/8.png">
						<span>待收货</span>
						<span class="count">0</span>
					</li>
					<li>
						<img src="./img/9.png">
						<span>待评价</span>
						<span class="count">0</span>
					</li>
					<li>
						<img src="./img/10.png">
						<span>退货/换货</span>
					</li>
				</ul>
			</div>
			<div class="my-assets">
				<div class="assets-title">
					<img src="./img/11.png" alt="">
					<h3>我的资产</h3>
					<span>查看全部资产&gt;</span>
				</div>
				<ul class="assets-item">
					<li>
						<img src="./img/12.png">
						<span>乐豆 888</span>
					</li>
					<li>
						<img src="./img/13.png">
						<span>消费积分300</span>
					</li>
					<li>
						<img src="./img/14.png">
						<span>可用优惠劵0</span>
					</li>
					<li>
						<img src="./img/15.png">
						<span>我的奖品</span>
					</li>
				</ul>
			</div>
			<div class="my-helper">
				<div class="helper-title">
					<img src="./img/16.png" alt="">
					<h3>我的助手</h3>
					<span>一键查看更多</span>
				</div>
				<ul class="helper-item">
					<li>
						<img src="./img/17.png">
						<span>我的预约</span>
					</li>
					<li>
						<img src="./img/18.png">
						<span>我的收藏</span>
					</li>
					<li>
						<img src="./img/19.png">
						<span>修改密码</span>
					</li>
					<li>
						<img src="./img/20.png">
						<span>我要吐槽</span>
					</li>
					<li class="shouhuo">
						<img src="./img/21.png">
						<span>收货地址</span>
					</li>
					<li>
						<img src="./img/22.png">
						<span>我的众筹</span>
					</li>
					<li>
						<img src="./img/23.png">
						<span>客服电话</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
        // 组件的相关js代码

        export default {
		name: "Profile",
	        data() {
		        return {
		                list: [],
			        isLoading: this.$cookies.get("token") ? true : false,
		        }
	        },
	        methods: {
		        getData() {
		                return this.$http({ url: "/user/name"})
		        }
	        },
	        created() {
		        if(this.isLoading) {
		                this.getData().then(data => {
		                        this.list = data;
		                })
		        }
	        }
        };
</script>

<style scoped>
	/* 组件相关的html的样式*/
	body{
		background-color: #E8E8E8;
	}
	.page-wrapper{
		width: 100%;
		height: 100%;
		position: relative;
	}
	/* 头部 */
	.header{
		height: 160px;
		background: url(./img/24.png) no-repeat;
		background-size: cover;
		text-align: center;
		position: relative;
		margin-bottom: 180px;
	}
	.header>img.touxiang{
		width: 50px;
		border-radius: 50%;
		margin-top: 40px;
	}
	.header>span{
		height: 30px;
		line-height: 30px;
		font-size: 16px;
		color: #fff;
		display: block;
	}
	.header>img.shezhi{
		position: absolute;
		top: 15px;
		left: 20px;
		width: 24px;
	}
	.header>img.xiaoxi{
		position: absolute;
		top: 15px;
		right: 20px;
		width: 20px;
	}
	/* 会员卡 */
	.membership{
		position: absolute;
		top: 140px;
		left: 8px;
		right: 8px;
		height: 184px;
		color: #fff;
		padding: 20px 8px 20px 16px;
		box-sizing: border-box;
		background: url(./img/4.png) no-repeat;
		background-size: cover;
	}
	.membership>span.my-membership{
		font-size: 16px;
	}
	.membership>span.qiandao{
		float: right;
		width: 40px;
		padding: 2px 0;
		text-align: center;
		margin-right: 5px;
		font-size: 12px;
		border-radius: 10px;
		border: 1px solid #fff;
	}
	.membership>p{
		margin-top: 12px;
		padding: 0px 10px;
		width: 80px;
		font-size: 14px;
		text-align: center;
		box-sizing: border-box;
		border: 1px solid #E6DBC0;
		border-radius: 25px;
	}
	.membership>div{
		margin-top: 65px;
	}
	.membership>div>span.bianhao{

	}
	.membership>div>span.go-membership{
		float: right;
		font-size: 14px;
		margin-right: 5px;
	}
	/* 我的订单 */
	.my-order,.my-assets,.my-helper{
		background-color: #fff;
		margin-top: 12px;
	}
	.my-order>.order-title,.my-assets>.assets-title,.my-helper>.helper-title{
		padding: 12px 0;
		margin: 0px 12px;
		border-bottom: 1px solid #ebebeb;
	}
	.order-title>*,.assets-title>*,.helper-title>*{
		vertical-align: middle;
	}
	.order-title>img,.assets-title>img,.helper-title>img{
		width: 23px;
	}
	.order-title>h3,.assets-title>h3,.helper-title>h3{
		display: inline-block;
		font-size: 16px;
		font-weight: normal;
		margin-left: 10px;
	}
	.order-title>span,.assets-title>span,.helper-title>span{
		float: right;
		font-size: 13px;
		line-height: 25px;
		color: #6d6d6d;
	}
	.my-order>ul.order-item,.my-assets>ul.assets-item,.my-helper>ul.helper-item{
		display: flex;
		padding: 15px 0;
	}
	ul.order-item>li,ul.assets-item>li,ul.helper-item>li{
		width: 25%;
		padding: 12px 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	ul.order-item>li>img,ul.assets-item>li>img,ul.helper-item>li>img{
		width: 32px;
	}
	ul.order-item>li>span,ul.assets-item>li>span,ul.helper-item>li>span{
		font-size: 12px;
	}
	ul.order-item>li>span.count{
		position: absolute;
		top: 10px;
		right: 15px;
		width: 14px;
		height: 14px;
		line-height: 14px;
		text-align: center;
		color: #fff;
		background-color: #E2231A;
		border-radius: 50%;
	}
	.my-helper>ul.helper-item{
		flex-wrap: wrap;
	}
	.unlogin{
		height: 100%;
		text-align: center;
		background-color: #b0b0b0;
	}
	.unlogin>a{
		display: block;
		position: fixed;
		top: 25%;
		left: 50%;
		transform: translate(-50%);
		font-size: 20px;
		color: #f21c31;
		width: 30%;
		height: 8%;
		border-radius: 15px;
		line-height: 50px;
		background-color: #fff;
	}
	.unlogin>img.logo{
		margin-top: 10%;
		width: 50%;
	}
	.unlogin>img.bg{
		position: fixed;
		top: 40%;
		left: 50%;
		width: 100%;
		transform: translate(-50%);
	}
</style>