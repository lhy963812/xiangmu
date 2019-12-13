<template>
	<div class="page-wrapper">
		<div class="header">
			<a href="javascript:void(0)" onclick="window.history.back()" class="houtui"><img src="./images/houtui.png" ></a>
			<a href="javascript:void(0)" class="detail"><img src="./images/detail.png" ></a>
			<div class="nav-top"></div>
			<ul class="nav-content" v-show="false">
				<li><a href="../Home">首页</a></li>
				<li><a href="">搜索</a></li>
				<li><a href="">我的收藏</a></li>
			</ul>
		</div>
		<div class="content">
			<div class="banner" ref="banner">
				<ul class="scroll" :style="'width: ' + (banner.length +2) * 100 + '%' ">
					<li><img :src="banner[banner.length - 1]" alt=""></li>
					<li v-for="item in banner" :key="item.id"><img :src="item" alt=""></li>
					<li><img :src="banner[0]" alt=""></li>
				</ul>
				<div class="indicator">
					<span class="current-page" v-text="lengthOne"></span>/<span class="total-page" v-text="banner.length"></span>
				</div>
			</div>
			<div class="price">
				商城价:
				<span v-text="`￥ ${list.price}`"></span>
			</div>
			<h3 class="name" v-text="list.name"></h3>
			<p class="remark" v-text="list.remark"></p>
			<img src="./images/yangban.png" >
			<img src="./images/1.jpg" >
			<img src="./images/2.jpg" >
			<img src="./images/3.jpg" >
			<img src="./images/4.jpg" >
			<img src="./images/5.jpg" >
			<img src="./images/6.jpg" >
		</div>
		<div class="footer clearfix">
			<router-link to="" class="kefu">
				<img src="./images/kefu.png" >
				<span>客服</span>
			</router-link>
			<router-link to="" class="shoucang">
				<img src="./images/shoucang.png" >
				<span>收藏</span>
			</router-link>
			<router-link to="../Cart" class="cart">
				<img src="./images/cart.png" >
				<span>购物车</span>
				<span class="cart-total" v-text="total" v-if="total > 0"></span>
			</router-link>
			<button type="button" class="btn-toggle" @click="isShow = true">加入购物车</button>
			<button type="button" class="btn-ljgm">立即购买</button>
		</div>
		<div class="dialog-wrapper" v-show="isShow" @click="dialogEdit($event)">
			<div class="dialog" ref="dialog">
				<div class="dialog-title">
					<img :src="this.list.avatar" class="avatar" >
					<div class="dialog-title-right">
						<span class="price"><span></span></span>
						<span>已选：<em class="count">1</em>件</span>
					</div>
				</div>
				<div class="content-wrapper">
					<span>数量</span>
					<span class="increase" @click="increase">+</span>
					<span class="count"  v-text="count"></span>
					<span class="decrease" @click="decrease">-</span>
				</div>
				<button class="btn-add" @click="addCart">确定</button>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import IScroll from "iscroll/build/iscroll-probe";
	import imagesLoaded from "imagesloaded";

	export default {
                name: "Detail",
	        data() {
                        return {
	                        id: 0,
                                list: [],
	                        banner:[],
	                        count: 1,
	                        total: 0,
	                        interval: 3000,
	                        duration: 1000,
	                        timer: null,
	                        lengthOne: 1,
	                        isShow: false,
	                        isLoading: this.$cookies.get("token") ? true : false,
                        }
	        },
		computed: {

		},
	        methods: {
			getData(id) {
			        return this.$http({ url: `/product/model/${ id }`, method: "get" })
			},
                        initBanner() {
                                //将banner托管给iscroll
                                this.$nextTick(() => {									//保证上面dom已经插入页面中
                                        imagesLoaded(this.$refs.banner, () => {			//保证图片加载完毕
                                                this.$nextTick(() => {							//保证图片相关的css样式渲染完毕
                                                        this.scroll = new IScroll(this.$refs.banner, {
                                                                scrollY:false,						//关闭scroll纵向滚动
                                                                scrollX:true,						//开启scroll横向滚动
                                                                snap:true,							//开启scroll轮播图滚动模式
                                                                momentum:false						//关闭scroll惯性滚动
                                                        });
                                                        this.scroll.on("scrollStart",() => {
                                                                clearTimeout(this.timer);				//开始滚动前清除所有的现有timer
                                                        });
                                                        this.scroll.on("scrollEnd",() => {
                                                                this.scroll.disable();					//调整位置前禁用iscroll
                                                                if(this.scroll.currentPage.pageX === this.banner.length + 1) {
                                                                        this.lengthOne = 1;
                                                                        this.scroll.goToPage(1, 0, 0);
                                                                }
                                                                else if(this.scroll.currentPage.pageX === 0) {
                                                                        this.lengthOne = this.scroll.currentPage.pageX;
                                                                        this.scroll.goToPage(this.banner.length, 0, 0);
                                                                }
                                                                else {
	                                                                this.lengthOne = this.scroll.currentPage.pageX;
                                                                }
                                                                this.scroll.enable();					//调整后重新启用iscroll
                                                                this.timer = setTimeout(() => this.scroll.next(this.duration),this.interval)
                                                        });
                                                        this.scroll.goToPage(1,0,0);					//让iscroll初始显示第二张图片
                                                        this.timer = setTimeout(() => this.scroll.next(this.duration),this.interval)
                                                });
                                        });
                                });
                        },
                        increase() {
			        if(this.count < 5) {
			                this.count++;
			        } else {
			                alert("不行喽，宝贝每人最多买五件哦");
			        }
			},
                        decrease() {
			        if(this.count <= 1) {
			                alert("不行哦，宝贝不能再少了");
			                this.count = 1;
			        } else {
			                this.count -= 1;
			        }
                        },
                        dialogEdit(event) {
			        if(!this.$refs.dialog.contains(event.target)) {
			                this.isShow = false;
			        }
                        },
                        addCart() {
			        return this.$http({ url:"/cart/add",data:{ jsonStr: JSON.stringify({ pid: this.id, count:this.count }) } })
				        .then(() => {
			                        alert("加入购物车成功");
			                        this.isShow = false;
			                        this.totalShow();
				        })
                        },
		        totalShow() {
                                if(this.isLoading){
                                        return this.$http({url: "/cart/total", method: "get"})
                                                .then(total => this.total = total);
                                }
		        }

                },
                created() {
                        this.id = parseInt(this.$route.params.id);
                        this.getData(this.id).then(data => {
                                this.list = data;
                                this.banner = data.banner.split(",");
                        });
                },
                watch: {
                        list(newValue, oldValue){
                                this.$nextTick(() => this.initBanner());
				this.totalShow();
                        },
                }
        };
