<template>
	<div class="page-wrapper">
		<div class="header">
			<LenovoNav />
		</div>
		<div class="content">
			<div class="unlogin" v-if="!isLogin">
				<img src="./nopro.jpg" />
				<p>登录后才能看到商品哦~</p>
				<router-link to="/login">去登录</router-link>
			</div>
			<div class="empty-cart" v-else-if="list.length === 0">
				<img src="./nopro.jpg" >
				<p>购物车空空如也，快去选购吧！</p>
				<router-link to="/category">去逛逛</router-link>
			</div>
			<div class="cart-list" v-else>
				<ul>
					<li v-for="(item, i) in list" :key="item.id">
						<CartCheckBox :checked = "item.checked1" @toggle="item.checked1 = !item.checked1" v-show="!isEdit" />
						<CartCheckBox :checked = "item.checked2" @toggle="item.checked2 = !item.checked2" v-show="isEdit" />
						<router-link to="">
							<img :src="item.avatar" />
							<div class="product-info">
								<h3 class="ellrpsis" v-text="item.name"></h3>
								<p class="ellrpsis" v-text="item.remark"></p>
								<div class="price-wrapper">￥
									<em class="price" v-text="item.price"></em>
								</div>
							</div>
						</router-link>
						<div class="count-wrapper">
							<LenovoCount :count="item.count" @decrease="decrease(item)" @increase="increase(item)" />
						</div>
						<i class="del" :class="{ disabled: totalEdit === 0 }" @click="remove(item.id, i)" :disabled="totalEdit === 0">
							<img src="./shanchu.png"/>
						</i>
					</li>
				</ul>
			</div>
		</div>
		<div class="footer" v-show="isLogin && list.length > 0 && !isEdit">
			<div class="checkbox-all-wrapper clearfix">
				<CartCheckBox :checked="isChecked1All" @toggle="toggleAllChecked1" /> <span>全选</span>
				<div class="account-wrapper clearfix">
					<h6>实付款：</h6>
					<em class="account" v-text="account"></em>
				</div>
			</div>
			<button type="button" class="btn-settlement" :class="{ disabled: totalNormal === 0 }" @click="settlement" :disabled="totalNormal === 0">
				结算
				<span class="total-normal" v-text="totalNormal > 0 ? `(${ totalNormal })` : '' "></span>
			</button>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import LenovoNav from "../../components/LenovoNav.vue";
	import LenovoCount from "../../components/LenovoCount.vue";
	import CartCheckBox from "./CartCheckBox.vue";

	export default {
		name: "Cart",
		components: { LenovoNav, LenovoCount, CartCheckBox },
		data() {
		        return {
		                isLogin: this.$cookies.get("token") ? true : false,
			        list: [],
			        isEdit: false,                          // 标识购物车当前是否处于编辑状态
		        };
		},
		computed: {
		        account() {
		                let result = 0;
		                this.list.forEach(item => {
		                        if(item.checked1) result += item.count * item.price;
		                });
		                return result
		        },
			totalNormal() {
		                let result = 0;
		                this.list.forEach(item => {
		                        if(item.checked1) result += item.count;
		                });
		                return result;
			},
			totalEdit() {
		                let result = 0;
		                this.list.forEach(item => {
		                        if(item.checked2) result += item.count;
		                });
		                return result;
			},
			isChecked1All() {
                                return this.list.every(item => item.checked1);
                        }
//                        isChecked2All() {
//                                return this.list.every(item => item.checked2);
//                        }
		},
		methods: {
		        toggleAllChecked1() {
		                let flag = !this.isChecked1All;
		                this.list.forEach(item => item.checked1 = flag);
		        },
			increase(item) {
		                this.$http({ url: `/cart/increase/${ item.id }`}).then(() => item.count = item.count + 1);
			},
                        decrease(item) {
                                this.$http({ url: `/cart/decrease/${ item.id }`}).then(() => item.count = item.count - 1);
                        },
			remove(id, index ) {
                                if(!confirm("确定删除吗？")) return;
                                this.$http({ url: `/cart/remove/${ id }` }).then(() => {
                                        this.list.splice(index, 1);
                                        alert("删除成功");
                                });
                        },
			settlement() {
		                let ids = [];
		                this.list.forEach(item => {
		                        if(!item.checked2) ids.push(item.id);
		                });
		                sessionStorage.setItem("settlementIds", JSON.stringify(ids));
		                this.$router.push("../orderconfirm");
		                alert("结算成功!请抓紧时间提交订单哦");
			}
		},
		created() {
		        if(this.isLogin) {
		                this.$http({ url: "/cart/list"})
			                .then(data => {
			                        data.forEach(item => {
			                                item.checked1 = true;
			                                item.checked2 = false;
			                        });
			                        this.list = data;
			                });
		        }
		}

	};
