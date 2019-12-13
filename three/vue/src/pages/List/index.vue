<template>
	<div class="page-wrapper">
		<div class="header">
			<div class="search-wrapper clearfix">
				<a href="javascript:void(0)" onclick="window.history.back()"><img src="./back.png" ></a>
				<div class="search-wrapper-key clearfix">
					<router-link to=""><img src="./search1.png" ></router-link>
					<input type="text" name="" id="" value="" />
					<router-link to=""><img src="./delete.png" ></router-link>
				</div>
				<span>搜索</span>
			</div>
			<ul class="sort">
				<li class="xinpin" @click="toggleOrder('price')">新品</li>
				<li class="xiaoliang" @click="toggleOrder('sale')">销量</li>
				<li class="jiage" @click="toggleOrder('price')">价格</li>
				<li class="pinglun" @click="toggleOrder('rate')">评论</li>
			</ul>
		</div>
		<div class="content" ref="scroll">
			<div class="scroll">
				<ul class="list clearfix">
					<li class="list-item" v-for="item in list">
						<router-link :to="`/detail/${ item.id }`">
							<img :src="item.avatar" class="avatar" />
							<div class="list-item-detail">
								<div class="list-item-detail-title">
									<h4 class="ellrpsis" v-text="item.name"></h4>
									<p class="ellrpsis" v-text="item.remark"></p>
								</div>
								<div class="list-item-detail-info">
									<span class="price" v-text="`￥${ item.price }`"></span></br>
									<span class="sale" v-text="`已售出${ item.sale }件宝贝`"></span>
									<span class="rate" v-text="`${ item.rate }条评论`"></span>
								</div>
							</div>
						</router-link>
					</li>
				</ul>
				<p class="info" v-text="tipInfo"></p>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import IScroll from "iscroll/build/iscroll-probe";              // 导入可以侦测滚动的iscroll
	import imagesLoaded from "imagesloaded";

        export default {
                name: "list",                                           // 组件名：在调试时会显示，方便调试
                data() {
                        return {
                                search: {
                                        cid: 0,
                                        name: "",
                                        orderCol: "price",
                                        orderDir: true,
                                        begin: 0,
                                        pageSize: 6,
                                },
                                list: [],
                                hasMore: true,
                                isLoading: false,
                                isTriggerLoading: false
                        };
                },
                computed: {
                        tipInfo() {
                                if(this.isLoading) return "正在加载 ...";
                                else if(this.isTriggerLoading) return "放手立即加载";
                                else if(this.hasMore) return "上拉加载更多";
                                else if(this.list.length > 0) return "已到达底部";
                                else return "暂无相关商品，敬请期待...";
                        }
                },
                methods: {
                        // 我只管请求数据，我不负责判断hasMore是否为真，你调我你应该判断好
                        // 当前页面什么时候需要调用这个函数
                        // 1.刚进页面时需要调用
                        // 2.上拉加载更多的时候需要调用
                        // 3.orderCol和orderDir改变的时候调用
                        // 4.
                        getData(loadMore = false) {                     // 获取商品信息
                                this.search.begin = loadMore ? this.list.length : 0;
                                this.isLoading = true;
                                this.$http({ url: "/product/list", data: { jsonStr: JSON.stringify(this.search) } })
                                        .then(data => {
                                                this.isLoading = false;
                                                this.list = this.list.concat(data);
                                                this.hasMore = data.length === this.search.pageSize;
                                        });
                        },
                        toggleOrder(orderCol) {
                                if(this.isLoading) {
                                        alert("你的操作太频繁了 ...");
                                        return;
                                }
                                if(this.search.orderCol === orderCol) this.search.orderDir = !this.search.orderDir;
                                else this.search.orderCol = orderCol;
                                this.list = [];
                                this.hasMore = true;
                                this.getData();
                        },
                        initOrRefreshScroll() {
                                // 将content托管给iscroll
                                imagesLoaded(this.$refs.scroll,() => {
                                        //保证content区域的全部图片加载完毕
                                        this.$nextTick(() => {
                                                if(this.scroll) this.scroll.refresh();			//刷新scroll
                                                else{
                                                        this.scroll = new IScroll(this.$refs.scroll,{
                                                                click: true,					//让iscroll区域可以触发点击事件
                                                                deceleration: 0.003,			//滚动阻尼系数（0.0006-0.01）之间
                                                                bounce: false,					//关闭边界回弹效果
                                                                probeType: 2					//开始滚动监听
                                                        });
                                                        this.scroll.on("scroll",() => {
                                                                if(this.hasMore && !this.isLoading) {
                                                                        if(this.scroll.y === this.scroll.maxScrollY) {
                                                                                this.isTriggerLoading = true;
                                                                        }else{
                                                                                this.isTriggerLoading = false;
                                                                        }
                                                                }
                                                        });
                                                        this.scroll.on("scrollEnd",() => {
                                                                if(this.isTriggerLoading) {
                                                                        this.isTriggerLoading = false;
                                                                        this.getData(true);             // 加载更多
                                                                }
                                                        });
                                                }
                                        });
                                });
                        }
                },
                watch: {
                        list(newValue,oldValue) {
                                this.$nextTick(() =>this.initOrRefreshScroll());
                        },
                        'search.cid'(newValue,oldValue) { this.getData(); }
                },
                created() {
                        // 从路由中拿到cid的值并保存在data中的cid中
                        this.search.cid = parseInt(this.$route.params.cid);
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
	/* 头部 */
	.header{
		height: 90px;
		flex-shrink: 0;
	}
	.search-wrapper{
		height: 45px;
		line-height: 45px;
		background-image: linear-gradient(-134deg, #F4364C 0%, #FF8200 97%);
		display: flex;
		align-items: center;
	}
	.search-wrapper>a{
		display: inline-block;
		float: left;
		margin: 0 15px;
		flex-shrink: 0;
	}
	.search-wrapper>a>img{
		width: 25px;
		height: 25px;
		margin-bottom: 3px;
		vertical-align: middle;
	}
	.search-wrapper>.search-wrapper-key{
		flex-grow: 1;
		padding-left: 0 0 0 30px;
		display: flex;
		height: 30px;
		align-items: center;
		background-color: #fff;
		border-radius: 30px;
	}
	.search-wrapper>.search-wrapper-key>a:first-child{
		display: inline-block;
		float: left;
		flex-shrink: 0;
	}
	.search-wrapper>.search-wrapper-key>a:first-child>img{
		width: 30px;
		height: 30px;
		margin-bottom: 3px;
		vertical-align: middle;
	}
	.search-wrapper>.search-wrapper-key>input{
		border: none;
		flex-grow: 1;
		height: 100%;
		outline: none;
	}
	.search-wrapper>.search-wrapper-key>a:last-child{
		display: inline-block;
		float: right;
		flex-shrink: 0;
		margin-right: 10px;
	}
	.search-wrapper>.search-wrapper-key>a:last-child>img{
		width: 15px;
		height: 15px;
		margin-bottom: 3px;
		vertical-align: middle;
	}
	.search-wrapper>span{
		width: 40px;
		flex-shrink: 0;
		float: right;
		text-align: center;
		font-size: 16px;
		color: #fff;
		margin: 0 10px;
	}
	ul.sort{
		height: 45px;
		display: flex;
		line-height: 45px;
	}
	ul.sort>li{
		width: 25%;
		text-align: center;
		color: #808080;
	}
	/* 内容 */
	.content{
		flex-grow: 1;
		overflow: hidden;  						/*iscroll插件要求*/
		touch-action: pan-y;					/*消除iscroll滚动的警告*/
	}
	ul.list{
		padding: 10px 10px 0 10px;
	}
	ul.list>li.list-item{
		margin: 15px 0;
	}
	ul.list>li.list-item>a{
		display: flex;
	}
	ul.list>li.list-item>a>img.avatar{
		width: 130px;flex-shrink: 0;
	}
	ul.list>li.list-item>a>.list-item-detail{
		flex-grow: 1;margin-left: 10px;display: flex;
		flex-direction: column;justify-content: space-around;
		overflow: hidden;
	}
	ul.list>li.list-item>a>.list-item-detail>.list-item-detail-title{}
	ul.list>li.list-item>a>.list-item-detail>.list-item-detail-title>h4{
		font-size: 15px;color: #333; font-weight: normal;
	}
	ul.list>li.list-item>a>.list-item-detail>.list-item-detail-title>p{
		font-size: 13px; color: #999;
	}
	ul.list>li.list-item>a>.list-item-detail>.list-item-detail-info{

	}
	ul.list>li.list-item>a>.list-item-detail>.list-item-detail-info>span.price{
		color: #f4364c;
	}
	ul.list>li.list-item>a>.list-item-detail>.list-item-detail-info>span.sale,
	ul.list>li.list-item>a>.list-item-detail>.list-item-detail-info>span.rate{
		color: #999;font-size: 12px;
	}
	p.info{
		height: 40px;
		line-height: 40px;
		color: #999;
		text-align: center;
		font-size: 13px;
	}
</style>