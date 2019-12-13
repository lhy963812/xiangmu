$(function() {
	// 轮播图
	var mySwiper = new Swiper('.swiper-container', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		autoplay: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	});
	$(".header").load("header.html");
});
