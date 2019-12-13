var express = require('express');
var router = express.Router();
var httpResult = require("../config").httpResult;
var query = require("../util/dbHelper.js");
var Token = require("../util/token.js");

router.post("/list",Token.verify,function(req,res,next) {
	var name = req.token.name;
	var sql = 'select T1.id,T1.pid,T1.count,T1.addTime,T2.name,T2.avatar,T2.price,T2.remark from(select * from `dt_cart` where `name` = ?) T1 inner join `dt_product` T2 on T1.pid = T2.id;';
	res.flag = query(sql,[ name ])
		.then(results => httpResult.success(results));
	next();
});
router.post("/increase/:id",Token.verify,function(req,res,next) {
	var id = parseInt(req.params.id);
	var sql = 'update `dt_cart` set `count` = `count` + 1 where `id` = ?;';
	res.flag = query(sql,[ id ])
		.then(results => {
			if(results.affectedRows === 1) return httpResult.success();
			else return httpResult.failure(null,"操作失败");
		});
	next();
});
router.post("/decrease/:id",Token.verify,function(req,res,next) {
	var id = parseInt(req.params.id);
	var sql = 'update `dt_cart` set `count` = `count` - 1 where `id` = ?;';
	res.flag = query(sql,[ id ])
		.then(results => {
			if(results.affectedRows === 1) return httpResult.success();
			else return httpResult.failure(null,"操作失败");
		});
	next();
});
router.post("/remove/:id",Token.verify, function(req,res,next) {
	var id = parseInt(req.params.id);
	var sql = 'delete from `dt_cart` where `id` = ?;';
	res.flag = query(sql,[ id ]).then(() => httpResult.success());
	next();
});
router.post("/add",Token.verify,function(req,res,next) {
	var name = req.token.name;
	var { pid,count } = JSON.parse(req.body.jsonStr)
	var addTime = new Date();
	res.flag = query("call p_addProductToCart(?,?,?,?);",[name,pid,count,addTime])
		.then(results => {
			if(results[0][0].result === "") return httpResult.success();
			else return httpResult.failure(null,results[0][0].result);
		})
	next();
});
router.get("/total",Token.verify,function(req,res,next) {
	var name = req.token.name;
	var sql = 'select sum(`count`) as total from `dt_cart` where `name` = ?;';
	res.flag = query(sql,[name]).then(results => httpResult.success(results[0].total || 0));
	next()
});
router.post('/infor', function(req, res, next) {
	var id = JSON.parse(req.body.jsonStr);
	var sql = 'select * from (select * from `dt_cart` where `id` in (?)) T1 inner join `dt_product` on T1.pid = `dt_product`.id;';
	res.flag = query(sql, [ id ]).then(results => httpResult.success(results));
	next();
});

module.exports = router;