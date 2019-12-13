<template>
	<div class="box">
		<div class="page-wrapper" v-show="!isShow" >
			<LenovoNav></LenovoNav>
			<div class="content">
				<div class="address-list">
					<ul>
						<li data-id="${ item.id }" v-for="(item, i) in list" :key="item.id">
							<div class="address-list-item clearfix">
								<div class="address-list-item-header" @click.stop="closeAddress(item.id)">
									<h4 class="receive-name" v-text="item.receiveName"></h4>
									<span class="receive-phone" v-text="item.receivePhone"></span>
								</div>
								<p class="receive-address" v-text='item.receiveRegion +item.receiveDetail' @click.stop="closeAddress(item.id)"></p>
								<button :class="`btn-default ${ item.isDefault ? 'default' : ''}`" v-text="item.isDefault ? '默认地址' : '设为默认地址' " @click="isdefault(item, i)"></button>
								<button class="btn-remove" @click="remove(i)">删除</button>
								<button class="btn-update" @click="beginEdit(item)">修改</button>
							</div>
						</li>
					</ul>
					<button class="btn-add" @click="isShow = true">+ 新增地址</button>
				</div>
			</div>
		</div>
		<div class="page-wrapper edit" v-show="isShow">
			<div class="header">
				<button  @click="isShow = false">&lt;</button>
				<h1>新增收货地址</h1>
			</div>
			<div class="content">
				<form action="">
					<div class="form-item">
						<label >收货人姓名：</label>
						<input type="text" class="form-receive-name" v-model="model.receiveName" placeholder="请输入收货人姓名"/>
					</div>
					<div class="form-item">
						<label >手机号码：</label>
						<input type="text" class="form-receive-phone" v-model="model.receivePhone" placeholder="请输入手机号码"/>
					</div>
					<div class="form-item">
						<label >所在地区：</label>
						<input type="text" class="form-receive-region" v-model="model.receiveRegion" placeholder="请输入省市区"/>
					</div>
					<div class="form-item">
						<label >街道地址：</label>
						<input type="text" class="form-receive-detail" v-model="model.receiveDetail" placeholder="请输入详细地址"/>
					</div>
				</form>
				<button type="button" class="btn-save" @click="addOrUpDataAddress">保存</button>
			</div>
		</div>
	</div>

</template>

<script type="text/ecmascript-6">
	import LenovoNav from "../../components/LenovoNav.vue";

        export default {
                name: "Address",
                components: { LenovoNav },
		data() {
                        return {
                                list: [],
	                        isShow: false,
	                        isAdd: true,
	                        model:{ id:0, receiveName:"", receivePhone:"", receiveRegion:"", receiveDetail:"" }
                        }
		},
	        methods: {
                        getData() {
                                return this.$http({ url:"/address/list" })
	                                .then(data => {
	                                       this.list = data;
	                                })
                        },
                        beginEdit(item) {										//进入编辑状态
                                this.isShow = true;
                                this.isAdd = false;
                                this.model.id = item.id;
                                this.model.receiveName = item.receiveName;
                                this.model.receivePhone = item.receivePhone;
                                this.model.receiveRegion = item.receiveRegion;
                                this.model.receiveDetail = item.receiveDetail;
                        },
		        addOrUpDataAddress(){
                                if(this.isAdd){
                                       this.$http({
                                                url: "/address/add",
                                                data: {jsonStr: JSON.stringify(this.model)}
                                        }).then(newId =>{
                                                this.model.id = newId;
                                                this.model.isDefault = false;
                                                alert("新增地址成功");
                                                this.getData();
                                                this.isShow = false;
                                        });
                                }else{
                                        this.$http({
                                                url: "/address/update",
                                                data: {jsonStr: JSON.stringify(this.model)}
                                        }).then(() =>{
                                                let { id, receiveName, receivePhone, receiveRegon, receiveDetail } = this.model;
                                                let obj = { id, receiveName, receivePhone, receiveRegon, receiveDetail };
                                                let i = this.list.findIndex(item => item.id === id);
                                                this.list.splice(i, 1, obj);
                                                alert('地址修改成功！');
                                                this.isShow = false;
                                                this.isAdd = false;
                                                this.model.id = 0;
                                                this.model.receiveName = '';
                                                this.model.receivePhone = '';
                                                this.model.receiveRegon = '';
                                                this.model.receiveDetail = '';
                                        });
                                }
                        },
                        remove(i) {
                                let id = this.list[i].id;
                                if(confirm('确定删除吗？')) {
                                        this.$http({ url: `/address/remove/${ id }`, method: 'get'})
                                                .then(() => {
                                                        this.list.splice(i, 1);
                                                        alert('删除成功！');
                                                })
                                }
                        },
                        isdefault(item, i) {
                                this.$http({ url: `/address/default/${ item.id }`, method: 'get'})
                                        .then(() => {
                                                this.model.receiveDetail = 1;
                                                alert('设置默认地址成功！');
                                                this.getData();
                                        })
                        },
                        closeAddress(id) {
		                console.log(id);
                                if(window.location.href.split('?')[1] === "reference=orderconfirm") {
                                        this.$router.push(`../orderconfirm/?addressId=${id}`);
                                }
                        }
	        },
	        created() {
                        this.getData();
//                        if(this.$route.search && this.$route.search.slice(1) === "reference=orderconfirm") {
//                                let id2 = this.$refs.e ? this.$refs.e.target.detaset.id : this.$refs.e.dataset.id;
//                                this.$route.replace(`../orderconfirm?addressId=${ id2 }`);
//                        }
	        }
        };
