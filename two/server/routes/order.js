var express = require('express');
var router = express.Router();
var httpResult = require("../config").httpResult;
var query = require("../util/dbHelper.js");
var Token = require("../util/token.js");

router.post("/confirm",function(req,res,next) {
	var name = req.token.name;
	var { ids, account, addressId } = JSON.parse(req.body.jsonStr);
	var sql = 'CALL p_orderConfirm(?,?,?,?,?)';
	res.flag = query(sql,[ ids, account, new Date(), name, addressId ])
		.then(results => httpResult.success(results[0][0].orderId));
	next();
});


module.exports = router;