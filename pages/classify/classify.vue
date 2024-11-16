<template>
	<view class="main_classify_box backColor">
		<theme-box v-for="item in 14" :imageSrc="'../../common/images/preview_small.webp'"></theme-box>
	</view>
</template>

<script setup>
	import ThemeBox from '../../components/theme-box/theme-box.vue';
</script>

<style lang="scss" scoped>
	.main_classify_box{
			padding: 20rpx;
			display: grid;
			grid-template-columns:1fr 1fr 1fr;
			gap:20rpx
	}
</style>
