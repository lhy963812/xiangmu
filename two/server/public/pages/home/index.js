var timer = null;
var index = 1;
var duration = 800; //图片切换动画过渡持续时间
var interval = 3000; //图片自动切换间隔时间
function bannerToggle(i) {
	if (i === index) return; //如果点击的是正在显示的不作任何动画
	$(".banner *:animated").stop(true, false); //停止所有正在执行的动画（如果有的话）；
	var oldIndex = index,
		marginLeft = "",
		resetMarginLeft = "";
	index = i || (index + 1 === $("ul.scroll>li").length - 1 ? 1 : index + 1);
	if (oldIndex === $("ul.scroll>li").length - 2 && index === 1) {
		marginLeft = "-1000%";
		resetMarginLeft = "-100%";
	} else if (oldIndex === 1 && index === $("ul.scroll>li").length - 2) {
		marginLeft = "0%";
		resetMarginLeft = "-900%";
	} else {
		marginLeft = `-${ index }00%`;
		resetMarginLeft = `-${ index }00%`;
	}
	// 控制图片切换
	$("ul.scroll").animate({
		marginLeft: marginLeft
	}, duration, function() {
		$("ul.scroll").css({
			marginLeft: resetMarginLeft
		});
	});
	// 控制indicator切换
	$("ul.indicator>li")
		.eq(index - 1).addClass("active").find("i").animate({
			width: "100%"
		}, duration).end()
		.siblings().removeClass("active").find("i").animate({
			width: "0%"
		}, duration);
}
timer = setInterval(bannerToggle, interval);
//抢购倒计时
function countTime() {
	var date = new Date();
	var now = date.getTime();
	var endDate = new Date("2019-11-19 00:00:00"); //设置截止时间
	var end = endDate.getTime();
	var leftTime = end - now; //时间差                              
	var h, m, s;
	if (leftTime >= 0) {
		h = Math.floor(leftTime / 1000 / 60 / 60);
		m = Math.floor(leftTime / 1000 / 60 % 60);
		s = Math.floor(leftTime / 1000 % 60);
		if (s < 10) {s = "0" + s;}
		if (m < 10) {m = "0" + m;}
		if (h < 10) {h = "0" + h;}
	} else {
		console.log("请重新设置时间")
	}
	//将倒计时赋值到div中
	document.getElementById("hour").innerHTML = h ;
	document.getElementById("minute").innerHTML = m 
	document.getElementById("second").innerHTML = s;
	//每秒调用countTime方法，显示动态时间效果
	setTimeout(countTime, 50);
}
countTime();