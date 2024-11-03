<template>
	<view class="main_box">
		<view class="user_info">
			<view class="avatar">
				<image src="../../static/logo.png" mode=""></image>
			</view>
			<view class="ip_num">
				192.168.20.14
			</view>
			<view class="located_name">
				属地名称：厦门
			</view>
		</view>
		<view class="operate">
			<view class="recording">
				<view class="item">
					<view class="title">
						<uni-icons type="download-filled" size="20" color="#28b389"></uni-icons>
						<text>我的下载</text>
					</view>
					<view class="more">
						<uni-icons type="right" size="20" color="#28b389"></uni-icons>
					</view>
				</view>
				<view class="item">
					<view class="title">
						<uni-icons type="star-filled" size="20" color="#28b389"></uni-icons>
						<text>我的收藏</text>
					</view>
					<view class="more">
						<uni-icons type="right" size="20" color="#28b389"></uni-icons>
					</view>
				</view>
				<view class="item">
					<view class="title">
						<uni-icons type="chatboxes-filled" size="20" color="#28b389"></uni-icons>
						<text>联系客服</text>
					</view>
					<view class="more">
						<uni-icons type="right" size="20" color="#28b389"></uni-icons>
					</view>
				</view>
			</view>
			<view class="question">
				
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.main_box{
		.user_info{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin:30rpx;
			.avatar{
				image{
					width: 200rpx;
					height: 200rpx;
					border-radius: 50%;
				}
			}
			.ip_num{
				font-size: 40rpx;
				color: #ccc;
			}
			.located_name{
				font-size: 40rpx;
				color: #ccc;
			}
		}
		.operate{
			width: 100%;
			padding: 20rpx;
			.recording{
				box-shadow: 0px 0px 25px 10px rgba(100, 100, 111, 0.2);
				border-radius: 15rpx;
				.recording:last-child{
					border: none;
				}
				.item{
					height: 80rpx;
					width: 100%;
					padding: 0 20rpx;
					font-size: 40rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-bottom: 1px solid #ccc;
					.title{
						uni-icons{
							margin-right: 20rpx;
						}
					}
				}
			}
		}

	}
</style>
