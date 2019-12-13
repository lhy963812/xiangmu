<template>
	<div class="page-wrapper">
		<Header class="header"></Header>
		<div class="content">
			<!-- 轮播图 -->
			<div class="banner-box">
				<div class="banner">
					<swiper :options="swiperOption">
						<swiper-slide class="swiper">
							<img src="./images/home-banner/1.jpg" alt="">
						</swiper-slide>
						<swiper-slide class="swiper">
							<img src="./images/home-banner/2.jpg" alt="">
						</swiper-slide>
						<swiper-slide class="swiper">
							<img src="./images/home-banner/3.jpg" alt="">
						</swiper-slide>
						<swiper-slide class="swiper">
							<img src="./images/home-banner/4.jpg" alt="">
						</swiper-slide>
						<swiper-slide class="swiper">
							<img src="./images/home-banner/5.jpg" alt="">
						</swiper-slide>
						<swiper-slide class="swiper">
							<img src="./images/home-banner/6.jpg" alt="">
						</swiper-slide>
						<swiper-slide class="swiper">
							<img src="./images/home-banner/7.jpg" alt="">
						</swiper-slide>
						<swiper-slide class="swiper">
							<img src="./images/home-banner/8.jpg" alt="">
						</swiper-slide>
						<swiper-slide class="swiper">
							<img src="./images/home-banner/9.jpg" alt="">
						</swiper-slide>
					</swiper>
				</div>
			</div>
			<div class="list-box">
				<ul>
					<li><a href=""><img src="./images/home-title/1.png"><p>新品发布</p></a></li>
					<li><a href=""><img src="./images/home-title/2.png"><p>小新铺子</p></a></li>
					<li><a href=""><img src="./images/home-title/3.png"><p>拯救者联盟</p></a></li>
					<li><a href=""><img src="./images/home-title/4.png"><p>Think家族</p></a></li>
					<li><a href=""><img src="./images/home-title/5.png"><p>台式机</p></a></li>
					<li><a href=""><img src="./images/home-title/6.png"><p>lenovo手机</p></a></li>
					<li><a href=""><img src="./images/home-title/7.png"><p>智能</p></a></li>
					<li><a href=""><img src="./images/home-title/8.png"><p>选件</p></a></li>
					<li><a href=""><img src="./images/home-title/9.png"><p>服务</p></a></li>
					<li><a href=""><img src="./images/home-title/10.png"><p>更多</p></a></li>
				</ul>
			</div>
			<div class="lim-time-box">
				<div class="lim-time">
					<span class="seckill">限时秒杀</span>
					<span class="zero">0点场</span>
					<span id="hour" class="time"></span>
					<span id="minute" class="time"></span>
					<span id="second" class="time"></span>
					<span class="lower">下一场00点</span>
				</div>
				<ul class="item-wrap">
					<li><img src="./images/home/1.jpg" ><span>￥ 14999</span></li>
					<li><img src="./images/home/2.jpg" ><span>￥ 5199</span></li>
					<li><img src="./images/home/3.jpg" ><span>￥ 9999</span></li>
				</ul>
			</div>
			<div class="new-product">
				<div class="np-title">
					<span>新品预约</span>
				</div>
				<ul class="item-wrap">
					<li class="">
						<img src="./images/home/4.jpg" >
						<span class="ellrpsis">拯救者 Y9000X 英特尔酷睿i5 15.6英寸高性能标压轻薄笔记本</span>
						<span>预约价<em>￥6999.00</em></span>
					</li>
					<li>
						<img src="./images/home/4.jpg" >
						<span class="ellrpsis">拯救者 Y9000X 英特尔酷睿i7 15.6英寸高性能标压轻薄笔记本</span>
						<span>预约价<em>￥9699.00</em></span>
					</li>
					<li>
						<img src="./images/home/4.jpg" >
						<span class="ellrpsis">拯救者 Y9000X 英特尔酷睿i7 15.6英寸高性能标压轻薄笔记本</span>
						<span>预约价<em>￥8299.00</em></span>
					</li>
				</ul>
			</div>
			<div class="saoweihuo">
				<div class="swh-title">
					<span>扫尾货</span>
				</div>
				<div class="swh-top">
					<img src="./images/home/5.jpg" alt="">
					<img src="./images/home/6.jpg" alt="">
				</div>
				<ul class="swh-btm">
					<li>
						<img src="./images/home/7.jpg" >
						<span class="ellrpsis">联想Z5 极光蓝 6GB+64GB</span>
						<em>￥ 798</em>
					</li>
					<li>
						<img src="./images/home/8.jpg" >
						<span class="ellrpsis">ThinkPad E480 英特尔酷睿i3 笔记本电脑 20KNA03PCD</span>
						<em>￥ 3399.00</em>
					</li>
					<li>
						<img src="./images/home/9.jpg" >
						<span class="ellrpsis">联想 小新平板 8英寸 8804F WIFI版 香槟金</span>
						<em>￥ 1399</em>
					</li>
				</ul>
			</div>
			<div class="a-layout"></div>
			<div class="smart-suggestion">
				<div class="sug-title">
					<i></i>
					<span>为你推荐</span>
					<i></i>
				</div>
				<ul class="sug-item-wrap">
					<li class="sug-item">
						<img src="./images/home/11.jpg" >
						<span class="ellrpsis">联想Z6 Pro 8GB+128GB 黑色</span>
						<em>￥ 1899.00</em>
					</li>
					<li class="sug-item">
						<img src="./images/home/12.jpg" >
						<span class="ellrpsis">联想Z5 Pro GT 855版 6GB+128GB 碳纤黑</span>
						<em>￥ 1798.00</em>
					</li>
					<li class="sug-item">
						<img src="./images/home/13.jpg" >
						<span class="ellrpsis">联想Z5s 6GB+64GB 星夜灰</span>
						<em>￥ 848.00</em>
					</li>
					<li class="sug-item">
						<img src="./images/home/14.jpg" >
						<span class="ellrpsis">拯救者 Y7000 英特尔酷睿i5 15.6英寸游戏笔记本 黑色</span>
						<em>￥ 5299.00</em>
					</li>
					<li class="sug-item">
						<img src="./images/home/15.jpg" >
						<span class="ellrpsis">拯救者 Y7000P 2019 英特尔酷睿i7 15.6英寸专业电竞本 黑色</span>
						<em>￥ 8999.00</em>
					</li>
					<li class="sug-item">
						<img src="./images/home/16.jpg" >
						<span class="ellrpsis">ThinkPad X390 4G版 英特尔酷睿i5 笔记本电脑 20Q0A00BCD</span>
						<em>￥ 6499.00</em>
					</li>
					<li class="sug-item">
						<img src="./images/home/17.jpg" >
						<span class="ellrpsis">thinkplus自然光谱台灯智雅版</span>
						<em>￥ 1899.00</em>
					</li>
					<li class="sug-item">
						<img src="./images/home/18.jpg" >
						<span class="ellrpsis">ThinkPad X1 Carbon2019 LTE版英特尔酷睿i5笔记本电脑20QDA00PCD</span>
						<em>￥ 9999.00</em>
					</li>
					<li class="sug-item">
						<img src="./images/home/19.jpg" >
						<span class="ellrpsis">2019款 小新 Air 15 英特尔酷睿i7 15.6英寸超轻薄笔记本 轻奢灰</span>
						<em>￥ 6217.00</em>
					</li>
					<li class="sug-item">
						<img src="./images/home/20.jpg" >
						<span class="ellrpsis">ThinkPad E480 英特尔酷睿i5 笔记本电脑 20KNA001CD</span>
						<em>￥ 4999.00</em>
					</li>
				</ul>
			</div>
			<div class="yewei">
				<ul>
					<li>联想创投</li>
					<li>聚享汇</li>
					<li>联想电脑管家</li>
					<li>联想超融合</li>
					<li>联想研究院</li>
					<li>公司简介</li>
				</ul>
			</div>
			<p class="banquan">版权所有：1998-2019 联想集团</p>
		</div>
		<Footer class="footer"></Footer>
	</div>
