var id = 0;							//记录当前正处于编辑状态的地址的id
var isAdd = true;					//记录当前是新增还是修改

function generateLi(item) {
	$(`
		<li data-id="${ item.id }">
			<div class="address-list-item clearfix">
				<div class="address-list-item-header">
					<h4 class="receive-name">${ item.receiveName }</h4>
					<span class="receive-phone">${ item.receivePhone }</span>
				</div>
				<p class="receive-address">${ item.receiveRegion } ${ item.receiveDetail }</p>
				<button class="btn-default ${ item.isDefault ? 'default' : ''}">
					${ item.isDefault ? "默认地址" : "设为默认地址"}
				</button>
				<button class="btn-remove">删除</button>
				<button class="btn-update">修改</button>
			</div>
		</li>
	`).appendTo(".address-list>ul");
}
function beginEdit(item) {										//进入编辑状态
	$(".page-wrapper").toggle();
	if(item) {													//进入编辑-修改模式
		isAdd = false;
		$("input.form-receive-name").val(item.receiveName);
		$("input.form-receive-phone").val(item.receivePhone);
		$("input.form-receive-region").val(item.receiveRegion);
		$("input.form-receive-detail").val(item.receiveDetail);
	} else {													//进入编辑-新增模式
		isAdd = true;
		$("form").get(0).reset();
	}
}
function endEdit() {											//结束编辑状态
		$(".page-wrapper").toggle();
		delAddress();
}
function delAddress() {
	$("button.btn-remove").on("click",function() {					//删除地址功能
	id = parseInt($(this).closest("li").get(0).dataset.id);
		Notice.confirm("你确定删除吗?").then(() => {
			http({url:`/address/remove/${ id }`,method:"get" }).then(() => {
				Notice.message("删除地址成功");
				$(`li[data-id=${ id }]`).remove();
			});
		})
	});
}

$("button.btn-add").on("click",function() { beginEdit(); });	//进入编辑-新增状态
$(".edit>.header>a").on("click",function() { endEdit(); });		//后退-结束编辑状态

$(".address-list>ul").on("click",function(e) {
	if($(e.target).hasClass("btn-default")) {					//设为默认地址
		id = parseInt($(e.target).closest("li").get(0).dataset.id);
		if($(e.target).hasClass("default")) return;				//假如当前已经是默认地址了
		http({ url:`/address/default/${ id }`,method:"get"}).then(() => {
			Notice.message("已经成功设置为默认地址");
			$("button.btn-default").text("设置默认地址").removeClass("default");
			$(e.target).text("默认地址").addClass("default");
		});
	}
	if($(e.target).hasClass("btn-update")) {					//进入编辑状态
		var $li = $(e.target).closest("li")
		id = parseInt($(e.target).closest("li").get(0).dataset.id);
		beginEdit({
			receiveName: $li.find(".receive-name").text(),
			receivePhone: $li.find(".receive-phone").text(),
			receiveRegion: $li.find(".receive-address").text().split(" ")[0],
			receiveDetail: $li.find(".receive-address").text().split(" ")[1]
		})
	}
	// 如果是从订单页面进来选地址的
	if(window.location.search && window.location.search.slice(1) === "reference=orderconfirm") {
		var id2 = e.target.tagName === "LI" ? E.target.detaset.id : $(e.target).closest("li").get(0).dataset.id;
		window.location.replace(`/pages/orderconfirm/index.html?addressId=${ id2 }`);
	}
});
$("button.btn-save").on("click",function() {
	var model = {
		id: isAdd ? 0 : id,
		receiveName: $("input.form-receive-name").val(),
		receivePhone: $("input.form-receive-phone").val(),
		receiveRegion: $("input.form-receive-region").val(),
		receiveDetail: $("input.form-receive-detail").val()
	}
	if(isAdd) {
		http({url:"/address/add",data:{ jsonStr: JSON.stringify(model) } }).then(newId => {
			model.id = newId;
			model.isDefault = false;
			generateLi(model);
			Notice.message("新增地址成功");
			endEdit();
		});
	} else {
		http({url:"/address/update",data:{ jsonStr: JSON.stringify(model) } }).then(() => {
			var $li = $(`.address-list li[data-id = ${ model.id }]`);
			$li.find(".receive-name").text(model.receiveName);
			$li.find(".receive-phone").text(model.receivePhone);
			$li.find(".receive-address").text(`${ model.receiveRegion } ${ model.receiveDetail }`);
			Notice.message("修改地址成功");
			endEdit();
		});
	}
});

// 给右上nav添加点击事件
$(".nav-show").on("click",function() {
	$(".nav").stop().slideToggle(500);
});

// 导火索
http({ url:"/address/list"}).then( data => {
	if(data.length > 0) data.forEach(item => generateLi(item));
	delAddress();
});

function focusHandler(self) {
	Address.show().then(region => $(self).val(region));
}
Address.init();