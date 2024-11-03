<template>
	<view class="main_box">
		<theme-box v-for="item in 8"></theme-box>
	</view>
</template>

<script setup>
	import ThemeBox from '../../components/theme-box/theme-box.vue';
</script>

<style lang="scss" scoped>
	.main_box{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap: 15px;
	}
</style>
