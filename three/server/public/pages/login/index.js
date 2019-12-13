// 绑定用户名密码登录点击事件
$(".btn-login-pwd").click(function() {
	http({
		url: "/user/login/pwd",
		data: {
			name: $("input.name").val(),
			pwd: $("input.pwd").val()
		}
	}).then(token => {
		// 保存token令牌至cookie中
		Cookies.set("token", token);
		// 跳转到登录之前的页面
		window.location.replace(Cookies.get("target") || "/pages/home/index.html");
	})
});
// 绑定注册点击事件
$("button.btn-login-zhuce").on("click",function() {
	http({
		url:"/user/logon/pwd",
		data: {
			name: $("input.logon-name").val(),
			pwd: $("input.logon-pwd").val()
		}
	}).then(() => {
		Notice.message("注册成功");
		$(".page-wrapper").toggle();
	})
});

// 给右上nav添加点击事件
$(".nav-show").on("click", function() {
	$(".nav").stop().slideToggle(500);
});

$("button.register-btn,button.login-btn").on("click", function() {
	$(".page-wrapper").toggle();
});