</template>

<script type="text/ecmascript-6">
	import Header from "./header.vue";
	import Footer from "./footer.vue";
        // 组件的相关js代码

        export default {
                name: "Home",
		components:{ Header, Footer },
	        data() {
                        return {
                                swiperOption:{
                                        slidesPerView: 'auto',
                                        centeredSlides:true,
                                        spaceBetween: 10,
                                        loop:true,
                                        initialSlide: 0,
                                        speed:600, //config参数同swiper4,与官网一致
                                        pagination: {
                                                el: ".swiper-pagination",
                                                clickable: true,
                                                type: "bullets"
                                        },
                                        autoplay: {
                                                delay: 1500,
                                                stopOnLastSlide: false,
                                                disableOnInteraction: false
                                        },
                                }
                        }
	        }
        };
</script>

<style scoped>
	/* 组件相关的html的样式*/
	/* 内容 */
	.content {
		width: 100%;
		flex-grow: 1;
		overflow: auto;
	}
	.banner-box {
		overflow: hidden;
	}
	.content .banner {
		position: relative;
	}
	.content .banner .swiper {
		display: flex;
	}
	.content .banner .swiper img {
		width: 100%;
	}
	ul.indicator {
		position: absolute;
		left: 50%;
		bottom: 20px;
		z-index: 1000;
		transform: translateX(-50%);
	}
	ul.indicator>li{
		width: 6px;
		height: 6px;
		float: left;
		border-radius: 50%	;
		background-color: rgba(0,0,0,0.2);
		margin-left: 10px;
	}
	ul.indicator>li.active>i {
		display: inline-block;
		width: 10px;
		height: 5px;
		border-radius: 2px;
		background-color: #FFFFFF;
		float: left;
	}
	.content>.list-box>ul {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.content>.list-box>ul {

	}
	.content>.list-box>ul>li {
		text-align: center;
		width: 20%;
		padding: 10px 0;
	}
	.content>.list-box>ul>li>a {
		color: #4a4a4a;
		font-size: 12px;
	}
	.content>.list-box>ul>li>a>img {
		width: 43px;
	}

	/* 定时抢购 */
	.content>.lim-time-box {
		margin-top: 10px;
	}
	.content>.lim-time-box>.lim-time {
		height: 50px;
		line-height: 50px;
	}
	.content>.lim-time-box>.lim-time>.seckill {
		font-size: 19px;
		color: #F4364C;
		font-weight: bold;
		padding-left: 17px;
	}
	.content>.lim-time-box>.lim-time>.zero {
		font-size: 12px;
		color: #4a4a4a;
	}
	.content>.lim-time-box>.lim-time>span.time{
		font-size: 13px;
		color: #fff;
		line-height: 50px;
		background-color: rgba(255,0,0,0.8);
		line-height: 50px;
		margin-left: 5px;
		border-radius: 4px;
	}
	.content>.lim-time-box>.lim-time>.lower {
		float: right;
		padding-right: 16px;
		font-size: 12px;
		color: #808080;
	}
	.content>.lim-time-box>ul.item-wrap{
		display: flex;
	}
	.content>.lim-time-box>ul.item-wrap>li{
		width: 33.333333%;
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
	}
	.content>.lim-time-box>ul.item-wrap>li>img{
		width: 88px;
	}
	.content>.lim-time-box>ul.item-wrap>li>span{
		font-size: 15px;
		color: #BF1111;
		margin-top: 5px;
	}

	/* 新品推荐 */
	.content>.new-product{
		margin: 20px 0;
	}
	.content>.new-product>.np-title{
		height: 40px;
		line-height: 40px;
		padding-left: 15px;
		margin: 10px 0;
		box-sizing: border-box;
	}
	.content>.new-product>.np-title>span{
		font-size: 19px;
		color: #333;
		font-weight: bold;
	}
	.content>.new-product>ul.item-wrap{
		padding-left: 10px;
		box-sizing: border-box;
		display: flex;
	}
	.content>.new-product>ul.item-wrap>li{
		margin: 0 5px;
		overflow: hidden;
	}
	.content>.new-product>ul.item-wrap>li>img{
		width: 114px;
	}
	.content>.new-product>ul.item-wrap>li>span{
		font-size: 13px;
		display: block;
	}
	.content>.new-product>ul.item-wrap>li>span>em{
		font-size: 13px;
		color: #BF1111;
		font-style: normal;
	}

	/* 扫尾货 */
	.saoweihuo{
		margin: 20px 0;
	}
	.swh-title{
		height: 40px;
		line-height: 40px;
		padding-left: 15px;
		margin: 10px 0;
		box-sizing: border-box;
	}
	.swh-title>span{
		font-size: 19px;
		color: #333;
		font-weight: bold;
	}
	.saoweihuo>.swh-top{
		display: flex;
	}
	.saoweihuo>.swh-top>img:first-child{
		width: 66%;
	}
	.saoweihuo>.swh-top>img:last-child{
		width: 33%;
		margin-left: 1%;
	}
	.saoweihuo>ul.swh-btm{
		display: flex;
		margin-top: 5px;
	}
	.saoweihuo>ul.swh-btm>li{
		width: 33.333333%;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
	}
	.saoweihuo>ul.swh-btm>li>img{
		width: 105px;
	}
	.saoweihuo>ul.swh-btm>li>span{
		font-size: 14px;
		color: #333333;
		text-align: center;
		display: block;
	}
	.saoweihuo>ul.swh-btm>li>em{
		font-style: normal;
		font-size: 14px;
		color: #BF1111;
	}

	/* a连接跳转布局 */
	.a-layout{
		background-image: url(./images/home/10.jpg);
		background-size: cover;
		background-repeat: no-repeat;
		width: 100%;
		height: 324px;
	}

	/* 为你推荐 */
	.smart-suggestion{

	}
	.sug-title{
		height: 63px;
		line-height: 63px;
		text-align: center;
		background-color: #f7f7f7;
	}
	.sug-title>i{
		width: 50px;
		height: 5px;
		display: inline-block;
		border-top: 1px solid gray;
	}
	.sug-title>span{
		margin: 0 15px;
		font-size: 14px;
	}
	ul.sug-item-wrap{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	ul.sug-item-wrap>li.sug-item{
		width: 48%;
		margin: 5px 1%;
		overflow: hidden;
		text-align: center;
	}
	ul.sug-item-wrap>li.sug-item>img{
		width: 172px;
	}
	ul.sug-item-wrap>li.sug-item>span{
		font-size: 14px;
		display: block;
		text-align: center;
		padding-bottom: 5px;
	}
	ul.sug-item-wrap>li.sug-item>em{
		font-size: 14px;
		font-weight: bold;
		margin-top: 5px;
		color: #f4364c;
		font-style: normal;
	}
	/* 页尾 */
	.yewei{
		background-color: #fff;
	}
	.yewei>ul{
		margin: 20px 10px 0 10px;
		display: flex;
		flex-wrap: wrap;
	}
	.yewei>ul>li{
		width: 27%;
		height: 30px;
		line-height: 30px;
		border-radius: 15px;
		font-size: 14px;
		margin: 10px 10px;
		color: #333333;
		text-align: center;
		background-color: #f1f1f1;
	}

	p.banquan{
		display: block;
		text-align: center;
		padding: 8px 0 60px 0;
		font-size: 12px;
		height: 14px;
		line-height: 14px;
		color: #4A4A4A;
		background-color: #F1F1F1;
	}
</style>