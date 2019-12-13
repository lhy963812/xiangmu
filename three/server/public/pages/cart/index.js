//更新总金额
function updateAccount() {
	var account = 0;
	$(".content i.checkbox.normal.checked").each(function(i,item) {
		var price = $(this).parent().find("em.price").text();
		var count = $(this).parent().find("span.count").text();
		account += parseInt(price) * parseInt(count);
	});
	$("em.account").text(`￥${ account }`);
}
// 更新选中的数量
function updateTotal() {
	["normal","edit"].forEach(group => {
		var total = 0;
		$(`.content i.checkbox.${ group }.checked`).each(function(i,item) {
			var count = $(this).parent().find("span.count").text();
			total += parseInt(count);
		});
		if(total>0) {
			$(`span.total-${ group }`).text(`(${ total })`)
				.parent().attr("disabled",false).removeClass("disabled");
		} else {
			$(`span.total-${ group }`).text("")
				.parent().attr("disabled",true).addClass("disabled");
		}
	})
}
// 更新页脚
function updateFooter() {
	updateAccount();
	updateTotal();
}
// 展示当前登录用户的购物记录
function showData(data) {
	data.forEach(function(item) {
		$(`
			<li data-id="${ item.id }">
				<i class="checkbox normal checked" data-group="normal"></i>
				<i class="checkbox edit" data-group="edit"></i>
				<a href="/page/detail/index.html?id=${ item.id }">
					<img src="${ item.avatar }" />
					<div class="product-info">
						<h3 class="ellrpsis">${ item.name }</h3>
						<p class="ellrpsis">${ item.remark }</p>
						<div class="price-wrapper">￥<em class="price">${ item.price }</em></div>
					</div>
				</a>
				<div class="count-wrapper">
					<span class="decrease ${ item.count !==1 ? '' : 'disabled'}">-</span>
					<span class="count">${ item.count }</span>
					<span class="increase ${ item.count !==5 ? '' : 'disabled'}">+</span>
				</div>
				<i class="del"><img src="/static/images/shanchu.png"/></i>
			</li>
		`).appendTo("ul.list");
	});
	// 删除商品
	$("ul.list li i.del").on("click",function(e) {
		var id = parseInt($(e.target).closest("li").get(0).dataset.id);
		Notice.confirm("确定删除吗？").then(() =>{
			http({url:`/cart/remove/${ id }`,method:"get"}).then(() => {
				Notice.message("删除商品成功");
				$(`li[data-id=${ id }]`).remove();
				if($("ul.list>li").length === 0) {
					$(".footer,ul.list").hide();
					$(".empty-cart").show();
				} else {
					updateFooter();
					if($(`.content i.checkbox.normal:not(".checked")`).length === 0)
					$("i.checkbox.all.normal").addClass("checked");
				}
			})
		})
	});
	updateFooter();
}
// 为动态拼出来的东西绑定点击事件
function bindEvent() {
	$(".content i.checkbox").on("click",function() {
		$(this).toggleClass("checked");
		var groupName = this.dataset.group;
		$(`.content i.checkbox.${ groupName }:not(".checked")`).length ===0
			? $(`i.checkbox.all.${ groupName }`).addClass("checked")
			: $(`i.checkbox.all.${ groupName }`).removeClass("checked");
		updateFooter()
	});
	// 数量加减
	$("span.decrease").on("click",function() {
		var $count = $(this).next();
		var count = parseInt($count.text());
		if(count === 1) {
			Notice.message("已达到购买数量下限 ...");
			return;
		}
		var id = $(this).closest("li").get(0).dataset.id;
		http({
			url:`/cart/decrease/${ id }`
		}).then(() => {
			count--;
			if(count === 1) $(this).addClass("disabled");
			$count.text(count).next().removeClass("disabled");
			updateFooter();
		});
	});
	$("span.increase").on("click",function() {
		var $count = $(this).prev();
		var count = parseInt($count.text());
		if(count === 5) {
			Notice.message("已达到购买数量上限 ...");
			return;
		}
		var id = $(this).closest("li").get(0).dataset.id;
		http({
			url:`/cart/increase/${ id }`
		}).then(() => {
			count++;
			if(count === 5) $(this).addClass('disabled')
			$count.text(count).prev().removeClass("disabled");
			updateFooter();
		});
	});
}
// 全选与反选
$(".footer i.checkbox.all").on("click",function() {
	$(this).toggleClass("checked");
	var groupName = $(this).hasClass("normal") ? "normal" : "edit";
	$(this).hasClass("checked") ?
		$(`.content i.checkbox.${ groupName }`).addClass("checked") :
		$(`.content i.checkbox.${ groupName }`).removeClass("checked");
	updateFooter()
});

// 给右上nav添加点击事件
$(".nav-show").on("click",function() {
	$(".nav").stop().slideToggle(500);
});

// 给结算添加点击事件
$("button.btn-settlement").on("click", function() {
	var ids = [];
	$("ul.list>li:has(i.checkbox.normal.checked)").each(function(i,item) {
		ids.push(parseInt(item.dataset.id));
	});
	sessionStorage.setItem("settlementIds",JSON.stringify(ids));
	window.location.href = "/pages/orderconfirm/index.html";
});

// 导火索,请求当前登录用户数据并展示
if(Cookies.get("token")) {
	http({ url:"/cart/list"}).then(data => {
		if(data.length>0) {
			$(".empty-cart").hide();
			$("ul.list").show();
			showData(data);
			bindEvent();
		} else {
			$(".empty-cart").show();
			$("ul.list,.footer").hide();
		}
	});
} else {
	$(".unlogin").show();
	$(".footer").hide();
}