<template>
	<view class="main_box backColor">
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
						<uni-icons type="download-filled" size="20"  ></uni-icons>
						<text>我的下载</text>
					</view>
					<view class="more">
						<text>10</text>
						<uni-icons type="right" size="20"  ></uni-icons>
					</view>
				</view>
				<view class="item">
					<view class="title">
						<uni-icons type="star-filled" size="20"  ></uni-icons>
						<text>我的收藏</text>
					</view>
					<view class="more">
						<text>10</text>
						<uni-icons type="right" size="20"  ></uni-icons>
					</view>
				</view>
				<view class="item">
					<view class="title">
						<uni-icons type="chatboxes-filled" size="20"  ></uni-icons>
						<text>联系客服</text>
					</view>
					<view class="more">
						<!-- #ifdef MP -->
							<button type="primary" open-type="contact" size="mini" class="contant">联系客服</button>
						<!-- #endif -->
						<!-- #ifndef MP -->
							<button type="primary" open-type="contact" size="mini" class="contant" @click="callNumber">拨打电话</button>
						<!-- #endif -->
						<uni-icons type="right" size="20"  ></uni-icons>
					</view>
				</view>
			</view>
			<view class="recording question">
				<view class="item">
					<view class="title">
						<uni-icons type="download-filled" size="20"  ></uni-icons>
						<text>订阅更新</text>
					</view>
					<view class="more">
						<uni-icons type="right" size="20"  ></uni-icons>
					</view>
				</view>
				<view class="item">
					<view class="title">
						<uni-icons type="star-filled" size="20"  ></uni-icons>
						<text>常见问题</text>
					</view>
					<view class="more">
						<uni-icons type="right" size="20"  ></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	let callNumber = function(){
		uni.makePhoneCall({
			phoneNumber: '114' 
		});
	}
</script>

<style lang="scss" scoped>
	.main_box{
		height: 100%;
		.user_info{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding-top: 100rpx;
			.avatar{
				image{
					width: 200rpx;
					height: 200rpx;
					border-radius: 50%;
				}
			}
			.ip_num{
				font-size: 40rpx;
				color: #000;
			}
			.located_name{
				font-size: 40rpx;
				color: #000;
			}
		}
		.operate{
			width: 100%;
			padding: 20rpx;
			.recording{
				box-shadow: 0px 0px 25px 10px rgba(100, 100, 111, 0.2);
				border-radius: 15rpx;
				background-color: #fff;
				.item{
					height: 80rpx;
					width: 100%;
					padding: 0 20rpx;
					font-size: 40rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-bottom: 1px solid #ccc;
					position: relative;
					&:last-child{
						border: none;
					}
					.contant{
						position: absolute;
						top: 0;
						right: 0;
						width:100%;
						height:80rpx;
						opacity: 0;
					}
					.title{
						text{
							margin-left: 20rpx;
							font-size: 35rpx;
						}
						:deep(){
						   .uni-icons{
								color:$uni-icon-color!important
							}
						}
					}
					.more{
						text{
							font-size: 35rpx;
							color:#ccc
						}
						:deep(){
						   .uni-icons{
								color:$uni-icon-color!important
							}
						}
					}
				}
			}
			.question{
				margin-top: 80rpx;
			}
		}

	}
</style>
