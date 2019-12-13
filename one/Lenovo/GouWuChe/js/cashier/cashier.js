$(function() {
	// 查看详情
	$(".footer").load("footer.html");
	var a = true;
	$(".details").click(function() {
		if (a) {
			$(".hide-box").slideDown();
			a = false;
		} else {
			$(".hide-box").slideUp();
			a = true;
		}
	});
	// 跳转
	$(".btn-red").click(function() {
		location.href = "alipay.html";
	});
	// 时间

	var date = new Date();
	var seperator1 = "-";
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = year + seperator1 + month + seperator1 + strDate;
	$(".time").html(currentdate);
	// 支付方式
	$(".platform-choice div").hover(function(){
		$(this).css("border","1px solid red");
	},function(){
		$(this).css("border","1px solid #ccc");
	});
	//支付金额
	$(".platform-choice div").click(function(){
		var take = $(".inline-rgt .price-red").text();
		$(".container .tips .tips-price").html(take);
	});
	// cookie
	var a = document.cookie;
	var b = a.split(";")
	// 姓名
	var c = b[0].split(",");
	var name = c[0].split(":");
	var name1 = name[1].split('"');
	// 电话
	var phone = c[1].split(":");
	var phone1 = phone[1].split('"');
	// 取地址
	var add = c[2].split(":");
	var add1 = add[1].split('"');
	// 取金额
	var price = b[1].split(",");
	var price1 = price[0].split('"');
	$(".hide-box .mingzi").html(name1[1]);
	$(".hide-box .t-phone").html(phone1[1]);
	$(".hide-box .t-add").html(add1[1]);
	$(".inline-rgt .price-red").html(price1[1]);
	
	
	// 查看更多
	$(".bank .bank-choice div .see").click(function(){
		$(".bank-hide").css("display","block");
		$(".see").css("display","none");
		$(".collect").css("display","block");
	});
	// 收起更多
	$(".bank .bank-choice div .collect").click(function(){
		$(this).css("display","none");
		$(".bank-hide").css("display","none");
		$(".see").css("display","block");
	});
	// 微信支付
	$(".container .platform .platform-choice .weixin").click(function(){
		$(".mask").css("display","block");
	})
	// 关闭
	$(".mask .payType .guan").click(function(){
		$(".mask").css("display","none");
	});
});
