$(function() {
	$(".head").load("header.html")
	$(".foot").load("footer.html")
	//banner图
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: true,
		loop: true, // 循环模式选项
		//分页器
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function(index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
		},
		//前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	/*全部加阴影*/
	$(".main_lft,.main_rgt ul li").hover(function(){
		$(this).css("box-shadow","0px 15px 30px rgba(0,0,0,0.2)")
	},function(){
		$(this).css("box-shadow","0 0 0 0")
	});
	/*显示定位菜单*/
	$(window).scroll(function(){
		var a=$(this).scrollTop()
		if(a>100){
			$(".sort").show()
		}else{
			$(".sort").hide()
		}
	});
});
