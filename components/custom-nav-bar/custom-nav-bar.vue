<template>
	<view class="nav_bar">
		<view class="nav_main_box">
			<view class="status_box" :style="{'height':statusBarHeight + 'px'}">

			</view>
			<view class="nav_search" :style="{'height':searchBarHeight + 'px'}">
				<view class="nav_title">
					标题
				</view>
				<view class="bav_input" @click="openSearch">
					<uni-icons type="search" size="20"></uni-icons>
					<view class="placehold">
						搜索
					</view>
				</view>
			</view>
		</view>
		<view class="status_fill" :style="{'height':statusFillHeight + 'px'}">
			
		</view>
		<uni-popup ref="popup">
			<view class="popup-content">
				<text class="text">popup 内容</text>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const popup = ref(null)
	const openSearch = () => {
		popup.value.open('right')
	}
	const system = uni.getSystemInfoSync()
	const statusBarHeight = ref(system.statusBarHeight)
	const {
		top,
		height,
		bottom
	} = uni.getMenuButtonBoundingClientRect()
	const searchBarHeight = ref(height + (top - statusBarHeight.value) * 2)
	const statusFillHeight = searchBarHeight.value + statusBarHeight.value
</script>

<style lang="scss" scoped>
	.nav_bar {
		.nav_main_box {
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 10;
			background:
				linear-gradient(to bottom, rgba(0, 0, 0, 0), #fff 400%),
				linear-gradient(to right, #B4F8C8, #70D6FF);
			padding: 0 20rpx;
			.status_box {
				// height: 70rpx;
			}

			.nav_search {
				display: flex;
				align-items: center;

				.nav_title {
					font-size: 40rpx;
					font-weight: 800;
					margin-right: 30rpx;
				}

				.bav_input {
					background: rgba(255, 255, 255, .7);
					height: 55rpx;
					width: 150px;
					border-radius: 30rpx;
					border: 1px solid rgba(255, 255, 255, .5);
					padding-left: 20rpx;
					display: flex;
					align-items: center;

					.placehold {
						color: #ccc;
						font-size: 35rpx;
						margin-left: 10rpx;
					}
				}
			}

		}
		.status_fill{
			width: 100%
		}
		uni-popup {
			background: #fff;
			width: 100%;

			.popup-content {
				background: #fff;
				width: 100%;
			}
		}
	}
</style>