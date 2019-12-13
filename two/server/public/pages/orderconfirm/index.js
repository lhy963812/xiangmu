var price = [];
var sum = 0;

function showData(data) {
	data.forEach(item => {
		$(`
			<li>
				<div>
					<img src='${ item.avatar }' />
				</div>
				<div class='describe-box clearfix'>
					<p class='product-name ellrpsis'>${ item.name }</p>
					<p class='remark ellrpsis'>${ item.remark}</p>
					<span class='product-price-box'>￥<em class='product-price'>${ item.price }</em></span>
					<span class='count-wrapper'>x<em class='product-count'>${ item.count }</em></span>
				</div>
			</li>
		`).appendTo('ul.list');
		price.push(item.price * item.count);
	});
	for(var i = 0; i < price.length; i++) {
			sum += price[i];
	}
	$('.actual,.real>span').text(sum);
	
}

function  showAddress(address){
	if(address){
		addressId = address.id;
		$('.address-box, .bc-di, .right-arrow, .left-address').show();
		$('.empty, .empty-t').hide();
		$('.name').text(address.receiveName);
		$('.phone').text(address.receivePhone);
		$('.detailed').text(`${ address.receiveRegion } ${ address.receiveDetail }`);
	} else {
		$('.address-box, .bc-di, .right-arrow, .left-address').hide();
		$('.empty, .empty-t').show ();
	}
}

var addressId = window.location.search ? parseInt(window.location.search.slice(1).split('=')[1]) : 0;

// 获取地址
http({ 
	url: addressId === 0 ? '/address/getdefault' : `/address/getmodel/${ addressId }`,
	method: 'get'
}).then(showAddress);

// 
var id = sessionStorage.getItem('settlementIds');
var jsonStr = id;
http({ url: `/cart/infor`, data: { jsonStr }})
	.then(data => {
		showData(data);
	})

$("button.btn-submit").on("click", function() {
	// 判断addressId是否不为0
	if(addressId === 0) {
		Notice.message("地址不能为空...");
		return;
	}
	var ids = JSON.parse(sessionStorage.getItem("settlementIds")).join(",");
	var account = sum;  		// 暂时作假金额
	var jsonStr = JSON.stringify({ ids, account, addressId });
	http({ url:"/order/confirm", data: { jsonStr } }).then(orderId => {
		window.location.replace(`/pages/pay/index.html?orderId=${ orderId }&account=${ account }`);
	});
});