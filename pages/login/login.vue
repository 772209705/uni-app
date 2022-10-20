<template>
	<view class="background">
		<image class="bg-img" src="../../static/test.png"></image>
			<view class="dlogin">
				<view class="wxdlogin">
					<view class="phonetext" @click="">
						手机号登录
					</view>
				</view>
				<!-- #ifdef APP-PLUS || MP-ALIPAY -->
				<view class="wxdlogin">
					<view class="wxtext" @click="handleThirdLoginApp()">
						微信登录
					</view>
				</view>
			</view>
		<!-- #endif -->
		
		</view>
	</view>
</template>

<script>
	import { PHONE_LOGIN, WEIXIN_LOGIN } from '../../common/api_route/url';

	export default {
		props: {
			back: {
				type: Boolean,
				default: false,
			
			},
		},
		data() {
			return {
				providerList: []
			}
		},
		onLoad(option) {
				 
				},
		mounted(){


		},
		methods: {
			handleThirdLoginApp() {
				console.log("App微信拉起授权")
				var that = this
				uni.getProvider({
					service: 'oauth',
					success: function(res) {
						console.log(res.provider);
						//微信weixin 登录
						if (~res.provider.indexOf('weixin')) {
							uni.login({
								provider: 'weixin',
								success: function(loginRes) {
									// console.log("App微信获取用户信息成功", loginRes);
									console.log("获取unionID：",loginRes.authResult.unionid)
									// 获取用户信息
								uni.getUserInfo({
										 success:(infoRes)=> {
											 console.log("信息：",infoRes)
											let obj = {
												unionid:infoRes.userInfo.unionId,
												sex:0,
												nickName:infoRes.userInfo.nickName,
												images:infoRes.userInfo.avatarUrl,
											}
											that.loginEvent(obj)//请求登录接口方法 
										 }
									});
								},
								fail: (res) => {
									console.log("App微信获取用户信息失败", res);
									uni.showToast({
										title: '登录失败',
										icon: 'none'
									});
								},
								
							})
						}
					}
				});
			},
			// 微信登录逻辑
			loginEvent(data){
				this.$http.post(WEIXIN_LOGIN,data)
				                           .then(res=>{
											   // 1.成功就将token写入本地缓存
												console.log(res.data.data.token)
												
											   // 2.返回上一页并提示登录成功
												console.log(res.data)
												// 返回上一页
												if(this.back){
													uni.navigateBack({
														delta: 1
													});
												}
												uni.showToast({
													title: '登录成功',
													icon: 'none'
												});
				                               // 失败则提示登录失败，请重新登录
				                           }) 
				
			},
			// 手机号登录 TODO 待办
			phoneLogin(){
				const data = {
					phone: "",
					code: ""
				}
				this.$http.post(PHONE_LOGIN,data)
				
			},
			
			
		},
	}
</script>

<style>
	
	.bg-img{
	    position: fixed;
	    width: 100%;
	    height: 100%;
	    top: 0;
	    left: 0;
	    z-index: -1;
	}
	.dlogin{
		margin-top: 60vh;
	}
	.wxdlogin{
		display: flex; 
		justify-content: center;
		align-items: center;
		
		
	}
	.wxtext{
		margin-top: 50rpx;
		width: 399rpx;
		height: 70rpx;
		color: #000000;
		text-align: center;
		line-height: 70rpx;
		border-radius: 11rpx;
		background: #e0e0e0;
		box-shadow:  31px 31px 63px #a4a4a4,
		             -31px -31px 63px #ffffff;
	}
	.phonetext{
		width: 399rpx;
		height: 70rpx;
		color: #000000;
		text-align: center;
		line-height: 70rpx;
		border-radius: 11rpx;
		background: #e0e0e0;
		box-shadow:  31px 31px 63px #a4a4a4,
		             -31px -31px 63px #ffffff;
					 	
	}
</style>
