var express = require("express");
var httpResult = require("../config").httpResult;
var assetsPath = require("../config").assetsPath;
var query = require("../util/dbHelper.js");
var path = require("path");
var file = require("../util/file.js");
var upload = require("../util/upload.js");
var router = express.Router();


router.get("/list/:fid",function(req,res,next) {
	var fid = parseInt(req.params.fid);
	var sql = 'select * from `dt_category` where fid = ?';
	res.flag = query(sql,[ fid ])
		.then(results => httpResult.success(results));
	next();
});

router.post("/all",function(req,res,next) {
	var sql = 'select * from `dt_category`;'
	res.flag = query(sql).then(results => httpResult.success(results));
	next();
});

router.post('/remove', function(req, res, next) {
	var { id, avatar } = req.body;
	console.log(typeof id);
	// 通知数据库删除数据
	res.flag = query('call p_removeCategory(?);', [ id ])
		.then(results => {
			if(results[0][0].result === '') {
				if(avatar) { // 把要删除的分类的图片从文件夹中删除
					var imgPath = path.join(assetsPath.root, avatar);
					file.unlink(imgPath);
				}
				return httpResult.success(null, '删除成功！');
			} else {
				return httpResult.failure(null, results[0][0].result);
			}
		});
	next();
});
// 预上传分类图片
router.post("/upload", upload.single("avatar"), function(req,res,next){
	res.flag = Promise.resolve(httpResult.success(req.file.filename));
	next();
});
// 新增分类
router.post('/add', function(req, res, next) {
	var { fid, name, newAvatar } = req.body;
	var { tmp, root, category } = assetsPath;
	res.flag = query('CALL p_addCategory(?,?,?);', [ fid, name, newAvatar ? category + newAvatar : null])
		.then(results => results[0][0].result)
		.then(newId => {
			// 如果上传了图片，说明是新增的一级分类和三级分类
			// 如果没上传图片，说明是新增的二级分类
			if(newAvatar) { 
				var fromPath = path.join(tmp, newAvatar);
				var toPath = path.join(root, category, newAvatar);
				// 从tmp中拷贝到最终目录中;同时从temp中删除临时文件
				file.copy(fromPath, toPath).then(() => file.unlink(fromPath));
			}	
			return httpResult.success(newId, '新增成功..');
		});
	next();
});
// 修改分类
router.post('/update', function(req, res, next) {
	var { id, fid, name, avatar, newAvatar } = req.body;
	res.flag = new Promise(function(resolve, reject) {
		if(newAvatar) {	// 如果修改了图片
			var { tmp, root, category } = assetsPath;
			var fromPath = path.join(tmp, newAvatar);
			var toPath = path.join(root, category, newAvatar);
			file.copy(fromPath, toPath)
				.then(() => file.unlink(fromPath))
				.then(() => file.unlink(path.join(root, avatar)))
				.then(() => resolve());
		}
		else resolve();
	})
		.then(() => {
			avatar = newAvatar ? (assetsPath.category + newAvatar) : avatar;
			let sqlStr = 'UPDATE `dt_category` SET `fid` = ?,`name` = ?,`avatar` = ? WHERE `id` = ?';
			return query(sqlStr, [ fid, name, avatar, id ]);
		})
		.then(() => httpResult.success(null, '修改成功'))
		.catch(message => httpResult.error(null, message));
	next();
});

module.exports = router;