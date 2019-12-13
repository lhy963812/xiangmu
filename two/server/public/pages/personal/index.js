$("ul.helper-item li.shouhuo").on("click",function() {
	window.location.href = "/pages/address/index.html";
});
console.log(Cookies.get("token"));
// 导火索,请求当前登录用户数据并展示
if(Cookies.get("token")) {
	http({ url:"/user/name"}).then(data => {
		$("span.name").text(data.name);
	});
} else {
	window.location.href = "/pages/login/index.html";
}