</script>

<style scoped>
	/* 内容 */
	.content{
		flex-grow: 1;
		padding: 0 10px;
	}
	ul{
		background-color: #fff;
	}
	ul>li{
		display: flex;
		align-items: center;
		position: relative;
		padding: 30px 0;
		border-bottom: 1px solid #ccc;
	}
	ul>li>a{
		flex-grow: 1;
		display: flex;
		overflow: hidden;
	}
	ul>li>a>img{
		width: 90px;
		flex-shrink: 0;
	}
	ul>li>a>.product-info{
		flex-grow: 1;
		align-self: center;
		overflow: hidden;

	}
	ul>li>a>.product-info>h3{
		color: #333;
		font-size: 15px;
		font-weight: normal;
	}
	ul>li>a>.product-info>p{
		font-size: 12px;
		margin: 5px 0;
		color: #797979;
	}
	ul>li>a>.product-info>.price-wrapper{
		font-size: 15px;
		margin-top: 10px;
		color: #bf1111;
	}
	ul>li>a>.product-info>.price-wrapper>em.price{
		font-style: normal;
	}
	ul>li>.count-wrapper{
		flex-shrink: 0;
		width: 90px;
		position: absolute;
		height: 24px;
		bottom: 0;
		left: 20px;
	}
	ul>li>.count-wrapper>span{
		width: 26px;height: 20px;text-align: center;
		line-height: 24px;font-size: 13px;
		display: inline-block;color: #333;
	}
	ul>li>>.count-wrapper>span.count{

	}
	ul>li>.count-wrapper>span.disabled{
		color: rgba(0,0,0,0.3);
	}
	ul>li>i.del{
		position: absolute;
		bottom: 0;
		right: 20px;
	}
	ul>li>i.del>img{
		display: inline-block;
		width: 24px;
	}
	.empty-cart,.unlogin{
		text-align: center;
	}
	.empty-cart>img,.unlogin>img{
		display: block;
		margin: 40px auto;
	}
	.empty-cart>p,.unlogin>p{
		display: block;
		font-size: 20px;
		color: #959595;
	}
	.empty-cart>a,.unlogin>a{
		display: block;
		color: #fff;
		width: 90px;
		height: 35px;
		font-size: 20px;
		line-height: 35px;
		border-radius: 5px;
		background: #e0524b;
		margin: 15px auto;
	}
	/* 页脚 */
	.footer{
		position: fixed;
		bottom: 0;
		left: 0;
		height: 54px;
		width: 100%;
		flex-shrink: 0;
		background-color: #2e2e2e;
		display: flex;
	}
	.checkbox-all-wrapper{
		padding: 0 10px;
		height: 100%;
		font-size: 13px;
		line-height: 54px;
		color: #fff;
		flex-grow: 1;
	}
	.checkbox-all-wrapper>*{
		vertical-align: middle;
	}
	.checkbox-all-wrapper>i{
		float: left;
		margin: 18px 10px;
	}
	.checkbox-all-wrapper>span{
		float: left;
	}
	.checkbox-all-wrapper>.account-wrapper{
		line-height: 54px;
		color: #fff;
		float: right;
	}
	.checkbox-all-wrapper>.account-wrapper>h6{
		font-size: 16px;
		float: left;
		font-weight: normal;
	}
	.checkbox-all-wrapper>.account-wrapper>em.account{
		font-style: normal;
		color: #fff;
		float: left;
		font-size: 14px;
	}
	.btn-settlement{
		width: 100px;
		height: 100%;
		color: #fff;
		background-color: #e2231a;
	}
</style>