$(function() {
	// 轮播图
	var mySwiper = new Swiper('.swiper-container', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: true,
	});
	$(".login").click(function() {
		$(".mask").css("display", "block");
	});
	$(".sgin-close").click(function() {
		$(".mask").css("display", "none");
	});
	$(".wechat").click(function() {
		$(".sgin-wechat").css("display", "block");
	});
	$(".pc-img").click(function() {
		$(".sgin-wechat").css("display", "none");
	});
	// 选择数量
	var t = $(".textbox").val("1");
	$(".plus").click(function() {
		t.val(parseInt(t.val()) + 1);
		setTotal();
	});
	$(".reduce").click(function() {
		t.val(parseInt(t.val()) - 1);
		if (t.val() < 0) {
			t.val(0);
		}
		setTotal();
	});

	function setTotal() {
		var s = 0;
		var a = $(".money").text();
		var sum = 0;
		$(".commodity").each(function() {
			s = parseInt($(this).find('input[class=textbox]').val());
			sum = s * parseFloat(a);
		});
		$(".payment-box ul .unit-price span").html(sum.toFixed(2));
		$(".payment-box ul .total span").html(sum.toFixed(2));
	}
	// 全选
	$('.payment-box input[name="checkall"]').click(function() {
		if ($(this).is(':checked')) {
			$('.commodity input[name="checkbox"]').each(function() {
				$(this).prop("checked", true);
			});
			setTotal();
		} else {
			$('.commodity input[name="checkbox"]').each(function() {
				$(this).prop("checked", false)
			});
		}
	});
	$('.commodity tr td input[name="checkbox"]').click(function() {
		if ($(this).is(':checked')) {
			setTotal();
		}
	});
	// 删除
	$(".delete").click(function() {
		var r = confirm("确定删除吗？");
		if (r == true) {
			$(".bc-nopro .commodity tr").remove();
		}
	});
	$(".all").click(function() {
		var b = confirm("确定删除吗？");
		if (b == true) {
			$("input[name='checkbox']:checked").each(function() {
				n = $(this).parents("tr").index();
				$("table.commodity").find("tr:eq(" + n + ")").remove();
			});
			$(".payment-box").css("display", "none");
			$(".dete-btn").css("display", "none");
			$(".empty").css("display", "block");
		}
	});
	// cookie
	$(".pay").click(function() {
		var products = [];
		var a = {};
		a.name = $(".commodity .com-title").text();
		a.price = $(".payment-box ul .unit-price span").text();
		products.push(a);
		console.log(products);
		document.cookie = JSON.stringify(products);
		location.href = "payment.html";
	});
	console.log(document.cookie);
	// 
	var n = document.cookie;
	var s = n.split(",");
	console.log(s);
	var m = s[1].split("]");
	console.log(m);
	var j = s[0].split("[");
	var z = j[1].split("]");
	// 
	var a = z[0].replace('"', '');
	var b = a.replace('"', '');
	// 
	var c = m[0].replace('"', '');
	var d = c.replace('"', '');
	$(".commodity .com-title a").html(d);
	$(".commodity .unit").html(b);
	$(".commodity .money").html(b);
	// 获取用户名
	$(".sign-btn").click(function() {
		$(".mask").css("display", "none");
		var usename = $(".sgin .input-box .txt").text();
		console.log(usename);
	});
});
