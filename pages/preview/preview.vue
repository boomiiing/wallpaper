<template>
	<view class="preview" >
		<swiper circular @click="maskShow">
			<swiper-item v-for="item in 5">
					<image src="../../common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="mask_box" v-show="showFlag">
			<view class="goback" @click="goBack" :style="{'top':statusBarHeight() + 'px'}">
				<uni-icons  type="left" size="30" ></uni-icons>
			</view>
			<view class="count">
				6/9
			</view>
			<view class="detail_time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date_time">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="foot_box">
				<view class="info">
					<view class="item" @click="toggle('bottom')"> 
						<view class="">
							<uni-icons type="info" size="25" ></uni-icons>
						</view>
						<view class="">
							信息
						</view>
					</view>
					<view class="item" @click="openCountPopup">
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
		<uni-popup ref="popupBox" class="infoPopup">
			<view class="info">
				<view class="title">
					壁纸信息
					<view class="close" @click="closeInfo">
						<uni-icons type="closeempty"></uni-icons>
					</view>
				</view>
				<scroll-view class="main_info" scroll-y>
					<view class="item">
						<view class="label">
							壁纸ID：
						</view>
						<view class="value">
							1233312312312331
						</view>
					</view>
					<view class="item">
						<view class="label">
							分类：
						</view>
						<view class="value">
							明星美女
						</view>
					</view>
					<view class="item">
						<view class="label">
							发布者：
						</view>
						<view class="value">
							咸虾米
						</view>
					</view>
					<view class="item">
						<view class="label">
							评分：
						</view>
						<view class="value">
								<uni-rate v-model="rateValue" readonly="true" />
						</view>
					</view>
					<view class="item">
						<view class="label">
							摘要：
						</view>
						<view class="value" >
							阿三大苏打大啊啊啊啊啊啊啊实打实大大啊阿三大苏打大啊啊啊啊啊啊啊实打实大大啊阿三大苏打大啊啊啊啊啊啊啊实打实大大啊阿三大苏打大啊啊啊啊啊啊啊实打实大大啊
						</view>
					</view>
					<view class="item">
						<view class="label">
							标签：
						</view>
						<view class="value">
							<view class="element" v-for="item in 5">
								标签名
							</view>
						</view>
					</view>
					<view class="copyright">
						免责声明：本公众号发布的所有内容，包括但不限于文字、图片、音频、视频、图表、标志、标识、广告、商标、商号、域名、软件、程序等，除特别标明外，均来源于网络或用户投稿，版权归原作者或原出处所有。我们致力于保护原作者版权，若涉及版权问题，请及时联系我们进行处理。
					</view>
				</scroll-view>
			</view>
		</uni-popup>
		<uni-popup ref="setCount" class="countPopup">
			<view class="main_box">
				<view class="title">
					<view></view>
					<view class="name">壁纸信息</view>
					<view class="close" @click="closeCount">
						<uni-icons type="closeempty"></uni-icons>
					</view>
				</view>
				<view class="star">
					<uni-rate v-model="rateCount" margin="5" size="30"></uni-rate>
					<view class="number">
						{{rateCount}}分
					</view>
				</view>
				<button @click="submitScore" type="default" plain="true" size="mini">确认评分</button>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>true
	import {ref} from 'vue';
	import {statusBarHeight} from '@/utils/system.js'
 let showFlag = ref(true)
 const maskShow = ()=>{
	 showFlag.value = !showFlag.value
 }
 let popupBox = ref(null)
 const toggle = ()=>{
		popupBox.value.open('bottom')
 }
 const closeInfo = ()=>{
	 popupBox.value.close()
 }
 let rateValue = ref(3)
 const setCount = ref(null)
 const rateCount = ref(3)
 const openCountPopup = ()=>{
	 setCount.value.open()
 }
 function closeCount(){
	 setCount.value.close()
 }
 function submitScore(){
	 
 }
 const goBack = ()=>{
	 uni.navigateBack()
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
				/* top: 10rpx; */
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
		.infoPopup{
			.info{
				background-color: #fff;
				border-radius: 20rpx 20rpx 0 0;
				padding: 30rpx;
				.title{
					text-align: center;
					color:#ccc;
					position: relative;
					.close{
						position: absolute;
						right:0;
						top:0;
						cursor: pointer;
					}
				}
				.main_info{
					min-height: 20vh;
					max-height: 50vh;
					.item{
						display: flex;
						width: 100%;
						margin: 30rpx 0rpx;
						.label{
							width:150rpx;
							text-align: right;
							color:#ccc
						}
						.value{
							flex:1;
							.element{
								display: inline-block;
								border:1px solid #094;
								border-radius: 25rpx;
								padding:2rpx 15rpx;
								margin-right: 10rpx;
							}
						}
					}
					.copyright{
						background: #f7f7f7;
						padding:20rpx;
						border-radius: 20rpx;
					}
				}
			}
		}
		.countPopup{
			.main_box{
				background: #fff;
				width: 70vw;
				height: 300rpx;
				border-radius: 30rpx;
				padding:0 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				.title{
					display: flex;
					justify-content: space-between;
					.name{
						color:#ccc;
					}
					.close{
						cursor: pointer;
					}
				}
				.star{
					display: flex;
					justify-content: center;
					align-items: center;
					.number{
						font-size: 38rpx;
						color:#ffca3e;
						padding-bottom:3rpx ;
					}
				}
				
			}
		}
	}
</style>
