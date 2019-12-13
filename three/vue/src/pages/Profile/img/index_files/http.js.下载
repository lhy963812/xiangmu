function http(options) {			//option表示用户调用ajax时的自定义配置
	var defaultOption = {			//defaultOption记录调用http时都可能会相同的默认配置
		method:"post",
		dataType:"json",
		// 请求携带token
		headers: {
			"Authorization": Cookies.get("token")
		}
	};
	Object.assign(defaultOption, options);	//合并默认配置和用户自定义配置
	return new Promise(resolve => {
		Notice.loading.show();
		setTimeout(() => {
			$.ajax({
				...defaultOption,
				success: result => {			//如果ajax成功让promise变为成功并携带返回的数据
					if(result.message != "") alert(result.message);
					switch(result.status) {
						case 200:
							resolve(result.data);
							break;
						case 401:
							Cookies.remove("token");
							Cookies.set("target",window.location.href);
							window.location.replace("/pages/login/index.html");
						case 199:
						case 500:
						case 404:
							break;
					}
				},
				//什么也不做，让promise永远是pending
				error:(xhr,textStatus) => alert(textStatus),
				complete: () => Notice.loading.hide()
			});
		},1000);
	});
}