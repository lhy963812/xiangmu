$(function() {
	// 对左边菜单添加点击事件
	$(".ur-lst li>a").click(function() {
		// 查询a是否含有类it
		var it = $(this).hasClass("it");
		if (it) {
			// 如果有,隐藏dl,删除类it
			$(this).nextAll("dl").slideUp(300);
			$(this).removeClass("it");
			$(this).next("i").css("background-position", "-13px 0");
		} else {
			// 如果没有,显示dl,添加类it
			var $a = $(this).nextAll("dl");
			$a.stop().slideDown(300);
			$(this).addClass("it");
			$(this).next("i").css("background-position", "0 0");
		}
	});
	// 头部文字
	$(".ur-lst  li dl dd").click(function() {
		var txt = $(this).text();
		console.log(txt);
		$(".rgt-tit").text(txt);
	});


	// 菜单切换
	$(".grxx dd").click(function() {
		$(this).css("background-color", "#D62F26");
		$(this).css("color", "#fff");
		$(this).siblings().css("background-color", "#ffff");
		$(this).siblings().css("color", "#6F7170");
		$(this).parents("li").siblings().find("dd").css("background-color", "#ffff");
		$(this).parents("li").siblings().find("dd").css("color", "#6F7170");

		$(".rgt-content").show();
		$(".yes").show();
		$(".address").hide();
		$(".password").hide();
		$(".order").hide();
	});

	$(".shdz dd").click(function() {
		$(this).css("background-color", "#D62F26");
		$(this).css("color", "#fff");
		$(this).siblings().css("background-color", "#ffff");
		$(this).siblings().css("color", "#6F7170");
		$(this).parents("li").siblings().find("dd").css("background-color", "#ffff");
		$(this).parents("li").siblings().find("dd").css("color", "#6F7170");

		$(".rgt-content").hide();
		$(".yes").hide();
		$(".address").show();
		$(".password").hide();
		$(".order").hide();
	});
	// 个人信息
	$(".grxx #xinxi").click(function() {
		$(".rgt-content").show();
		$(".yes").show();
		$(".address").hide();
		$(".password").hide();
		$(".order").hide();
	});
	// 密码
	$(".grxx #psd").click(function() {
		$(".rgt-content").hide();
		$(".address").hide();
		$(".password").show();
		$(".yes").hide();
		$(".order").hide();
	});
	// 地址
	$(".shdz #add").click(function() {
		$(".rgt-content").hide();
		$(".address").show();
		$(".password").hide();
		$(".yes").hide();
		$(".order").hide();
	});
	// 我的订单
	$(".shdz #ord").click(function() {
		$(".rgt-content").hide();
		$(".address").hide();
		$(".password").hide();
		$(".yes").hide();
		$(".order").show();
	});


	// 生日控件
	laydate.render({
		elem: '#birthday' //指定元素
	});

	// 修改个人信息弹框
	$(".content-left .button").click(function() {
		var v = $(".nicheng").val().length;
		var s = $("#birthday").val().length;
		if (v == 0) {
			layer.msg('昵称不允许为空');
		} else if (s == 0) {
			layer.msg('生日不允许为空');
		}

		if (v > 0 && s > 0) {
			layer.open({
				type: 1,
				skin: 'layui-layer-rim', //加上边框
				area: ['550px', '200px'], //宽高
				title: '提示信息',
				time: 3000,
				btn: '确定',
				btnAlign: 'c',
				skin: 'demo-class',
				content: '<div style="text-align:center;font-size:20px;color:black;margin-top:30px;">修改成功</div>'
			});
		}

	});

	// 修改密码
	$(".password .button").click(function() {
		var o = $(".old").val().length;
		var n = $(".new").val().length;
		var a = $(".again").val().length;
		var ot = $(".old")[0].value;
		var nt = $(".new")[0].value;
		var at = $(".again")[0].value;
		console.log(ot, nt, at);
		if (o == 0) {
			layer.msg('原始密码不允许为空');
		} else if (n == 0) {
			layer.msg('新密码不允许为空');
		} else if (a == 0) {
			layer.msg('确认密码不允许为空');
		} else if (ot == at || ot == nt) {
			layer.msg('旧密码和新密码不允许相同');
		} else if (nt != at) {
			layer.msg('新密码和确认密码须相同');
		}

		if (o > 0 && n > 0 && a > 0 && ot != nt && ot != at && nt == at) {
			layer.open({
				type: 1,
				skin: 'layui-layer-rim', //加上边框
				area: ['550px', '200px'], //宽高
				title: '提示信息',
				time: 3000,
				btn: '确定',
				btnAlign: 'c',
				skin: 'demo-class',
				content: '<div style="text-align:center;font-size:20px;color:black;margin-top:30px;">修改成功</div>'

			});
		}


	});


	// 修改地址弹框
	$(".address .btn").click(function() {

		layer.open({
			type: 1,
			skin: 'layui-layer-rim', //加上边框
			area: ['650px', '360px'], //宽高
			title: '增加收货地址',
			btn: '保存收货地址',
			btnAlign: 'c',
			skin: 'demo-class',
			content: '<p style="margin:20px;font-size:18px"><span style="color:#D62F26;">*</span> 新的地址 : <input type="text" style="width:250px;height:30px"></p>',
		});
	});








	// 企业信息
	$(".yes").click(function() {
		// 查询a是否含有类it
		var it = $(this).hasClass("it");
		if (it) {
			// 如果有,隐藏dl,删除类it
			$(this).next().slideUp(300);
			$(this).removeClass("it");
		} else {
			// 如果没有,显示dl,添加类it
			var $a = $(this).next();
			$a.stop().slideDown(300);
			$(this).addClass("it");
		}
	});


	// 我的订单
	$(".order-tit ul li").click(function() {
		$(this).siblings().css("background-color", "#eee");
		$(this).css("background-color", "#fff");
		$(this).siblings().css("color", "#000");
		$(this).css("color", "#e2231a");

		$(this).css("border-right", "1px solid #D9D8D6");
		$(this).siblings().css("border-right", "none");
	});

	// 选中所有复选框
	$(".order-content .ord-fl1 input").click(function() {
		var state = this.checked;
		var cks = $(".order-content input");
		for (var i = 1; i < cks.length; i++) { //i从1开始,排除第0个自己
			cks[i].checked = state;
		}
	});

	// 详情页1
	$(".adetac").click(function() {
		location.href = "details.html";
	});
	// 详情页2
	$(".adetap").click(function() {
		location.href = "telephone.html";
	});

	// 取消订单弹框
	$(".cancel").click(function() {
		layer.confirm('是否确认取消？', {
			btn: ['确定', '取消'] //按钮
		}, function() {
			layer.msg('取消订单成功', {
				icon: 1,
				time: 2000, //20s后自动关闭
			});
		});

	});

	// 立即支付
	$(".nowpay").click(function() {
		location.href="../zhangshun/cashier.html";
		var ck = $(".order-content .checked");
		// var checkedCks=[];
		for (var i = 0; i < ck.length; i++) {
			if (ck[i].checked) {
				// checkedCks.push(ck[i]);
				var pre = $(ck[i]).parent("").next("table").find(".ord-price").text();
				console.log(pre);
			}
		}

	});






});
