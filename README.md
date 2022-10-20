# dev-campus-uni-app
## 项目目录架构
	-dev-campus-uni-app
		--common 公共区
			---api_route 后端接口路由封装
			---method 用于封装公共方法
		--components 组件库
			---request_http http请求组件
			---uni_modules 组件模块
				----uview-ui uView前端UI开发框架组件
				...
		--config 配置区
			---baseApi 配置后端域名
		--pages 页面区
			---campus 校园
			---index 首页
			---login 登录
			---me 我
			---news 消息
			---page_code 页面代码
				----page-campus 校园页面下的功能页面（如跳转到某个页面）
				----page-common 公共页面（其他页面会用该页面时到则写到此目录下）
				----page-index 首页页面下的功能页面（如跳转到某个页面）
				----page-me 我页面下的功能页面（如跳转到某个页面）
				----page-news 消息页面下的功能页面（如跳转到某个页面）
		--static 静态文件存放（图片、logo、icon等）
		--utils 工具目录
		
## 组件框架
### uni-ui 是基于uni-app的、全端兼容的、高性能UI框架
#### 当前可使用版本 1.4.22（2022-09-19) 
#### 引入时间 2022-9-30
#### 可按使用引入单个组件（官方提供）
#### 引入后将其放入components/uni_modules目录下
代码示例地址 ：https://ext.dcloud.net.cn/plugin?id=4941

组件演示地址：https://hellouniapp.dcloud.net.cn

组件文档地址：https://uniapp.dcloud.io/component/uniui/uni-ui

### uVieui 是基于uni-app的 多平台快速开发的UI框架

#### 当前使用版本 2.0.34 （2022-09-25)
#### 引入时间 2022-10-19
[官方使用文档:https://www.uviewui.com/](https://www.uviewui.com/components/intro.html)

![您可以通过微信扫码，查看最佳的演示效果。](https://uviewui.com/common/weixin_mini_qrcode.png)

## Git开发规范
### type 说明 (必填)
feat: 添加新特性（新功能）

fix: 修复bug

docs: 仅仅修改了文档

style: 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑

refactor: 代码重构，没有加新功能或者修复bug

perf: 改变代码提升性能

test: 增加或修改测试用例

build: 修改了影响构建过程或者外部依赖的文件，如修改了pom中某个jar包的版本，npm依赖等

ci: 修改了CI/CD配置文件

chore: 其他不影响只改变某文件的位置

revert: 回退到之前某个commit

clean: 清除废弃多余无用代码文件的提交


### scope 说明 (必填)

scope用于说明 commit 影响的范围，如，具体某个/某几个文件/文件夹。如果一次修改影响了整个项目，可以使用*代替。

最后提交commit 格式： 比如添加新功能 添加文件是 user文件： 

git commit -m "feat(user):添加某某功能代码"
