var express = require("express");
var router = express.Router();
var httpResult = require("../config").httpResult;
var query = require("../util/dbHelper.js");

router.get("/list/:fid",function(req,res,next) {
	var fid = parseInt(req.params.fid);
	var sql = 'select * from `dt_category` where fid = ?';
	res.flag = query(sql,[ fid ])
		.then(results => httpResult.success(results));
	next();
})


module.exports = router;