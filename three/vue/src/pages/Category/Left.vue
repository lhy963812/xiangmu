<template>
	<ul class="list">
		<li v-for="item in list"
		    :key="item.id"
		    :class="{ active:item.id === activeId }"
		    @click="$emit('toggle',item.id)">
			<span v-text="item.name"></span>
		</li>
	</ul>
</template>

<script type="text/ecmascript-6">

	export default {
	        // props用于当前组件对父组件公开属性，便于父组件向当前组件传东西
		props: [ "list", "activeId" ]
	};
</script>

<style scoped>
	ul.list>li {
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #333;
		font-size: 13px;
	}
	ul.list>li>span {
		height: 24px;
		border-radius: 12px;
		text-align: center;
		line-height: 24px;
	}
	ul.list>li.active>span{
		background-color: #fff;
	}
</style>