</script>

<style scoped>
	.page-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	/*  */
	.header{
		position: fixed;
		top: 0;
		height: 40px;
		width: 100%;
		z-index: 999;
	}
	.header>a.houtui{
		position: absolute;
		top: 7px;
		left: 5px;
	}
	.header>a.houtui>img{
		width: 40px;
	}
	.header>a.detail{
		position: absolute;
		top: 15px;
		right: 15px;
	}
	.header>a.detail>img{
		width: 24px;
	}
	.nav-top{
		position: absolute;
		top: 35px;
		right: 22px;
		border: 6px;
		border-color: transparent transparent #efefef transparent;
		border-style: solid;
		display: none;
	}
	ul.nav-content{
		position: absolute;
		top: 47px;
		right: 15px;
		width: 100px;
		border-radius: 4px;
		background-color: #EFEFEF;
	}
	ul.nav-content>li{
		height: 32px;
		line-height: 32px;
		font-size: 14px;
		padding-left: 14px;
		border-bottom: 1px solid #ccc;
	}
	ul.nav-content>li>a{
		color: #343434;
	}
	/* 内容 */
	.content{
		flex-grow: 1;
	}
	.banner{
		overflow: hidden;
		width: 100%;
		touch-action: pan-x;
		position: relative;
	}
	.banner>ul.scroll{
		display: flex;
	}
	.banner>ul.scroll>li{
		flex-grow: 1;
		font-size: 0;
	}
	.banner>ul.scroll>li>img{
		width: 100%;
	}
	.banner>.indicator{
		position: absolute;
		bottom: 5px;
		right: 10px;
		color: #4A4A4A;
	}

	/* 价格 */
	.price{
		font-size: 14px;
		color: #F4364C;
		padding: 0 15px;
		margin-top: 10px;
	}
	.price>span{
		font-weight: bold;
		font-size: 24px;
		color: #f4364c;
	}
	.name{
		font-size: 16px;
		font-weight: bold;
		padding: 0 15px;
		margin-top: 5px;
	}
	.remark{
		font-size: 12px;
		line-height: 18px;
		padding: 0 15px;
		margin-top: 5px;
	}
	.content>img{
		width: 100%;
	}
	/* 页脚 */
	.footer{
		position: fixed;
		height: 48px;
		width: 100%;
		bottom: 0;
		border-top: 1px solid #808080;
		background-color: #fff;
	}
	.footer>a{
		float: left;
		width: 15%;
		height: 100%;
		text-align: center;
		padding-top: 5px;
		box-sizing: border-box;
	}
	.footer>a>img{
		width: 24px;
		display: block;
		margin: 0 auto;
		line-height: 24px;
	}
	.footer>a>span{
		color: #808080;
		font-size: 10px;
		display: block;
		margin-top: 2px;
	}
	a.cart{
		position: relative;
	}
	a.cart>span.cart-total{
		position: absolute;
		left: 60%;top: 0;
		background-color: rgba(240,78,46);
		color: #fff;
		width: 18px;height: 18px;line-height: 18px;
		border-radius: 50%;text-align: center;
	}
	button.btn-toggle{
		float: left;
		height: 100%;
		width: 30%;
		background-color: #2a2a2a;
		font-size: 14px;
		color: #fff;
	}
	button.btn-ljgm{
		float: left;
		height: 100%;
		width: 25%;
		background-color: #F4364C;
		font-size: 14px;
		color: #fff;
	}

	/* 加入购物车弹出层 */
	.dialog-wrapper{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		background-color: rgba(0,0,0,0.5);
	}
	.dialog{
		height: 75%;
		width: 100%;
		display: flex;
		flex-direction: column;
		position: fixed;
		bottom: 0;
		padding: 10px 15px;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 10px 10px 0 0;
	}
	.dialog>.dialog-title{
		height: 100px;
		display: flex;
		flex-shrink: 0;
	}
	.dialog>.dialog-title>img{
		flex-shrink: 0;
		width: 90px;
	}
	.dialog>.dialog-title>.dialog-title-right{
		flex-grow: 1;
		padding: 20px 5px;
	}
	.dialog>.dialog-title>.dialog-title-right>span.price{
		font-size: 16px;
		display: block;
		color: #BF1111;
		margin-bottom: 10px;
	}
	.dialog>.dialog-title>.dialog-title-right>span:last-child{
		font-size: 12px;
		color: rgb(102,102,102);
	}
	.dialog>.dialog-title>.dialog-title-right>span:last-child>em.count{
		font-style: normal;
	}
	.dialog>.content-wrapper{
		flex-grow: 1;
		padding: 0 15px;
	}
	.dialog>.content-wrapper>span{
		margin: 0 5px;
	}
	.dialog>.content-wrapper>span:first-child{
		color: #B0B0B0;
		font-size: 13px;
	}
	.dialog>.content-wrapper>span.decrease,
	.dialog>.content-wrapper>span.count,
	.dialog>.content-wrapper>span.increase{
		float: right;
	}
	.dialog>button.btn-add{
		flex-shrink: 0;
		height: 40px;
		margin: 0 20px;
		border-radius: 15px;
		background: linear-gradient(to right, rgb(240, 78, 46), rgb(213, 16, 16));
		color: #fff;
		text-align: center;
	}
</style>