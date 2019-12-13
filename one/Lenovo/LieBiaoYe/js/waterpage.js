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
	
	$(".information .words li>a").click(function() {
		var selected = $(this).hasClass("selected");
		if (selected) {
			$(this).next("dl").slideUp(300);
			$(this).removeClass("selected");
		} else {
			var $a = $(this).next("dl");
			$a.parent().siblings().find("dl").stop().slideUp(300, function() {
				//$a.stop().slideDown(500);//如果使用了stop会立刻显示出来
			});
			$a.stop().slideDown(300);
			$(this).parent().siblings().find("a").removeClass("selected");
			$(this).addClass("selected");
		}
	})
})
