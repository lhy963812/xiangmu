var cid = parseInt(location.search.slice(1).split("=")[1]);		//取出传过来的cid转换成整数
var name = "";													//当前用户想看商品的名字
var orderCol = "price";											//price | sale | rate
var orderDir = true;											//true表示升序,false表示降序
var isLoading = false;											//表示是否处于loading状态
var pageSize = 6;												//每次给用户看多少条数据
var hasMore = true;												//表示是否还有更多数据提供用户加载
var isTriggerLoading = false;									//标识是否触发了加载更多
var scroll = null;												//保存滚动对象
if(isNaN(cid)) { window.location.href = "/pages/category/index.html";}
// 获取数据
function getData() {
	isLoading = true; 		//开始加载数据
	$("p.info").text("加载中 ...");
	// ES6对象键值对简写
	var jsonStr = JSON.stringify({ cid, name, orderCol, orderDir, begin: $("ul.list>li").length, pageSize});
	return http({ url:"/product/list",data:{ jsonStr} }).then(data =>{
			hasMore = data.length === pageSize;
			isLoading = false;
			if(hasMore)$("p.info").text("上拉加载更多 ...");
			else if($("ul.list>li").length === 0) $("p.info").text("暂无相关商品数据，敬请期待 ...");
			else $("p.info").text("已到达底部 ...");
			return data;
	});
}
// 展示数据
function showData(data) {
	data.forEach( item => {
		$(`
			<li class="list-item">
				<a href="../detail/index.html?id=${ item.id }">
					<img src="${ item.avatar }" class="avatar" />
					<div class="list-item-detail">
						<div class="list-item-detail-title">
							<h4 class="ellrpsis">${ item.name }</h4>
							<p class="ellrpsis">${ item.remark }</p>
						</div>
						<div class="list-item-detail-info">
							<span class="price">￥${ item.price }</span></br>
							<span class="sale">已售出${ item.sale }件宝贝</span>
							<span class="rate">${ item.rate }条评论</span>
						</div>
					</div>
				</a>
			</li>
		`).appendTo("ul.list");
	});
	initOrRefreshScroll();
}
// 初始化或刷新scroll对象
function initOrRefreshScroll() {
	// 将content托管给iscroll
	imagesLoaded($(".content")[0],function() {
		//保证content区域的全部图片加载完毕
		setTimeout(function() {
			if(scroll) scroll.refresh();			//刷新scroll
			else{
				scroll = new IScroll($(".content")[0],{
					click: true,					//让iscroll区域可以触发点击事件
					deceleration: 0.003,			//滚动阻尼系数（0.0006-0.01）之间
					bounce: false,					//关闭边界回弹效果
					probeType: 2					//开始滚动监听
				});
				scroll.on("scroll",function() {
					if(hasMore && !isLoading) {
						if(this.y === this.maxScrollY) {
							isTriggerLoading = true;
							$("p.info").text("放手立即加载 ...");
						}else{
							isTriggerLoading = false;
							$("p.info").text("上拉加载更多 ...");
						}
					}
				});
				scroll.on("scrollEnd",function() {
					if(isTriggerLoading) {
						isTriggerLoading = false;
						getData().then(showData);
					}
				});
			}
		}, 20);
	});
}
// 对排序进行事件绑定
$("ul.sort>li").click(function() {
	if(isLoading) {
		var $notice = $("<p class='notice'>您的操作太频繁了 ...</p>").appendTo("body");
		setTimeout(() => $notice.remove(),2000);
		return;
	}
	$("ul.list").empty();
	hasMore = true;
	if(this.dataset.col === orderCol) orderDir = !orderDir;
	else orderCol = this.dataset.col;
	getData().then(showData);
});

getData().then(showData);		//导火索