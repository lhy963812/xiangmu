$(function() {
	// 地址弹出层
	$(".new-add").click(function() {
		$(".mask").css("display", "block");
	});
	$(".close").click(function() {
		$(".mask").css("display", "none");
	});
	$(".cancel-btn").click(function() {
		$(".mask").css("display", "none");
	});
	$("input").hover(function() {
		$(this).css("border", "1px solid red");
	}, function() {
		$(this).css("border", "1px solid #ccc");
	});
	$(".full,.phone").click(function() {
		$(this).next().css("font-size", "12px");
		$(this).next().css("top", "-20px");
	});
	$(".det-title").click(function() {
		$(this).next().css("font-size", "12px");
		$(this).next().css("bottom", "198px");
	});
	// 添加新地址
	$(".prese-btn").click(function() {
		var name = $(".full").val();
		var phone = $(".phone").val();
		var slectTitle = $(".slect-title").val();
		var detTitle = $(".det-title").val();
		var phone = document.querySelector(".phone").value;
		var vphone = phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
		if (!(/^1[3456789]\d{9}$/.test(phone))) {
			alert("手机号码填写错误，请重新输入。");
			return false;
		} else {
			$(".selected-box").css("display", "block");
			$(".coustomer").append(name);
			$(".phone-num").append(vphone);
			$(".address-info").append(slectTitle, detTitle);
		}
	});
	// 添加
	$(".selected-box").hover(function() {
		$(this).append("<span class='modify'>删除</span><span class='modify2'>修改</span>")
	}, function() {
		$(this).find("span").remove();
	});
	// 跳转
	$(".shopp-cart").click(function() {
		location.href = "shopp.html";
	});
	$(".submitBtn").click(function() {
		location.href = "cashier.html";
	});

	// 优惠券
	$(".selected").click(function() {
		$(".available").css("display", "block");
		$(".selected").css("background-color", "#fff");
		$(".selected").css("color", "#ff0000");
		$(".discount-counet").css("display", "none");
		$(".discount-code").css("background-color", "#f7f7f7");
		$(".discount-code").css("color", "#898989");
		$(".lohas").css("display", "none");
		$(".ledou").css("background-color", "#f7f7f7");
		$(".ledou").css("color", "#898989");
	});
	// 可用
	$(".available-cou").click(function() {
		$(".no-available").css("color", "#898989");
		$(".no-available").css("border", "none");
		$(".available-cou").css("color", "#ff0000")
		$(".available-cou").css("border-bottom", "1px solid #ff0000");
	});
	// 不可用
	$(".no-available").click(function() {
		$(".available-cou").css("color", "#898989");
		$(".available-cou").css("border", "none")
		$(this).css("color", "#ff0000")
		$(this).css("border-bottom", "1px solid #ff0000");
	});


	// 优惠码
	$(".discount-code").click(function() {
		$(".available").css("display", "none");
		$(".selected").css("background-color", "#f7f7f7");
		$(".selected").css("color", "#898989");
		$(".discount-counet").css("display", "block");
		$(".discount-code").css("background-color", "#fff");
		$(".discount-code").css("color", "#ff0000");
		$(".lohas").css("display", "none");
		$(".ledou").css("background-color", "#f7f7f7");
		$(".ledou").css("color", "#898989");
	});
	// 乐豆
	$(".ledou").click(function() {
		$(".available").css("display", "none");
		$(".selected").css("background-color", "#f7f7f7");
		$(".selected").css("color", "#898989");
		$(".discount-counet").css("display", "none");
		$(".discount-code").css("background-color", "#f7f7f7");
		$(".discount-code").css("color", "#898989");
		$(".lohas").css("display", "block");
		$(".ledou").css("background-color", "#fff");
		$(".ledou").css("color", "#ff0000");
	});
	console.log(document.cookie);
	// cookie
	console.log(document.cookie);
	var j = document.cookie;
	var cookies = j.split(":");
	var b = cookies[1].split(",")
	var t = b[0].replace('"', '');
	var t2 = t.replace('"', '')
	var y = cookies[2].split("}");
	var jiage = y[0].replace('"', '');
	var jiage2 = jiage.replace('"', '')
	$(".detailed .result").html(
		"<img class='fl' src='img/ban01.jpg'><div class='nameA fl'></div><div class='nameB fl'></div><div class='numberA fl'>X1</div><div class='retreat'>支持七天无忧退换</div>"
	);
	$(".detailed .result .nameA").html(t2);
	$(".detailed .result .nameB").html(jiage2);
	var a = $(".detailed .result .nameB").text();
	$(".settlement ul li span .jine").html(a);
	$(".settlement ul li span .total-price").html(a);

	// 底部地址
	$(".prese-btn").click(function() {
		var xingMing = $(".colour .new .selected-box .coustomer").text();
		var dianHua = $(".colour .new .selected-box .phone-num").text();
		var diZhi = $(".colour .new .selected-box .address-info").text();
		$(".settlement-btn div .xin-xi .xingming").html(xingMing);
		$(".settlement-btn div .xin-xi .dianhua").html(dianHua);
		$(".settlement-btn div .di-zhi .xiangxi").html(diZhi);
		// 取底部地址
		var quchu = [];
		var d = {};
		d.name = $(".settlement-btn div .xin-xi .xingming").text();
		d.phone = $(".settlement-btn div .xin-xi .dianhua").text();
		d.appr = $(".settlement-btn div .di-zhi .xiangxi").text();
		quchu.push(d);
		console.log(quchu);
		document.cookie = JSON.stringify(quchu);
	});
	// 取底部的地址
	$(".submitBtn").click(function() {
		location.href = "cashier.html";
	});
});
