var activeId = 0;				//记录当前页面激活状态的一级分类id
function getData(fid) {
	return http({ url:`/category/list/${ fid }`,method:"get" });
}

//拼接展示一级分类
function showMainList(data) {
	data.forEach(item => {
		$(`<li data-id="${ item.id }"><span>${ item.name }</span></li>`)
		.on("click",function() { toggleId(item.id,item.avatar); })
		.appendTo("ul.list-main");
	});
}

function toggleId(id,avatar) {
	if(id === activeId) return;
	//左侧列表切换
	$(`li[data-id=${ id }]`).addClass("active").siblings().removeClass("active");
	//右侧上部图片切换
	$("img.avatar").attr("src",avatar);
	//右下二三级切换
	$("ul.list-sub-wrapper").empty();
	getData(id).then(data => {
		data.forEach(item => {
			var $listSub = $("<ul class='list-sub clearfix'></ul>");
			getData(item.id).then(data2 => {
				data2.forEach(item2 => {
					$(`
						<li>
							<a href="/pages/list/index.html?cid=${ item2.id }">
								<img src="${ item2.avatar }" />
								<span>${ item2.name }</span>
							</a>
						</li>
					`).appendTo($listSub);
				});
			});
			$(`<li><h3>${ item.name }</h3></li>`)				//拼出二级附加三级将二级附加到指定ul
			.append($listSub)
			.appendTo("ul.list-sub-wrapper");
		});
	});
	activeId = id;
}
// 给右上nav添加点击事件
$(".nav-show").on("click",function() {
	$(".nav").stop().slideToggle(500);
});
//导火索
getData(0).then(data => {
	showMainList(data);
	toggleId(data[0].id,data[0].avatar);
});
