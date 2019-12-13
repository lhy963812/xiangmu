$(function() {
	var mySwiper = new Swiper('.banner', {
		spaceBetween: 30,
		effect: 'fade',
		autoplay: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,

		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});



});
