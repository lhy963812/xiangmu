var orderId = parseInt(location.search.slice(1).split("=")[1]) || 1;
var money = location.search.slice(1).split("=")[2]
var bh = location.search.slice(1).split("&")[0]
var a=bh.split("=")[1]
console.log(money,a);
$(".content span.money,.footer em").text(money);
$(".content span.bianhao").text(a);
$(".footer span").on("click",function() {
	Notice.message("支付成功...");
	window.location.replace("/pages/cart/index.html");
})