<template>
	<view class="preview" >
		<swiper circular @click="maskShow">
			<swiper-item v-for="item in 5">
					<image src="../../common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="mask_box" v-show="showFlag">
			<view class="goback">
				<uni-icons  type="left" size="30" ></uni-icons>
			</view>
			<view class="count">
				6/9
			</view>
			<view class="detail_time">
				09:54
			</view>
			<view class="date_time">
				11月12日
			</view>
			<view class="foot_box">
				<view class="info">
					<view class="item">
						<view class="">
							<uni-icons type="info" size="25" ></uni-icons>
						</view>
						<view class="">
							信息
						</view>
					</view>
					<view class="item">
						<view class="">
							<uni-icons type="star" size="25" ></uni-icons>
						</view>
						<view class="">
							5分
						</view>
					</view>
					<view class="item">
						<view class="">
							<uni-icons type="download" size="25" ></uni-icons>
						</view>
						<view class="">
							下载
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue';
 let showFlag = ref(true)
 const maskShow = ()=>{
	 console.log('asd')
	 showFlag.value = !showFlag.value
 }
</script>

<style lang='scss' scoped>
	.preview{
		height: 100vh;
		width:100%;
		position: relative;
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
		.mask_box{
			.goback{
				position: absolute;
				top: 20rpx;
				left: 20rpx;
				:deep(){
					.uni-icons{
						color:#fff !important
					}
				}
			}
			.count{
				text-align: center;
				position: absolute;
				top: 120rpx;
				left: 0;
				right:0;
				margin: auto;
				width:fit-content;
				/* height:50rpx; */
				background:rgba(0, 0, 0, .3);
				padding: 3rpx 5rpx;
				border-radius: 30rpx;
				backdrop-filter: blur(10rpx);
				color:#fff !important
			}
			.detail_time{
				width: 100%;
				font-size: 130rpx;
				font-weight: 100;
				text-align: center;
				position: absolute;
				top: 180rpx;
				left: 0;
				color:#fff !important
			}
			.date_time{
				width: 100%;
				text-align: center;
				position: absolute;
				top: 350rpx;
				left: 20rpx;
				color:#fff !important
			}
			.foot_box{
				width: 100%;
				display: flex;
				justify-content:center;
				align-items: center;
				position: absolute;
				bottom: 200rpx;
				left: 0;
				.info{
					width: 60%;
					height: 100rpx;
					border-radius: 50rpx;
					background-color: #fff;
					display: flex;
					justify-content: space-around;
					align-items: center;
					.item{
						display: flex;
						flex-direction: column;
						align-items: center;
						font-size: 20rpx;
					}
				}
			}
		}
	}
</style>
