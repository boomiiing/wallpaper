<template>
	<view class="preview">
		<swiper circular>
			<swiper-item v-for="item in 5">
					<image src="../../common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang='scss' scoped>
	.preview{
		height: 100vh;
		width:100%;
		swiper{
			height: 100%;
			width:100%;
			swiper-item{
				height: 100%;
				width:100%;
				image{
					height: 100%;
					width:100%;
				}
			}
		}
	}
</style>
