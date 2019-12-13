<template>
	<i class="len-check-box" :class="{ checked: checked }" @click="$emit('toggle')"></i>
</template>

<script type="text/ecmascript-6">

        export default {
		props: [ "checked"]
        };
</script>

<style scoped>
	i.len-check-box {
		width: 18px;
		height: 18px;
		background: url(cart_uncheck.png) no-repeat;
		background-size: 100% 100%;
		display: inline-block;
		flex-shrink: 0;
	}
	i.len-check-box.checked {
		background: url(cart_checkbox.png);
		width: 18px;
		height: 18px;
		background-size: 100% 100%;
		display: inline-block;
	}
</style>