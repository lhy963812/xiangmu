var express = require('express');
var router = express.Router();
var httpResult = require("../config").httpResult;
var query = require("../util/dbHelper.js");
var assetsPath = require("../config").assetsPath;
var path = require("path");
var file = require("../util/file.js");
var upload = require("../util/upload.js");

router.post("/list",function(req,res,next) {
	// ES6解构赋值
	var {cid, name, orderCol, orderDir, begin, pageSize} = JSON.parse(req.body.jsonStr);
	// 命令数据库执行指定的mysql语句
	var sql = "select * from `dt_product` where `cid` = ? and `name` like '%" + name +
				  "%' order by `" + orderCol + "` " + (orderDir ? "asc" : "desc") + " limit ?,?;";
	res.flag = query(sql,[ cid, begin, pageSize ]).then(results => httpResult.success(results));
	next();	//放行
});

router.get("/model/:id",function(req,res,next) {
	var id = parseInt(req.params.id);
	var sql = 'select * from `dt_product` where `id` = ?;';
	res.flag = query(sql,[id])
		.then(results => httpResult.success(results[0]));
	next();
});

router.post("/admin/list", function(req,res,next) {
	let { name, mId, sId, cId, begin, count } = req.body;
	var sql = 'call p_getProductByCondition(?,?,?,?,?,?);';
	res.flag = query(sql, [ name, mId, sId, cId, begin, count ])
		.then(results => httpResult.success({ total: results[0][0].total, list: results[1] }));
	next();
});

router.post('/avatar/upload', upload.single('avatar'), function(req, res, next) {
	var fileName = req.file.filename;
	var { id } = req.body;
	var { tmp, root, product: { avatar } } = assetsPath;
	var fromPath = path.join(tmp, fileName);
	var toPath = path.join(root, avatar, fileName);
	var filePath = avatar + fileName;
	res.flag = file.copy(fromPath, toPath)
		.then(() => file.unlink(fromPath))
		.then(() => query('CALL p_uploadProductAvatar(?, ?);', [ filePath, id ]))
		.then(results => {
			if(results[0][0].avatar !== '') {
				var oldAvatarPath = path.join(root, results[0][0].avatar);
				return file.unlink(oldAvatarPath);
			}
			else 
				return Promise.resolve();
		})
		.then(data => httpResult.success(filePath))
		.catch(message => httpResult.error(null, message));
	next();
});

router.post("/banner/upload", upload.single("banner"), function(req,res,next) {
	var { id } = req.body;
		var { tmp, root, product: { banner } } = assetsPath;
		var fileName = req.file.filename;
		var filePath = banner + fileName;
		var fromPath = path.join(tmp, fileName);
		var toPath = path.join(root, banner, fileName);
		res.flag = file.copy(fromPath, toPath)					// 从temp中拷贝到最终目录中
			.then(() => file.unlink(fromPath))		// 从temp中删除临时文件
			.then(() => query('CALL p_uploadProductBanner(?,?);', [ filePath, id ]))
			.then(data => httpResult.success(filePath))
			.catch(message => httpResult.error(null, message));
		next();
});

router.post('/banner/remove', function(req, res, next) {
	var { id, filePath, newBanner } = req.body;
	res.flag = query('UPDATE `dt_product` SET `banner` = ? WHERE `id` = ?', [ newBanner, id ])
		.then(() => file.unlink(path.join(assetsPath.root, filePath)))
		.then(() => httpResult.success())
		.catch(message => httpResult.error(null, message));
	next();
});

router.post("/putonsale/:id", function(req,res,next) {
	let id = parseInt(req.params.id);
	let sql = 'update `dt_product` set `status` = 1 where `id` = ?;';
	res.flag = query(sql, [ id ]).then(() => httpResult.success(null, "商品上架成功!"));
	next();
});

router.post("/pulloffshelves/:id", function(req,res,next) {
	let id = parseInt(req.params.id);
	let sql = 'update `dt_product` set `status` = 0 where `id` = ?;';
	res.flag = query(sql, [ id ]).then(() => httpResult.success(null, "商品下架成功!"));
	next();
})

router.post("/add", function(req,res,next) {
	var { cid, name, remark, price } = req.body;
	var sql = 'CALL p_addProduct(?,?,?,?);';
	res.flag = query(sql, [ cid, name, remark, parseInt(price) ])
		.then(results => httpResult.success(results[0][0],"商品新增成功!"));
	next();
})

router.post("/update", function(req,res,next) {
	var { id, cid, name, remark, price } = req.body;
	var sql = 'CALL p_updateProduct(?,?,?,?,?);';
	res.flag = query(sql, [ cid, name, remark, parseInt(price), id ])
		.then(results => httpResult.success(results[0][0], "商品修改成功!"));
	next();
});

module.exports = router;