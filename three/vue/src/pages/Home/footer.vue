<template>
	<div class="footer">
		<ul>
			<li class="page">
				<router-link to="./Home">
					<div class="shouye"></div>首页
				</router-link>
			</li>
			<li class="cation">
				<router-link to="./Category">
					<div class="fenlei"></div>分类
				</router-link>
			</li>
			<li class="cart">
				<router-link to="./Cart">
					<div class="shopp"></div>购物车
				</router-link>
			</li>
			<li class="personal">
				<router-link to="./Profile">
					<div class="geren"></div>我的
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script type="text/ecmascript-6">
        export default {};
</script>

<style scoped>
	/* 页脚nav */
	.footer {
		width: 100%;
		height: 50px;
		flex-shrink: 0;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
	}
	.footer>ul {
		height: 100%;
		display: flex;
		align-items: center;
	}
	.footer>ul>li {
		width: 25%;
		text-align: center;
		font-size: 12px;
	}
	.footer>ul>li>a{
		color: #333333;
	}
	.footer>ul>li>a>div{
		width: 22px;
		height: 22px;
		margin: 0 auto;
	}
	.footer>ul>li>a>.shouye {
		background: url(./images/shouye.png) no-repeat bottom;
		background-size: 22px;
	}
	.footer>ul>li>a>.fenlei {
		background: url(./images/fenlei.png) no-repeat;
		background-size: 22px;
	}
	.footer>ul>li>a>.shopp {
		background: url(./images/gouwuche.png) no-repeat;
		background-size: 22px;
	}
	.footer>ul>li>a>.geren {
		background: url(./images/geren.png) no-repeat;
		background-size: 22px;
	}
	.footer>ul>.page>a {
		color: #F4354e;
	}
</style>