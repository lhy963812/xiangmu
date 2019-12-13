var scroll = null;
var timer = null;
var interval = 3000;
var duration = 1000;
var id = parseInt(location.search.slice(1).split("=")[1]) || 1;
var count = 1;

// 动态展示banner图
function initBanner(bannerImgs) {
	var length = bannerImgs.length;						//要展示banner图片的数量
	$("span.total-page").text(length);
	$("ul.scroll").css({ width:`${ length + 2 }00%`});	//动态设定滚动区域的宽度
	//动态插入展示banner
	$(`<li><img src="${ bannerImgs[length - 1]}"></li>`).appendTo("ul.scroll");
	bannerImgs.forEach(item => $(`<li><img src="${ item }" /></li>`).appendTo("ul.scroll"));
	$(`<li><img src="${ bannerImgs[0] }" /></li>`).appendTo("ul.scroll");
	//将banner托管给iscroll
	setTimeout(() => {									//保证上面dom已经插入页面中
		imagesLoaded($(".banner")[0],() => {			//保证图片加载完毕
			setTimeout(() => {							//保证图片相关的css样式渲染完毕
				scroll = new IScroll($(".banner")[0],{
					scrollY:false,						//关闭scroll纵向滚动
					scrollX:true,						//开启scroll横向滚动
					snap:true,							//开启scroll轮播图滚动模式
					momentum:false						//关闭scroll惯性滚动
				});
				scroll.on("scrollStart",function() {
					clearTimeout(timer);				//开始滚动前清除所有的现有timer
				})
				scroll.on("scrollEnd",function() {
					scroll.disable();					//调整位置前禁用iscroll
					if(scroll.currentPage.pageX === length + 1) {
						scroll.goToPage(1,0,0);
						$("span.current-page").text(1);
					}
					else if(scroll.currentPage.pageX === 0) {
						scroll.goToPage(length,0,0);
						$("span.current-page").text(length);
					}
					else $("span.current-page").text(scroll.currentPage.pageX);
					scroll.enable();					//调整后重新启用iscroll
					timer = setTimeout(() => scroll.next(duration),interval)
				});
				scroll.goToPage(1,0,0);					//让iscroll初始显示第二张图片
				timer = setTimeout(() => scroll.next(duration),interval)
			},20);
		});
	},20);
}
// 
$("span.increase").on("click",function() {
	if(count === 5) return;
	count++;
	$(".count").text(count);
	$("span.decrease").removeClass("disabled");
	if(count === 5) $(this).addClass("disabled");
});

$("span.decrease").on("click",function() {
	if(count === 1) return;
	count--;
	$(".count").text(count);
	$("span.increase").removeClass("disabled");
	if(count === 1) $(this).addClass("disabled");
})
//显示dialog
$("button.btn-toggle").on("click",function() {
	$(".dialog-wrapper").toggle();
})
// 关闭dialog
$(".dialog-wrapper").on("click",function(e) {
	if(e.target === e.currentTarget) $(this).toggle();
})
// 加入购物车
$("button.btn-add").on("click",function() {
	http({ url:"/cart/add",data:{ jsonStr: JSON.stringify({ pid: id, count}) } })
		.then(() => {
			Notice.message("成功加入购物车..");
			$(".dialog-wrapper").toggle();
			$("span.cart-total").text(parseInt($("span.cart-total").text()) + count).show();
		});
});

if(Cookies.get("token")) {
	http({ url:"/cart/total",method:"get"})
		.then(total => {
			$("span.cart-total").text(total);
			if(total>0) $("span.cart-total").show();
		});
}
// 右上详情提示框点击事件
$(".header a.detail").on("click",function() {
	$(".header .nav-top").toggle("normal");
	$(".header .nav-content").toggle("normal");
})
		
http({ url:`/product/model/${ id }`,method:"get"})
	.then(model => {
		// 动态展示
		$(".price>span").text(`￥${ model.price}`);
		$(".name").text(model.name);
		$(".remark").text(model.remark);
		$(".avatar").attr("src",model.avatar);
		if(model.banner) initBanner(model.banner.split(","));
	});