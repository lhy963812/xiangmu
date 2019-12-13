<template>
	<div class="right-wrapper">
		<img :src="avatar" alt="" class="avatar">
		<ul class="list">
			<li v-for="item in list" :key="item.id">
				<h3 v-text="item.name"></h3>
				<ul class="list2 clearfix">
					<li v-for="item2 in list2.filter(temp => temp.fid === item.id)" :key="item2.id">
						<router-link :to="`/list/${ item2.id }`">
							<img :src="item2.avatar" alt="">
							<span v-text="item2.name"></span>
						</router-link>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script type="text/ecmascript-6">

	export default {
	        props: [ "avatar", "list", "list2" ]
	};
</script>

<style scoped>
	img.avatar{
		width: 100%;
		border-radius: 6px;
	}
	ul.list{
		margin: 10px 0;
	}
	ul.list>li{
		background-color: white;
		margin-bottom: 10px;
	}
	ul.list>li>h3{
		font-size: 13px;
		color: #333;
		font-weight: bold;
	}
	/* 三级分类样式 */
	ul.list2{
		margin-right: -6px;
	}
	ul.list2>li{
		box-sizing: border-box;
		display: flex;
		float: left;
		width: 33.333333%;
		padding-right: 6px;
		margin-top: 10px;
	}
	ul.list2>li>a{
		flex-grow: 1;
		text-align: center;
	}
	ul.list2>li>a>img{
		width: 100%;
	}
	ul.list2>li>a>span{
		font-size: 11px;
		color: #666;
	}
</style>