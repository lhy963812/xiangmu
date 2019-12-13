// homePage1
$(function() {
	$(window).scroll(function(){
		var a=$(this).scrollTop()
		if(a>50){
			$(".header .nav").css("top","0px")
			$(".header .nav").css("height","50px")
			$(".header .nav li").css("line-height","50px")
		}else{
			$(".header .nav").css("top","50px")
			$(".header .nav").css("height","70px")
			$(".header .nav li").css("line-height","70px")
		}
	});
	var a=true;
	$(".nav input").click(function(){
		if(a){
			$(".nav .search").show()
			a=false
		}else {
			$(".nav .search").hide()
			a=true
		}
	});
	
	var mySwiper = new Swiper('.wslider', {

		loop: true, // 循环模式选项
		autoplay: true,
		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},

		// 如果需要前进后退按钮
		navigation: {

			prevEl: '.prev',
			nextEl: '.next',
		},
	});
});
