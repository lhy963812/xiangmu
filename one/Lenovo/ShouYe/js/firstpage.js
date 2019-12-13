$(function() {

	//引入头部
	$(".head").load("header.html")
	$(".foot").load("footer.html")
	
	// console.log(document.cookie);
	// var cookies=document.cookie.split(";");
	// console.log(cookies);
	// var a=JSON.parse(cookies);
	// console.log(a);
	$(".floor a").hover(function(){
		$(this).css("cursor","pointer")
	});
	$(".floor_one a,.floor_two a,.floor_four a,.floor_five a,.floor_six a,.floor_seven a").click(function(){
		location.href="../XiangQingYe/details.html";
	});
	$(".floor_three a").click(function(){
		location.href="../XiangQingYe/telephone.html";
	});
	/*热线咨询*/
	$(".list_1").hover(function(){
		layer.tips('<span style="color:black;">热线电话:</span><br><span style="color:black;">tel：400-990-8888</span>', '.list_1', {
		tips: [4, '#fff']
		});
	});
	
	//抢购倒计时
	function countTime() {
		var date = new Date();
		var now = date.getTime();
		var endDate = new Date("2019-09-26 00:00:00"); //设置截止时间
		var end = endDate.getTime();
		var leftTime = end - now; //时间差                              
		var h, m, s, ms;
		if (leftTime >= 0) {
			h = Math.floor(leftTime / 1000 / 60 / 60);
			m = Math.floor(leftTime / 1000 / 60 % 60);
			s = Math.floor(leftTime / 1000 % 60);
			if (s < 10) {
				s = "0" + s;
			}
			if (m < 10) {
				m = "0" + m;
			}
			if (h < 10) {
				h = "0" + h;
			}
		} else {
			console.log("请重新设置时间")
		}
		//将倒计时赋值到div中
		document.getElementById("_h").innerHTML = h + "：";
		document.getElementById("_m").innerHTML = m + "：";
		document.getElementById("_s").innerHTML = s;
		//递归每秒调用countTime方法，显示动态时间效果
		setTimeout(countTime, 50);
	}
	countTime();

	//banner图
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: true,
		loop: true, // 循环模式选项
		//分页器
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		//前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	//banner上的菜单
	$(".shop_list .list_nr").hover(function() {
		var biaoji = $(this).hasClass("biaoji");
		if (biaoji) {
			$(this).find(".list_cont").hide();
			$(this).removeClass("biaoji");
		} else {
			$(this).find().removeClass("biaoji");
			$(this).find(".list_cont").show();
			$(this).addClass("biaoji");
		}
	}, function() {
		$(this).removeClass("biaoji");
		$(this).find(".list_cont").hide();
	});

	//banner下的购物栏
	$(".shop_mainhot .mokuai>a").hover(function() {
		var biaoji2 = $(this).hasClass("biaoji2");
		if (biaoji2) {
			$(this).children().first().css("display", "block");
			$(this).children().eq(1).css("display", "none");
			$(this).children().eq(2).css("color", "rgb(156,156,156)");
			$(this).removeClass("biaoji2");
		} else {
			$(this).children().first().css("display", "none");
			$(this).children().eq(1).css("display", "block");
			$(this).children().eq(2).css("color", "rgb(91,91,91)");
			$(this).addClass("biaoji2");
		}
	}, function() {
		$(this).removeClass("biaoji2");
		$(this).children().first().css("display", "block");
		$(this).children().eq(1).css("display", "none");
		$(this).children().eq(2).css("color", "rgb(156,156,156)");
	});

	//右侧定位菜单
	$(window).scroll(function() {
		var a = $(this).scrollTop()
		if (a > 100) {
			$(".sort").show()
		} else {
			$(".sort").hide()
		}
	});

	//左侧定位楼层
	$(window).scroll(function() {
		var a = $(this).scrollTop()
		if (a > 300) {
			$(".floor_nav_box").show()
		} else {
			$(".floor_nav_box").hide()
		}
	});

	//滑过定位楼层指示
	$(".floor_nav_box li").hover(function() {
		$(this).find("span").hide()
		$(this).find("em").show()
	}, function() {
		$(this).find("span").show()
		$(this).find("em").hide()
	});

	/*到达指定楼层显示*/
	$(window).scroll(function() {
		var a = $(this).scrollTop()
		if (a > 0 & a < 900) {
			$(".floor_nav_box").find("em").eq(0).hide()
			$(".floor_nav_box").find("span").eq(0).show()
		} else if (a > 900 & a < 1500) {
			$(".floor_nav_box").find("em").eq(0).show()
			$(".floor_nav_box").find("span").eq(0).hide()
			$(".floor_nav_box").find("em").eq(1).hide()
			$(".floor_nav_box").find("span").eq(1).show()
		} else if (a > 1500 & a < 2100) {
			$(".floor_nav_box").find("em").eq(0).hide()
			$(".floor_nav_box").find("span").eq(0).show()
			$(".floor_nav_box").find("em").eq(1).show()
			$(".floor_nav_box").find("span").eq(1).hide()
			$(".floor_nav_box").find("em").eq(2).hide()
			$(".floor_nav_box").find("span").eq(2).show()
		} else if (a > 2100 & a < 2700) {
			$(".floor_nav_box").find("em").eq(1).hide()
			$(".floor_nav_box").find("span").eq(1).show()
			$(".floor_nav_box").find("em").eq(2).show()
			$(".floor_nav_box").find("span").eq(2).hide()
			$(".floor_nav_box").find("em").eq(3).hide()
			$(".floor_nav_box").find("span").eq(3).show()
		} else if (a > 2700 & a < 3300) {
			$(".floor_nav_box").find("em").eq(2).hide()
			$(".floor_nav_box").find("span").eq(2).show()
			$(".floor_nav_box").find("em").eq(3).show()
			$(".floor_nav_box").find("span").eq(3).hide()
			$(".floor_nav_box").find("em").eq(4).hide()
			$(".floor_nav_box").find("span").eq(4).show()
		} else if (a > 3300 & a < 3900) {
			$(".floor_nav_box").find("em").eq(3).hide()
			$(".floor_nav_box").find("span").eq(3).show()
			$(".floor_nav_box").find("em").eq(4).show()
			$(".floor_nav_box").find("span").eq(4).hide()
			$(".floor_nav_box").find("em").eq(5).hide()
			$(".floor_nav_box").find("span").eq(5).show()
		} else if (a > 3900 & a < 4500) {
			$(".floor_nav_box").find("em").eq(4).hide()
			$(".floor_nav_box").find("span").eq(4).show()
			$(".floor_nav_box").find("em").eq(5).show()
			$(".floor_nav_box").find("span").eq(5).hide()
			$(".floor_nav_box").find("em").eq(6).hide()
			$(".floor_nav_box").find("span").eq(6).show()
		} else if (a > 4500 & a < 5100) {
			$(".floor_nav_box").find("em").eq(5).hide()
			$(".floor_nav_box").find("span").eq(5).show()
			$(".floor_nav_box").find("em").eq(6).show()
			$(".floor_nav_box").find("span").eq(6).hide()
			$(".floor_nav_box").find("em").eq(7).hide()
			$(".floor_nav_box").find("span").eq(7).show()
		} else if (a > 5100 & a < 5700) {
			$(".floor_nav_box").find("em").eq(6).hide()
			$(".floor_nav_box").find("span").eq(6).show()
			$(".floor_nav_box").find("em").eq(7).show()
			$(".floor_nav_box").find("span").eq(7).hide()
			$(".floor_nav_box").find("em").eq(8).hide()
			$(".floor_nav_box").find("span").eq(8).show()
		} else if (a > 5700 & a < 6300) {
			$(".floor_nav_box").find("em").eq(7).hide()
			$(".floor_nav_box").find("span").eq(7).show()
			$(".floor_nav_box").find("em").eq(8).show()
			$(".floor_nav_box").find("span").eq(8).hide()
			$(".floor_nav_box").find("em").eq(9).hide()
			$(".floor_nav_box").find("span").eq(9).show()
		} else if (a > 6300 & a < 6900) {
			$(".floor_nav_box").find("em").eq(8).hide()
			$(".floor_nav_box").find("span").eq(8).show()
			$(".floor_nav_box").find("em").eq(9).show()
			$(".floor_nav_box").find("span").eq(9).hide()
		}
	});
});
