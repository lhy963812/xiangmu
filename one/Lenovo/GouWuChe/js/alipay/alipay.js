$(function(){
	var price = document.cookie;
	var price1 = price.split(";");
	var price2 = price1[1].split(",");
	var price3 = price2[0].split('"')
	$(".floor .qian").html(price3[1]);
});