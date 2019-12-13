<template>
	<div>
		<el-form :inline="true" size="small">
			<el-form-item label="商品名称：">
				<el-input v-model="search.name"></el-input>
			</el-form-item>
			<el-form-item label="商品类别：">
				<el-select v-model="search.mId">
					<el-option :value="0" label=" - 请选择 -"></el-option>
					<el-option v-for="item in mainCategoryList" :key="item.id" :value="item.id" :label="item.name"></el-option>
				</el-select>
				<el-select v-model="search.sId">
					<el-option :value="0" label=" - 请选择 -"></el-option>
					<el-option v-for="item in subCategoryList" :key="item.id" :value="item.id" :label="item.name"></el-option>
				</el-select>
				<el-select v-model="search.cId">
					<el-option :value="0" label=" - 请选择 -"></el-option>
					<el-option v-for="item in categoryList" :key="item.id" :value="item.id" :label="item.name"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button @click="resetSearchForm">重置查询</el-button>
				<el-button icon="el-icon-search" @click="searchHandler">查询</el-button>
				<el-button type="primary" icon="el-icon-plus" @click="beginAdd">新增</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="productList" border>
			<el-table-column type="index" width="50" align="center" fixed="left"></el-table-column>
			<el-table-column prop="name" label="商品名称" width="250" show-overflow-tooltip fixed="left"></el-table-column>
			<el-table-column label="商品类别" width="230" show-overflow-tooltip>
				<template slot-scope="scope">
					<span v-text="scope.row.mainCategoryName"></span>
					-
					<span v-text="scope.row.subCategoryName"></span>
					-
					<span v-text="scope.row.categoryName"></span>
				</template>
			</el-table-column>
			<el-table-column prop="remark" label="商品简介" show-overflow-tooltip></el-table-column>
			<el-table-column label="价格(RMB)" width="100">
				<template slot-scope="scope">
					￥ <span v-text="scope.row.price"></span>
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center" width="160">
				<template slot-scope="scope">
					<el-button size="mini" type="success" @click="beginUpdate(scope.row)">更新</el-button>
					<el-button size="mini" type="primary" @click="putProductOnSale(scope.row.id)" v-if="scope.row.status === 0">上架</el-button>
					<el-button size="mini" type="danger" @click="pullProductOffShelves(scope.row.id)" v-else>下架</el-button>
				</template>
			</el-table-column>
			<el-table-column label="avatar" width="80" align="center" fixed="right">
				<template slot-scope="scope">
					<i class="el-icon-picture" @click="beginAvatarEdit(scope.row)"></i>
				</template>
			</el-table-column>
			<el-table-column label="banner" width="80" align="center" fixed="right">
				<template slot-scope="scope">
					<i class="el-icon-picture" @click="beginBannerEdit(scope.row)"></i>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
			background
			layout="total, sizes, prev, pager, next, jumper"
			:total="pagination.total"
			:page-sizes="[ 6, 8, 10, 12, 15 ]"
			:page-size="pagination.count"
			:current-page="pagination.index"
			@size-change="sizeChangeHandler"
			@current-change="currentChangeHandler"></el-pagination>
		<el-dialog
			class="dialog-avatar"
			:visible.sync="avatarDialog.isShow"
			title="商品图品 - 预览/维护">
			<el-upload
				ref="avatarUpload"
				name="avatar"
				list-type="picture-card"
				accept=".jpg,.png"
				action="/product/avatar/upload"
				:file-list="avatarDialog.fileList"
				:data="{ id: avatarDialog.id }"
				:before-upload="beforeAvatarUploadHandler"
				:before-remove="avatarBeforeRemoveHandler"
				:on-success="avatarUploadSuccessHandler">
				<i slot="trigger" class="el-icon-plus"></i>
				<div slot="tip" class="tip">只能上传png或jpg图片，且小于2M</div>
			</el-upload>
		</el-dialog>
		<el-dialog
			class="dialog-banner"
			title="商品图片 - 预览/维护"
			width="700px"
			:visible.sync="bannerDialog.isShow">
			<el-upload
				ref="bannerUpload"
				name="banner"
				list-type="picture-card"
				accept=".jpg,.png"
				action="/product/banner/upload"
				:data="{ id: bannerDialog.id }"
				:file-list="bannerDialog.fileList"
				:multiple="true"
				:before-upload="beforeBannerUploadHandler"
				:on-success="bannerUploadSuccessHandler"
				:before-remove="bannerBeforeRemoveHandler">
				<i slot="trigger" class="el-icon-plus"></i>
				<div slot="tip">只能上传png或jpg图片，且小于2M</div>
			</el-upload>
		</el-dialog>
		<el-dialog
			class="dialog-edit"
			width="800px"
			:show-close="false"
			:close-on-click-model="false"
			:close-on-press-escape="false"
			:visible="editDialog.isShow"
			:title="`商品维护 - ${ editDialog.mode ? '新增' : '修改' }`">
			<el-form :model="editDialog.model" :rules="editDialog.rules" ref="form">
				<el-form-item label="商品名称：" prop="name" label-width="100px">
					<el-input v-model="editDialog.model.name" placeholder="请输入商品名称"></el-input>
				</el-form-item>
				<el-form-item label="商品分类：" prop="cid" label-width="100px">
					<el-select v-model="editDialog.mId">
						<el-option label="- 请选择 -" :value="0"></el-option>
						<el-option v-for="item in mainCategoryList" :key="item.id" :value="item.id" :label="item.name"></el-option>
					</el-select>
					<el-select v-model="editDialog.sId">
						<el-option label="- 请选择 -" :value="0"></el-option>
						<el-option v-for="item in subCategoryListWithEdit" :key="item.id" :value="item.id" :label="item.name"></el-option>
					</el-select>
					<el-select v-model="editDialog.model.cid">
						<el-option label="- 请选择 -" :value="0"></el-option>
						<el-option v-for="item in categoryListWithEdit" :key="item.id" :value="item.id" :label="item.name"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="商品简介：" prop="remark" label-width="100px">
					<el-input v-model="editDialog.model.remark" placeholder="请输入商品简介"></el-input>
				</el-form-item>
				<el-form-item label="价格(元)" prop="price" label-width="100px">
					<el-input v-model="editDialog.model.price"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer">
				<el-button type="primary" @click="save">保存</el-button>
				<el-button @click="editDialog.isShow=false">取消</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script type="text/ecmascript-6">
	import { createNamespacedHelpers } from "vuex";
	let { mapState, mapActions } = createNamespacedHelpers("category");

        export default {
                name: "Product",
	        data() {
                        return {
                                productList: [],
	                        ajaxData: { name: "", mId: 0, sId: 0, cId: 0 },
	                        search: { name: "", mId: 0, sId: 0, cId: 0 },
	                        pagination: { total: 0, index: 1, count: 6 },
	                        avatarDialog: { isShow: false, id: 0, fileList: [] },
	                        bannerDialog: { isShow: false, id: 0, fileList: [] },
	                        editDialog: {
                                        isShow: false,
                                        mode: true,
                                        model: { id: 0, cid: 0, name: "", remark: "", price: 0 },
		                        rules: {
                                                name: [
                                                        { required: true, message: "请输入商品名称，名字不能为空",trigger: "blur" },
                                                        { min: 6, max: 30, message: "长度在6 - 30个字符", trigger: "blur" }
                                                ],
                                                remark: [
                                                        { min: 10, max: 50, message: "内容长度在10 - 50 个字符", trigger: "blur" }
                                                ],
                                                price: [
                                                        { validator: (rule, value, callback) => {
                                                                if(value === "") callback(new Error("价格不能为空"));
                                                                else if(!/^\d+$/.test(value)) callback(new Error("价格必须是数字"));
                                                                else callback();
                                                        },trigger: "blur" }
                                                ],
                                                cid: [
                                                        { validator: (rule, value, callback) => {
                                                                if(value === 0) {
                                                                        callback(new Error("商品分类不能为空"));
                                                                } else callback();
                                                        }, trigger: "change" }
                                                ]
		                        },
                                        mId: 0,
                                        sId: 0
	                        }
                        }
	        },
		computed: {
			...mapState([ "list" ]),
			// 搜索和编辑公用的计算属性
			mainCategoryList() {
			        return this.list.filter(item => item.fid === 0);
			},
			// 搜索框使用的计算属性
			subCategoryList() {
			        return this.search.mId ? this.list.filter(item => item.fid === this.search.mId) : [];
			},
			categoryList() {
			        return this.search.sId ? this.list.filter(item => item.fid === this.search.sId) : [];
			},
			// 编辑使用的计算属性
			subCategoryListWithEdit() {
			        return this.editDialog.mId ? this.list.filter(item => item.fid === this.editDialog.mId) : [];
			},
			categoryListWithEdit() {
			        return this.editDialog.sId ? this.list.filter(item => item.fid === this.editDialog.sId) : [];
			}
		},
	        methods: {
		        ...mapActions([ "init" ]),
		        resetSearchForm() {
		                this.search.name = "";
		                this.search.mId = 0;
		                this.search.sId = 0;
		                this.search.cId = 0;
		        },
		        getProductData(index = 1) {
		                this.$http({
			                url: "/product/admin/list",
			                data: {
				                ...this.ajaxData,
				                begin:(index - 1) * this.pagination.count,
				                count: this.pagination.count
			                }
		                }).then(data => {
		                        this.productList = data.list;
		                        this.pagination.total = data.total;
		                        this.pagination.index = index;
		                })
		        },
		        sizeChangeHandler(size) {
		                this.pagination.count = size;
		                this.getProductData();
		        },
		        currentChangeHandler(index) {
		                this.getProductData(index);
		        },
		        searchHandler() {
		                this.ajaxData = Object.assign({}, this.search);
		                this.getProductData();
		        },
		        beginAvatarEdit(row) {
		                this.avatarDialog.id = row.id;
		                if(row.avatar !== "") {
		                        this.avatarDialog.fileList.push({
			                        name: row.avatar.slice(row.avatar.lastIndexOf("/") + 1),
			                        url: row.avatar
		                        });
		                }
		                this.avatarDialog.isShow = true;
		        },
		        beginBannerEdit(row) {
		                this.bannerDialog.id = row.id;
                                if(row.banner) {
                                        row.banner.split(",").forEach(item => {
                                                this.bannerDialog.fileList.push({
	                                                name: item.slice(item.lastIndexOf("/") + 1),
	                                                url: item
                                                });
                                        });
                                }
                                this.bannerDialog.isShow = true;
		        },
		        beginAdd() {
		                this.editDialog.mode = true;
		                this.editDialog.isShow = true;
		        },
		        beginUpdate(row) {
		                this.editDialog.model.id = row.id;
		                this.editDialog.model.name = row.name;
		                this.editDialog.model.remark = row.remark;
		                this.editDialog.model.price = row.price;
		                let sId = this.list.find(item => item.id === row.cid).fid;
		                this.editDialog.mId = this.list.find(item => item.id === sId).fid;
		                this.$nextTick(() => {
		                        this.editDialog.sId = sId;
		                        this.$nextTick(() => { this.editDialog.model.cid = row.cid; });
		                });
		                this.editDialog.mode = false;
		                this.editDialog.isShow = true;
		        },
		        beforeAvatarUploadHandler(file) {
		                return this.$confirm("确定上传新图片替换原图片吗？", "提示", { type: "info" })
			                .then(() => {
                                                const isJPG = file.type === 'image/jpeg';
                                                const isPNG = file.type === 'image/png';
                                                const isLt2M = file.size / 1024 / 1024 < 2;

                                                if ((!isJPG) && (!isPNG)) {
                                                        this.$message.error('图片必须为jpg或png类型');
                                                }
                                                if (!isLt2M) {
                                                        this.$message.error('图片必须小于2M');
                                                }
                                                return (isJPG || isPNG) && isLt2M ? Promise.resolve() : Promise.reject();
			                })
			                .catch(() => Promise.reject(this.avatarDialog.fileList.splice(1,1) ) );
		        },
		        beforeBannerUploadHandler(file) {
                                const isJPG = file.type === "image/jpeg";
                                const isPNG = file.type === "image/png";
                                const isLt2M = file.size / 1024 / 1024 < 2;
                                if((!isJPG) && (!isPNG)) {
                                        this.$message.error("图片必须为jpg或png类型！");
                                }
                                if(!isLt2M) {
                                        this.$message.error("图片必须小于 2MB！");
                                }
                                return (isJPG || isPNG) && isLt2M;
		        },
		        avatarUploadSuccessHandler({ status, data, message }, file, fileList) {
				if(status === 200) {
				        if(fileList.length > 1) fileList.splice(0, 1);
				        this.$message("图片上传成功", "提示", { type: "success" });
				        let target = this.productList.find(item => item.id === this.avatarDialog.id);
				        target.avatar = data;
				} else this.$message(message, "提示", { type: "error" });
		        },
		        bannerUploadSuccessHandler({ status, data, message }, file, fileList) {
				if(status === 200) {
				        this.$message("banner图片上传成功", "提示", { type: "success" });
				        let target = this.productList.find(item => item.id === this.bannerDialog.id);
				        target.banner = target.banner ? `${ target.banner }, ${ data }` : data;
				} else this.$message(message, "提示", { type: "error"});
		        },
		        avatarBeforeRemoveHandler() {
		                this.$message("图片必须有", "提示", { type: "warning" });
		                return false;
		        },
		        bannerBeforeRemoveHandler(file, fileList) {
		                let filePath = file.response ? file.response.data : file.url,
		                target = this.productList.find(item => item.id === this.bannerDialog.id),
		                bannerArr = target.banner.split(","),
		                i = bannerArr.indexOf(filePath);
		                bannerArr.splice(i, 1);
		                let newBanner = bannerArr.length > 0 ? bannerArr.join(",") : null;
		                return this.$confirm("删除后，不可恢复，确定删除？", "警告", { type: "warning" })
			                .then(() => {
		                                return this.$http({
			                                url: "/product/banner/remove",
			                                data: {
			                                        id: this.bannerDialog.id,
				                                filePath,
				                                newBanner
			                                }
		                                });
			                })
			                .then(() => {
		                                target.banner = newBanner;
		                                this.$message("删除成功", "提示", { type: "success" })
			                });
		        },
		        putProductOnSale(id) {
		                this.$confirm("确认上架？", "提示", { type: "warning"})
			                .then(() => {
		                                this.$http({ url: `/product/putonsale/${ id }` })
			                                .then(() => this.productList.find(item => item.id === id).status = 1);
			                })
			                .catch(() => {});
		        },
		        pullProductOffShelves(id) {
		                this.$confirm("请确认商品当前没有在购物车中并且没有与任何未完成订单有关系！", "提示", { type: "warning" })
			                .then(() => {
		                                this.$http({ url: `/product/pulloffshelves/${ id }` })
			                                .then(() => this.productList.find(item => item.id === id).status = 0);
			                })
			                .catch(() => {});
		        },
		        save() {
		                this.$refs.form.validate()
			                .then(() => {
		                                if(this.editDialog.mode) {
		                                        this.$http({ url: "/product/add", data: this.editDialog.model })
			                                        .then(product => {
			                                                this.productList.push(product);
			                                                this.editDialog.isShow = false;
			                                        });
		                                } else {
		                                        this.$http({ url: "/product/update", data: this.editDialog.model })
			                                        .then(product => {
			                                                let i = this.productList.findIndex(item => item.id === this.editDialog.model.id);
			                                                this.productList.splice(i, 1, product);
			                                                this.editDialog.isShow = false;
			                                        });
		                                }
			                })
			                .catch(() => {});
		        }
	        },
	        created() {
                        this.init();
                        this.getProductData();
	        },
	        watch: {
                        "search.mId"() { this.search.sId = 0; },
		        "search.sId"() { this.search.cId = 0; },
		        "editDialog.mId"() { this.editDialog.sId = 0; },
		        "editDialog.sId"() { this.editDialog.model.cid = 0; },
		        "avatarDialog.isShow"(newValue) {
                                if(!newValue) {
                                        this.avatarDialog.id = 0;
                                        this.avatarDialog.fileList = [];
                                }
		        },
		        "bannerDialog.isShow"(newValue) {
                                if(!newValue) {
                                        this.bannerDialog.id = 0;
                                        this.bannerDialog.fileList = [];
                                }
		        },
		        "editDialog.isShow"(newValue) {
                                if(!newValue) {
                                        this.$refs.form.resetFields();
                                        this.editDialog.mId = 0;
                                        this.editDialog.sId = 0;
                                        this.editDialog.model.id = 0;
                                        this.editDialog.model.cid = 0;
                                        this.editDialog.model.name = "";
                                        this.editDialog.model.remark = "";
                                        this.editDialog.model.price = 0;
                                }
		        }
	        }
        };
</script>

<style scoped>
	.el-pagination{
		position: fixed;
		bottom: 40px;
		left: 220px;
	}
	.el-select {
		width: 200px;
	}
</style>