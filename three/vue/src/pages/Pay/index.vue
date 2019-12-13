<template>
	<div class="page-wrapper">
		<div class="header">
			<a href="">&lt;</a>
			<h1>收银台</h1>
		</div>
		<div class="content">
			<div class="prompt-wrapper">
				<div class="prompt">
					您的订单如果在
					<span class="pay-time">23小时59分后</span>
					未支付将被取消
				</div>
				<div class="pay-money clearfix">
					<span>订单金额</span>
					<span class="money" v-text="price"></span>
				</div>
				<div class="pay-bianhao clearfix">
					<span>订单编号</span>
					<span class="bianhao" v-text="orderNumber"></span>
				</div>
			</div>
			<div class="quick-payment">
				<div class="quick-title">快捷支付</div>
				<div class="zhifubao clearfix">
					<i></i>
					<span>支付宝</span>
					<i class="checkbox"></i>
				</div>
				<div class="weixin clearfix">
					<i></i>
					<span>微信</span>
					<i class="checkbox"></i>
				</div>
				<div class="china-unionpay clearfix">
					<i></i>
					<i class="checkbox"></i>
				</div>
			</div>
			<div class="installment-payment">
				<div class="installment-title">分期支付</div>
				<i class="huabei"></i>
				<i class="zhaoshang"></i>
			</div>
		</div>
		<div class="footer">
			<span @click="paySuccess">支付宝支付<em v-text="price"></em>元</span>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">

        export default {
		name: "Pay",
	        data() {
		        return {
		                price: 0,
				orderNumber: "",
		        }
	        },
	        methods: {
			paySuccess() {
			        alert("支付成功...");
                                this.$router.push("./cart");
			}
	        },
	        created() {
		        this.price = window.location.href.split("?")[1].split("=")[2];
		        this.orderNumber = window.location.href.split("?")[1].split("=")[1].split("&")[0];
	        }
        };
</script>

<style scoped>
	.page-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #f5f2f2;
	}
	/* 头部 */
	.header {
		height: 45px;
		flex-shrink: 0;
		background-color: #fff;
	}
	.header>a{
		float: left;
		margin-left: 15px;
		font-size: 30px;
		color: #666;
		width: 40px;
		height: 45px;
		line-height: 45px;
	}
	.header>h1{
		display: block;
		text-align: center;
		line-height: 45px;
		font-size: 18px;
		margin-right: 55px;
		font-weight: 400;
		color: #333;
	}
	/* 身体 */
	.content {
		flex-grow: 1;
		overflow: auto;
	}
	.prompt-wrapper{
		background-color: #fff;
	}
	.prompt-wrapper>.prompt{
		height: 42px;
		line-height: 42px;
		font-size: 12px;
		padding-left: 15px;
		color: #F4364C;
		background-color: #fdd9d6;
	}
	.prompt-wrapper>.prompt>span.pay-time{

	}
	.prompt-wrapper>.pay-money{
		margin: 20px 0px 10px 0px;
		font-size: 14px;
		padding-left: 15px;
		color: #4A4A4A;
		background-color: #fff;
	}
	.prompt-wrapper>.pay-money>span:first-child,
	.prompt-wrapper>.pay-bianhao>span:first-child{
		float: left;
	}
	.prompt-wrapper>.pay-money>span.money{
		color: #F4364C;
		font-size: 16px;
		float: right;
		padding-right: 15px;
	}
	.prompt-wrapper>.pay-bianhao{
		font-size: 14px;
		padding-left: 15px;
		padding-bottom: 20px;
		color: #4A4A4A;
	}
	.prompt-wrapper>.pay-bianhao>span.bianhao{
		color: #333;
		float: right;
		padding-right: 15px;
	}

	.quick-payment{
		background-color: #fff;
		margin-top: 20px;
	}

	.quick-title,.installment-title{
		font-size: 14px;
		color: #4A4A4A;
		padding-left: 15px;
		height: 60px;
		line-height: 60px;
	}
	.zhifubao,.weixin,.china-unionpay{
		padding-left: 15px;
		height: 60px;
		line-height: 60px;
	}
	.zhifubao>i:first-child{
		background: url(./images/alipay.png) no-repeat;
		background-size: cover;
		width: 32px;
		height: 32px;
		display: inline-block;
		vertical-align: middle;
	}
	.zhifubao>span{

	}
	.zhifubao>i.checkbox{
		background: url(./images/cart_checkbox.png) no-repeat;
	}
	.weixin>i:first-child{
		background: url(./images/weichat.png) no-repeat;
		background-size: cover;
		width: 32px;
		height: 32px;
		display: inline-block;
		vertical-align: middle;
	}
	.weixin>span{

	}
	.weixin>i.checkbox{
		background: url(./images/cart_uncheck.png) no-repeat;
	}
	.china-unionpay>i:first-child{
		background: url(./images/unionpay.png) no-repeat;
		background-size: cover;
		width: 107px;
		height: 33px;
		display: inline-block;
		vertical-align: middle;
	}
	.china-unionpay>i.checkbox{
		background: url(./images/cart_uncheck.png) no-repeat;
	}
	.quick-payment>div>i.checkbox{
		background-size: cover;
		width: 21px;
		height: 21px;
		margin-top: 20px;
		margin-right: 15px;
		display: inline-block;
		float: right;
	}
	.installment-payment{
		margin-top: 20px;
		background-color: #fff;
		padding-bottom: 60px;
	}

	i.huabei{
		background: url(./images/huabei_m0820.png) no-repeat;
		background-size: cover;
		width: 116px;
		height: 33px;
		display: block;
		margin: 15px 0;
		margin-left: 15px;
	}
	i.zhaoshang{
		background: url(./images/cmbfenqi.png) no-repeat;
		background-size: cover;
		width: 182px;
		height: 33px;
		margin: 15px 0;
		display: block;
		margin-left: 15px;
	}
	/* 页脚 */
	.footer {
		flex-shrink: 0;
		position: fixed;
		bottom: 0;
		left: 0;
		height: 50px;
		width: 100%;
		line-height: 50px;
		background-color: #F4364C;
		color: #fff;
		text-align: center;
	}
	.footer>span{

	}
	.footer>span>em{
		font-style: normal;
	}
</style>