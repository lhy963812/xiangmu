<template>
	<div class="len-count">
		<span @click="decrease" class="decrease" :class="{ disabled: count === 1 }">-</span>
		<span v-text="count" class="count"></span>
		<span @click="increase" class="increase" :class="{ disabled: count === 5  }">+</span>
	</div>
</template>

<script type="text/ecmascript-6">

        export default {
                props: [ 'count'],
	        methods: {
                        decrease() { if(this.count > 1) this.$emit("decrease"); },
		        increase() { if(this.count < 5) this.$emit("increase"); }
	        }
        };
</script>

<style scoped>
	.len-count{

	}
	.len-count>span{
		width: 26px;height: 20px;text-align: center;
		line-height: 24px;font-size: 13px;
		display: inline-block;color: #333;
	}
	.len-count>span.count{

	}
	.len-count>span.disabled{
		color: rgba(0,0,0,0.3);
	}
</style>