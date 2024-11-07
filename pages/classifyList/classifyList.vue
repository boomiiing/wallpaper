<template>
	<view class="classify_box">
		<view  class="pic_box">
			<view v-for="item in 11" class="pic_item">
				<image mode="aspectFill" src="../../common/images/preview2.jpg" ></image>
			</view>
		</view>
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

<style lang="scss" scoped>
	.classify_box{
		.pic_box{
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 5rpx;
			.pic_item{
				height: 440rpx;
					image{
							height: 100%;
							width:100%
				}
			}
		}
	}
</style>
