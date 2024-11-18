	const system = uni.getSystemInfoSync()
	export const statusBarHeight = () => system.statusBarHeight || 0
	const {
		top,
		height
	} = (()=>{
		if(uni.getMenuButtonBoundingClientRect){
		 	return uni.getMenuButtonBoundingClientRect()
		}else{
			return {
				top:0,
				height:40
			}
		}
	})()
	export const searchBarHeight = () => height + (top - statusBarHeight()) * 2
	export const statusFillHeight = () => searchBarHeight() + statusBarHeight()