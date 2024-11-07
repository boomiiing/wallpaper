<template>
	<view class="main_box">
		<navigator url="/pages/classifyList/classifyList" v-if='!isMore'>
			<image :src="imageSrc"></image>
			<view class="refreshDate">
				5天前更新
			</view>
			<view class="classic">
				<text>你好</text>
			</view>
		</navigator>
		<navigator url="/pages/classify/classify" open-type="reLaunch" v-else>
			<image :src="imageSrc"></image>
			<view class="more">
				<uni-icons type="more-filled" size="40" color="#fff"></uni-icons>
				<text>你好</text>
			</view>
		</navigator>
	</view>
</template>

<script setup name='theme-box'>
	defineProps({
		imageSrc:{
			type:String,
		},
		isMore:{
			type:Boolean,
			default:false
		}
	})
</script>

<style lang="scss" scoped>
	.main_box{
		background-color: #888;
		height:350rpx;
		border-radius: 15rpx;
		overflow: hidden;
		navigator{
			height:100%;
			width: 100%;
			position: relative;
			.refreshDate{
				position: absolute;
				top:0;
				height: 40rpx;
				width: 60%;
				background-color: orange;
				font-size: 22rpx;
				text-align: center;
				line-height: 40rpx;
				border-radius: 0 0 15rpx 0;
			}
			.classic{
				position: absolute;
				bottom:0;
				width: 100%;
				height: 80rpx;
				background:	rgba(0,0,0,0.2);
				backdrop-filter: blur(20rpx);
				text{
					position: absolute;
					bottom:0;
					width: 100%;
					height: 80rpx;
					font-size: 35rpx;
					font-weight: 600;
					color:white;
					text-align: center;
					line-height: 80rpx;
				}
			}
			.more{
				position: absolute;
				bottom:0;
				width: 100%;
				height:100%;
				background:	rgba(0,0,0,0.2);
				backdrop-filter: blur(20rpx);
				font-size: 40rpx;
				color: #fff;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			image{
				height:100%;
				width: 100%;
			}
		}

	}

</style>