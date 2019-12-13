$(function() {
	//引入头部
	$(".head").load("yetou.html")
	
	//
	$(".box .login_switch").click(function(){
		$(this).css("display","none")
		$(this).nextAll(".login_static").css("display","none")
		$(this).next(".login_switch2").css("display","block")
		$(this).nextAll(".login_scan").css("display","block")
	});
	$(".box .login_switch2").click(function(){
		$(this).css("display","none")
		$(this).nextAll(".login_scan").css("display","none")
		$(this).prev(".login_switch").css("display","block")
		$(this).next(".login_static").css("display","block")
	});
	//判断手机号
	$(".denglu").click(function() {
		var phone = document.getElementById('phone').value;
		if (!(/^1[3456789]\d{9}$/.test(phone))) {
			alert("手机号码有误，请重填");
			return false;
		}
	});
	//判断密码格式
	$(".denglu").click(function() {
		var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
		if ($("#fname").val() == "") {
			alert("密码不能为空")
			return false;
		} else if (!regExp.test($("#fname").val())) {
			alert("密码格式不对")
			return false;
		} else {
			var a=$("#phone").val();
			// console.log(a);
			document.cookie=JSON.stringify(a);
			var b=document.cookie="denglu=true";
			document.cookie=JSON.stringify(b);
			console.log(document.cookie);
			location.href = "firstpage.html";
			return true;
		}
	});
});
