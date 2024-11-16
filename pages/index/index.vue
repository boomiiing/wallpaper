<template>
	<view class="homeLayout backColor">
		<custom-nav-bar></custom-nav-bar>
		<view class="banner">
			<swiper :indicator-dots="true" indicator-color="rgba(255,255,255,0.5)" indicator-active-color="red" :autoplay="true" :interval="3000" :duration="1000" circular>
				<swiper-item >
					<image src="../../common/images/banner1.jpg"></image>
				</swiper-item>
				<swiper-item >
					<image src="../../common/images/banner2.jpg"></image>
				</swiper-item>
				<swiper-item >
					<image src="../../common/images/banner3.jpg"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="tabBar">
			<view class="tabTitle">
				<uni-icons type="sound-filled" size="25" color="$uni-icon-color"></uni-icons>
				<text>公告</text>
			</view>
			<view class="tabSwiper">
				<swiper autoplay="true" :interval="3000" :duration="1000" vertical circular>
					<swiper-item>
							<view class="swiper_text">HELLOOOOOOOOOOOOOOOOOOOO</view>
							<view class="swiper_next">
								<uni-icons type="right" size="20" color="#000"></uni-icons>
							</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper_text">AAAAAAAAAAAAAAAAAAAAAAAAA</view>
						<view class="swiper_next">
							<uni-icons type="right" size="20" color="#000"></uni-icons>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="selected_box">
			<commen-title>
				<template #title>
					今日推荐
				</template>
				<template #infos>
					<view class="infos">
						<uni-icons type="calendar-filled" size="20"></uni-icons>
						<uni-dateformat :date="Date.now()" format="dd号" class="dateFont"></uni-dateformat>
					</view>
				</template>
			</commen-title>
			<view class="scroll_box">
			<scroll-view  scroll-x="true">
					<view class="view_item">
							<image src="../../common/images/preview1.jpg" mode=""></image>
					</view>		
					<view class="view_item">
							<image src="../../common/images/preview1.jpg" mode=""></image>
					</view>	
					<view class="view_item">
							<image src="../../common/images/preview1.jpg" mode=""></image>
					</view>	
					<view class="view_item">
							<image src="../../common/images/preview1.jpg" mode=""></image>
					</view>	
					<view class="view_item">
							<image src="../../common/images/preview1.jpg" mode=""></image>
					</view>	
					<view class="view_item">
							<image src="../../common/images/preview1.jpg" mode=""></image>
					</view>	
					<view class="view_item">
							<image src="../../common/images/preview1.jpg" mode=""></image>
					</view>	
			</scroll-view>
			</view>
		</view>
		<view class="theme">
			<commen-title>
				<template #title>
					专题精选
				</template>
				<template #infos>
					<view style="font-size: 30rpx;color:#ccc">
					 More+
					</view>
				</template>
			</commen-title>
			<view class="main_theme_box">
				<theme-box v-for="item in 8" :imageSrc="'../../common/images/preview_small.webp'"></theme-box>
				<theme-box  :imageSrc="'../../common/images/preview_small.webp'" :isMore="true"></theme-box>
			</view>
		</view>
	</view>
</template>

<script>
	import CommenTitle from '../../components/commen-title/commen-title.vue'
	import ThemeBox from '../../components/theme-box/theme-box.vue'
	import customNavBarVue from '../../components/custom-nav-bar/custom-nav-bar.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang='scss' scoped>
.homeLayout{
	.banner{
		width: 750rpx;
		height:340rpx;
		swiper{
			width: 100%;
			height:100%;
			&-item{
				padding: 0 20rpx;
				image{
					width: 100%;
					height:100%;
					border-radius: 15rpx;
				}
			}
		}
	}
	.tabBar{
		width: calc(100% - 40rpx);
		height: 80rpx;
		margin: 20rpx;
		padding: 20rpx;
		background-color: #f3f3f3;
		border-radius: 40rpx;
		display: flex;
		align-items: center;
		.tabTitle{
			height: 100%;
			width: 130rpx;
			display: flex;
			align-items: center;
			color:$uni-icon-color;
		}
		.tabSwiper{
			height: 100%;
			width: calc(100% - 130rpx);
			swiper{
				height: 100%;
				swiper-item{
						display: flex;
						height: 100%;
						.swiper_text{
							width: calc(100% - 35rpx);
							overflow: hidden;
							text-overflow: ellipsis;
							text-wrap: nowrap;
						}
						.swiper_next{
							
						}
				}
			}
		}
	}
	.selected_box{
		margin: 30rpx;
		.infos{
			:deep(){
				.uni-icons{
					color:$uni-icon-color!important
				}
			}
			.dateFont{
				font-size: 35rpx;
				color:$uni-icon-color!important
			}
		}
		.scroll_box{
			width:690rpx;
			margin: 20rpx 0;
			scroll-view {
				width: 100%;
				white-space: nowrap;
				.view_item{
					height: 430rpx;
					width: 200rpx;
					display: inline-block;
					margin-right: 15rpx;
					image{
						height: 100%;
						width: 100%;
						border-radius: 15rpx;
					}
				}
					
				.view_item:last-child{
					margin-right: 0rpx;
				}
			}
		}
	}
	.theme{
		margin: 30rpx;
		.main_theme_box{
			margin: 30rpx 0;
			display: grid;
			grid-template-columns:1fr 1fr 1fr;
			gap:20rpx
		}
	}
}
</style>
