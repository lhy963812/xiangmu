var express = require("express");
var router = express.Router();
var httpResult = require("../config").httpResult;
var query = require("../util/dbHelper.js");
var Token = require("../util/token.js");

router.post("/login", function(req,res,next) {
	var { name, pwd } = req.body;
	var sql = 'select * from `dt_admin` where `name` = ? and `pwd` = ?;';
	res.flag = query(sql,[ name, pwd ])
		.then(results => {
			if(results.length > 0) return httpResult.success(Token.sign(name));
			else return httpResult.failure(null,"用户名或密码错误")
		});
	next();
});

router.post("/changepwd", Token.verify, function(req,res,next) {
	var name = req.token.name;
	var { oldPwd, newPwd } = req.body;
	res.flag = query('call p_changePwd(?,?,?);',[ name, oldPwd, newPwd ])
		.then(results => {
			if(results[0][0].result === "") return httpResult.success(null,"密码修改成功");
			else return httpResult.failure(null,results[0][0].result);
		});
	next();
});

module.exports = router;