</script>

<style scoped>
	.page-wrapper{
		width: 100%;
		height: 100%;
	}
	/* 内容 */
	.list>.content{

	}
	.content>.address-list{

	}
	.content>.address-list>ul{

	}
	.content>.address-list>ul>li{
		border-bottom: 2px solid #b0b0b0;
		display: flex; padding: 15px 10px 5px 10px;
	}
	.content>.address-list>ul>li>.address-list-item{
		flex-grow: 1;
	}
	.content>.address-list>ul>li>.address-list-item>.address-list-item-header{
		display: flex;
	}
	.content>.address-list>ul>li>.address-list-item>.address-list-item-header>*{
		color: #333;font-size: 15px;font-weight: normal;width: 100px;
	}
	.content>.address-list>ul>li>.address-list-item>p.receive-address{
		margin-top: 10px; font-size: 12px;color: #666;padding-bottom: 5px;
		border-bottom: 1px solid #ccc;
	}
	.content>.address-list>ul>li>.address-list-item>button.btn-default{
		color: #B0B0B0;
	}
	.content>.address-list>ul>li>.address-list-item>button.btn-default.default{
		color: #BF1111;
	}
	.content>.address-list>ul>li>.address-list-item>button.btn-update{
		flex-shrink: 0;padding: 0 10px;
		color: #797979;float: right;
	}
	.content>.address-list>ul>li>.address-list-item>button.btn-remove{
		flex-shrink: 0;color: #797979;float: right;
	}
	.content>.address-list>button.btn-add{
		height: 36px;
		margin: 50px 30px 10px;
		padding: 0 34%;
		line-height: 36px;
		text-align: center;
		background-color: #e2231a;
		color: #fff;
		border-radius: 5px;
	}
	/* 新增地址页面 */
	.edit{

	}
	.edit>.header>h1{
		margin-right: 44px;
	}
	.edit>.content{

	}
	.edit>.content>form{
		padding: 0 10px;
	}
	.edit>.content>form>.form-item{
		height: 30px;
		padding: 10px 0;
		border-bottom: 1px solid #ccc;
	}
	.edit>.content>form>.form-item>label{
		float: left;
		width: 100px;
		line-height: 30px;
		font-size: 12px;
		color: #575757;
	}
	.edit>.content>form>.form-item>input{
		float: left;
		font-size: 14px;
		line-height: 30px;
		border: none;
		outline: none;
	}
	.edit>.content>button.btn-save{
		height: 36px;
		margin: 50px 30px 10px;
		padding: 0 39%;
		line-height: 36px;
		text-align: center;
		background-color: #e2231a;
		color: #fff;
		border-radius: 5px;
	}
</style>