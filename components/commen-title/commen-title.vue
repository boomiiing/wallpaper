<template>
	<view class="main_box">
		<view>
			<slot name="title" class="title"></slot>
		</view>
		<view>
			<slot name="infos" class="infos"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name:"commen-title",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.main_box{
		height: 50rpx;
		font-size: 40rpx;
		font-weight: 800;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.infos{
			.uni-icons{
				color:$uni-icon-color!important
			}
		}
	}
</style>