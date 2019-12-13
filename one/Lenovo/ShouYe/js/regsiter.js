$(function() {
	$(".head").load("yetou.html")
	//判断手机号
	$(".box .gozhuce").click(function() {
		var phone = document.getElementById('phone').value;
		if (!(/^1[3456789]\d{9}$/.test(phone))) {
			alert("手机号码有误，请重填");
			return false;
		}
	});
	//判断密码格式
	var a=false;
	$(".box .gozhuce").click(function() {
		var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
		if ($("#fname").val() == "") {
			alert("密码不能为空")
			return false;
		} else if (!regExp.test($("#fname").val())) {
			alert("密码格式不对")
			return false;
		} else {
			return a=true;
		}
	});
	//判断密码是否重复
	var b=false;
	$(".box .gozhuce").click(function() {
		var password = document.getElementById("fname").value;
		var repsword = document.getElementById("fname2").value;
		if (password != repsword) {
			alert("两次密码不同，请重新输入");
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
		} else {
			return b=true;
		}
	});
	$(".box .gozhuce").click(function(){
		if(a==true&&b==true){
			alert("注册成功，请登录")
			location.href = "load.html";
		}
	});
	
});
