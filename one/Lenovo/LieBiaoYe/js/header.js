$(function() {
	$(window).scroll(function() {
		var a = $(this).scrollTop()
		if (a > 50) {
			$(".header .nav").css("top", "0px")
			$(".header .nav").css("height", "50px")
			$(".header .nav input").css("top", "5px")
			$(".header .nav li").css("line-height", "50px")
		} else {
			$(".header .nav").css("top", "50px")
			$(".header .nav").css("height", "70px")
			$(".header .nav input").css("top", "10px")
			$(".header .nav li").css("line-height", "70px")
		}
	});
	var a = true;
	$(".nav input").click(function() {
		if (a) {
			$(".nav .search").show()
			a = false
		} else {
			$(".nav .search").hide()
			a = true
		}
	});
	console.log(document.cookie);
	var cookies=document.cookie.split(";");
	console.log(cookies);
	var a=JSON.parse(cookies);
	console.log(a);
});
