<template>
	<div class="back">
		<el-dialog
			title="联想后台管理系统-登录" :visible="true" :show-close="false" center width="500px" top="200px">
			<el-form label-width="80px" :model="model" :rules="rules" status-icon ref="form">
				<el-form-item label="用户名：" prop="name">
					<el-input type="text" placeholder="请输入用户名" suffix-icon="el-icon-user-solid"
					          v-model="model.name"></el-input>
				</el-form-item>
				<el-form-item label="密码：" prop="pwd">
					<el-input type="password" placeholder="请输入密码" suffix-icon="el-icon-lock"
					          v-model="model.pwd"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer">
				<el-button type="primary" @click="login">确定</el-button>
				<el-button @click="$refs.form.resetFields()">重置</el-button>
			</div>
		</el-dialog>
	</div>

</template>

<script type="text/ecmascript-6">
	import back from "./back.png";

        export default {
                data() {
                        return {
                                model: { name: "", pwd: "" },
                                rules: {
                                        name: [
	                                        { required: true, message: "用户名不能为空", trigger: "blur" },
	                                        { max: 20, min: 5, message: "用户名长度 5 - 20 个字符", trigger: "blur" }
                                        ],
	                                pwd: [
		                                { required: true, message: "密码不能为空", trigger: "blur" },
		                                { max: 20, min: 5, message: "密码长度 5 - 20 个字符", trigger: "blur" }
	                                ]
                                }
                        };
                },
	        methods: {
                        login(){
                                this.$refs.form.validate()
                                        .then(flag =>{
                                                // 前台输入验证成功
                                                if(flag) return this.$http({url: "/admin/login", data: this.model});
                                                // 验证失败
                                                else return new Promise(() =>{
                                                });
                                        })
                                        .then(token =>{
                                                this.$cookies.set("token", token);
                                                this.$router.replace("/home");
                                        })
                                        .catch(() =>{
                                        });       // 消除失败的promise在浏览器中报的警告
                        }
                }
        };
</script>

<style scoped>
	.el-dialog__wrapper {
		background: url("./background.png");
	}
</style>