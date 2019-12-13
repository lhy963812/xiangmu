<template>
	<div class="header">
		<div class="top-nav">
			<a href="">
				<img src="./images/logo.png">
			</a>
			<div class="nav-box">
				<ul>
					<li><a href="./Home">商城<em class="red"></em></a></li>
					<li><a href="">社区<em></em></a></li>
					<li><a href="">服务<em></em></a></li>
					<li><a href="">资讯<em></em></a></li>
					<li><a href="">门店<em></em></a></li>
				</ul>
			</div>
		</div>
		<div class="serch-box">
			<a href="">
				<img src="./images/fenle1.png">
			</a>
			<input type="text" placeholder="请输入搜索内容">
			<a href=""><img src="./images/xiaoxi.png"></a>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
        export default {};
</script>

<style scoped>
	/* 头部 */
	.header {
		width: 100%;
		height: 95px;
		flex-shrink: 0;
		background-color: #FFFFFF;
	}
	.header>.top-nav {
		width: 100%;
		height: 45px;
	}
	.header>.top-nav>a>img {
		width: 45px;
		margin-right: 33px;
		float: left;
	}
	.header>.top-nav>.nav-box {
		float: left;
	}
	.header>.top-nav>.nav-box>ul {
		display: flex;
		text-align: center;
		line-height: 49px;
	}
	.header>.top-nav>.nav-box>ul>li {
		margin: 0 10px;
	}
	.header>.top-nav>.nav-box>ul>li>a {
		font-size: 17px;
		color: #000;
		position: relative;
	}
	.header>.top-nav>.nav-box>ul>li>a>.red {
		position: absolute;
		top: 25px;
		left: 0;
		display: inline-block;
		width: 100%;
		height: 3px;
		background-color: #F4364C;
	}
	.header>.serch-box {
		width: 100%;
		height: 50px;
		position: fixed;
		top: 45px;
	}
	.header>.serch-box>a {
		display: inline-block;
		width: 50px;
		height: 50px;
		text-align: center;
		line-height: 50px;
		vertical-align: middle;
	}
	.header>.serch-box>a>img {
		width: 25px;
		margin-top: 12px;
	}
	.header>.serch-box>input {
		width: 70%;
		height: 30px;
		border: 1px solid #999999;
		border-radius: 15px;
		vertical-align: middle;
		background: #fafafa url(./images/sousu.png) no-repeat left;
		background-size: 29px;
		padding-left: 30px;
		box-sizing: border-box;
		outline: none;
	}
</style>