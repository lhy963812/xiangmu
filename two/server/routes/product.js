var express = require('express');
var router = express.Router();
var httpResult = require("../config").httpResult;
var query = require("../util/dbHelper.js");

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

module.exports = router;