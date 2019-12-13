$(function() {
	// 右边固定菜单
	$(".xbt1").hover(function() {
		$(this).css("background-position", "-67px -14px");
		$(this).css("background-color", "#D02F28");
		$(this).find("a").css("color", "#fff");
	}, function() {
		$(this).css("background-position", "-113px -14px");
		$(this).css("background-color", "#37383B");
		$(this).find("a").css("color", "#D02F28");
	});
	$(".xbt1").click(function(){
		location.href="../zhangshun/shopp.html";
	});

	$(".xbt2").hover(function() {
		$(this).css("background-position", "-66px -70px");
		$(this).css("background-color", "#D02F28");
	}, function() {
		$(this).css("background-position", "-113px -70px");
		$(this).css("background-color", "#37383B");
	});

	$(".xbt2").click(function() {
		layer.msg('您已添加到收藏');
	});

	$(".xbt3").hover(function() {
		$(this).css("background-position", "-158px -9px");
		$(this).css("background-color", "#D02F28");
	}, function() {
		$(this).css("background-position", "-204px -10px");
		$(this).css("background-color", "#37383B");
	});

	$(".talk").click(function() {
		layer.msg('客服暂时不在线哦');
	});

	$(".xbt4").hover(function() {
		$(this).css("background-position", "-157px -69px");
		$(this).css("background-color", "#D02F28");
	}, function() {
		$(this).css("background-position", "-204px -70px");
		$(this).css("background-color", "#37383B");
	});


	// 顶部菜单
	$(".header ul li").click(function() {
		location.href = "../ShouYe/firstpage.html";
	});

	// 滚动事件
	$(window).scroll(function() {
		var st = $(window).scrollTop();
		var f = false;
		if (st >= 70) {
			if (f == false) {
				$(".userfix").stop().animate({
					// height: "632px",
					top: 0
				});
			}
			f = true;
		} else {
			$(".userfix").stop().animate({
				// height: "560px",
				top: "72px"
			});
		}
	});

	// 回到顶部
	$(".xbt4").click(function() {
		$("html,body").stop().animate({
			scrollTop: 0
		});
	});

	// 登录注册滑过
	$(".login a").hover(function() {
		$(this).css("color", "#DD0600");
	}, function() {
		$(this).css("color", "#fff");
	});


	// 轮播图
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 6,
		slidesPerView: 5,
		// loop: true,
		freeMode: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});
	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 6,
		// loop: true,
		loopedSlides: 5, //looped slides should be the same

		thumbs: {
			swiper: galleryThumbs,
		},
	});

	// 商品编号
	$(".pro-sp2").click(function() {
		var pro = $(this).hasClass("pro");
		if (pro) {
			$(this).find("span:first-child").css("background-position", "-34px -43px");
			$(this).removeClass("pro");
		} else {
			$(this).find("span:first-child").css("background-position", "-17px -43px");
			$(this).addClass("pro");
		}
	});



	// 活动滑过下滑
	$(".ac-hov").hover(function() {
		$(this).find(".zp2").stop().hide();
		$(this).find(".zp3").stop().show();
		$(this).find(".zank").css("bottom", "0");
	}, function() {
		$(this).find(".zp2").stop().show();
		$(this).find(".zp3").stop().hide();
	});


	// 选中的规格添加到数组
	var ck = [];
	var ck0 = $(".price").text();
	ck.push(ck0);

	// 选择配置点击
	$(".cfl4>div p").click(function() {
		var ck1 = $(this).text()
		ck.push(ck1);

		var cs = $(this).hasClass("cs");
		if (cs) {
			$(this).css("border-color", "#ccc");
			$(this).removeClass("cs");
		} else {
			var $a = $(this);
			$a.siblings().css("border-color", "#ccc");
			$(this).css("border-color", "#DD0600");
			$(this).addClass("cs");
		}
	});

	// 私人定制
	$(".cfl5 p").click(function() {
		var ck2 = $(this).text()
		ck.push(ck2);

		var cs = $(this).hasClass("cs");
		if (cs) {
			$(this).css("border-color", "#ccc");
			$(this).removeClass("cs");
		} else {
			var $a = $(this);
			$a.siblings().css("border-color", "#ccc");
			$(this).css("border-color", "#DD0600");
			$(this).addClass("cs");
		}
	});

	// 推荐服务
	$(".cfl6>div p").click(function() {
		var ck3 = $(this).text()
		ck.push(ck3);

		var cs = $(this).hasClass("cs");
		if (cs) {
			$(this).css("border-color", "#ccc");
			$(this).removeClass("cs");
		} else {
			var $a = $(this);
			$a.siblings().css("border-color", "#ccc");
			$(this).css("border-color", "#DD0600");
			$(this).addClass("cs");
		}
	});

	// 分期付款
	$(".cfl7>div p").click(function() {
		var ck4 = $(this).text()
		ck.push(ck4);

		var cs = $(this).hasClass("cs");
		if (cs) {
			$(this).css("border-color", "#ccc");
			$(this).removeClass("cs");
		} else {
			var $a = $(this);
			$a.siblings().css("border-color", "#ccc");
			$(this).css("border-color", "#DD0600");
			$(this).addClass("cs");
		}
	});




	// 添加至购物车
	$(".cfl9 span:last-child").click(function() {
		location.href = "../GouWuChe/shopp.html";
		// 将数组中的json对象变成字符串
		// console.log(ck);
		var c = JSON.stringify(ck) + ";path=/Lenovo/;";
		document.cookie = "ck=" + c;
		console.log(document.cookie);
	});
	// 购买数量
	$(document).ready(function() {
		var num = 1;
		$(".jia").click(function() {
			num++;
			var numdom = $(".number")[0];
			numdom.value = num;
		});
		$(".jian").click(function() {
			if (num > 0) {
				num--;
				if (num > 0) {
					var numdom = $(".number")[0];
					numdom.value = num
				}
			}
		});
	});

	// 立即购买
	$(".buy").click(function() {
		layer.msg('此商品暂时缺货，无法购买');
	});

	// 商品详情点击事件
	$(".peiz").click(function() {
		$(this).css("color", "#E1140A");
		$(this).siblings().css("color", "#000");
		$(".photo").hide();
		$(".xinxi").show();
	});
	$(".xiangq").click(function() {
		$(this).css("color", "#E1140A");
		$(this).siblings().css("color", "#000");
		$(".photo").show();
		$(".xinxi").hide();
	});

	// 滚动固定事件
	$(window).scroll(function() {
		var sc = $(window).scrollTop();
		var fa = false;
		if (sc >= 820) {
			if (fa == false) {
				$(".fix").addClass("fixed");
			}
			f = true;
		} else {
			$(".fix").removeClass("fixed");
		}
	});


});
