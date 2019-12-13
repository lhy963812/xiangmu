<template>
	<el-container class="page-wrapper">
		<el-aside width="200px">
			<el-menu
				text-color="#fff"
				background-color="#303133"
				active-text-color="#ffd04b"
				:default-active="activeTabName"
				@select="addTab">
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-setting"></i>
						<span>系统设定</span>
					</template>
					<el-menu-item index="password">
						<i class="el-icon-lock"></i>
						<span slot="title">密码修改</span>
					</el-menu-item>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title">
						<i class="el-icon-tickets"></i>
						<span>商品信息维护</span>
					</template>
					<el-menu-item index="category">
						<i class="el-icon-menu"></i>
						<span slot="title">商品分类</span>
					</el-menu-item>
					<el-menu-item index="product">
						<i class="el-icon-goods"></i>
						<span slot="title">商品信息</span>
					</el-menu-item>
				</el-submenu>
			</el-menu>
		</el-aside>
		<el-container>
			<el-header>
				<h1>Lenovo - 联想后台管理系统</h1>
			</el-header>
			<el-main>
				<el-tabs type="card" closable @tab-remove="removeTab" v-model="activeTabName">
					<el-tab-pane v-for="tab in tabs" :key="tab" :name="tab">
						<span slot="label">
							<i :class="tabsMap[tab].iconClass"></i>
							{{ tabsMap[tab].label }}
						</span>
						<!-- component用于动态创建is属性指定的组件 -->
						<component :is="tabsMap[tab].component"></component>
					</el-tab-pane>
				</el-tabs>
			</el-main>
			<el-footer height="40px">
				<p>&copy; 版权所有：Lenovo LiuHongYong</p>
			</el-footer>
		</el-container>
	</el-container>
</template>

<script type="text/ecmascript-6">
	import Welcome from "./Welcome";
	import Password from "./Password";
	import Category from "./Category";
	import Product from "./Product";

	export default {
		data() {
		        return {
                                isLogin: this.$cookies.get("token") ? true : false,
		                activeTabName: "welcome",       // 当前处于激活状态的选项卡name属性值
			        // 当前显示的选项卡
			        tabs: [ "welcome" ],
			        // 所有的可能的会显示的选项卡
			        tabsMap: {
					welcome: {
					        label: "欢迎",
						iconClass: "el-icon-chat-line-round",
						component: Welcome
					},
				        password: {
					        label: "密码修改",
					        iconClass: "el-icon-lock",
					        component: Password
				        },
				        product: {
					        label: "商品信息",
					        iconClass: "el-icon-menu",
					        component: Product
				        },
				        category: {
					        label: "商品分类",
					        iconClass: "el-icon-goods",
					        component: Category
				        }
			        }
		        };
		},
		methods: {
		        addTab(index) {
		                if(this.tabs.indexOf(index) === -1) this.tabs.push(index);
		                this.activeTabName = index;
		        },
			removeTab(name) {
		                let i = this.tabs.indexOf(name);
		                this.tabs.splice( i, 1);
		                if(this.activeTabName === name) {
		                        this.activeTabName = this.tabs.length > 0 ? this.tabs[0] : "";
		                }
			}
		},
		created() {
                        if(this.isLogin) {
                                return
                        } else {
                                this.$router.push("./login");
                        }
		}
	};
</script>

<style scoped>
	.page-wrapper {
		width: 100%;
		height: 100%;
	}
	.el-aside {
		background-color: #333;
	}
	.el-menu {
		border-right: none;
	}
	.el-header {
		display: flex;
		align-items: center;
		background-color: #222;
	}
	.el-header h1 {
		font-size: 28px;
		color: #000;
		text-shadow: -2px -2px 0 #ffd04b;
	}
	.el-footer {
		font-size: 13px;
	}
</style>