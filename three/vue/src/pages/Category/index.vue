<template>
	<!-- 组件的模板 -->
	<div class="page-wrapper">
		<div class="header">
			<LenovoNav></LenovoNav>
		</div>
		<div class="content">
			<div class="left hide-scroll-bar">
				<Left :list="mainList" :active-id="activeId" @toggle="toggleId"></Left>
			</div>
			<div class="right hide-scroll-bar">
				<Right :list="subList" :list2="subList2" :avatar="avatar"></Right>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
        // 组件的相关js代码
	import LenovoNav from "../../components/LenovoNav.vue";
	import Left from "./Left.vue";
	import Right from "./Right.vue";

        export default {
		name: "Category",
	        components: { LenovoNav, Left, Right },         // 当前组件使用了哪些其他组件
	        data() {                                                                // 当前组件正常运转的相关数据
		        return {
		                mainList: [],           // 一级分类
			        subList: [],             // 二级分类
			        subList2: [],           // 三级分类
			        activeId: 0
		        };
	        },
	        // 计算属性（根据data中的数据和计算属性算出新的计算属性）
	        // 计算属性是一种组件里面特殊的数据，计算属性是一个函数，且这个函数必须返回一个值
	        // 计算属性会在依赖的数据发生改变时，自动计算新值，触发组件更新
	        computed: {
		        avatar() {
		                let target = this.mainList.find( item => item.id === this.activeId);
		                return target ? target.avatar : "";
		        }
	        },
	        methods: {
		        _getData(fid) {
		                return this.$http({ method: "get", url: `/category/list/${ fid }` })
		        },
		        toggleId(id) { this.activeId = id; }
	        },
	        watch: {                                                                // 用于监听data、props、computed中的数据的变化
		        activeId: function(newValue, oldValue){
			        this.subList2 = [];
			        this._getData(newValue).then(data => this.subList = data);
                        },
		        subList: function(newValue, oldValue){
			        newValue.forEach(item => {
			                this._getData(item.id).then(data => this.subList2 = this.subList2.concat(data));
			        });
                        }
	        },
	        // 组件生命周期钩子函数
	        // 1.创建
	        beforeCreate() {
		        console.log("组件对象创建前调用");
	        },
	        created() {
		        console.log("组件对象创建完毕");
		        // 进入第三个then说明服务器成功返回我们想要的结果，没有任何物理错误和逻辑错误
		        this._getData(0).then(data => {
		                this.mainList = data;
		                this.activeId = data[0].id;
		        });
	        },
	        // 2.挂载
	        beforeMount() {
		        console.log("组件挂载前调用");
	        },
	        mounted() {
		        console.log("组件挂载完毕后调用");
	        },
	        // 3.更新
	        beforeUpdate() {
		        console.log("组件更新前调用");
	        },
	        updated() {
		        console.log("组件更新后调用");
	        },
	        // 4.销毁
	        beforeDestroy() {
		        console.log("组件销毁前调用");
	        },
	        destroyed() {
		        console.log("组件销毁后调用");
	        }
        };
</script>

<style scoped>
	/* 组件相关的html的样式*/
	.page-wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	/* 头部 */
	.header {
		height: 45px;
		flex-shrink: 0;
	}
	/* 内容 */
	.content {
		flex-grow: 1;
		display: flex;
		overflow: hidden;
		align-items: stretch;
		border-top: 1px solid #B0B0B0;
		border-bottom: 1px solid #b0b0b0;
	}
	.left {
		width: 96px;
		overflow: auto;
		flex-shrink: 0;
	}
	.right {
		flex-grow: 1;
		overflow: auto;
		border-left: 1px solid #b0b0b0;
		background-color: rgb(246,246,246);
		padding: 10px;
	}
</style>