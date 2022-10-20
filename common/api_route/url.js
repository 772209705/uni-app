/**
 *  URL文件
 *  请求接口先往此文件，追加URL常量封装
 * 	方便后续调用，管理，修改
 * 
 * 	命名格式： 名称全部大写字母，多个单词使用下划线隔开
 */

/** 微信授权登录 */
export const WEIXIN_LOGIN = 'campusapp/weixin/login'

/** 手机号登录 */
export const PHONE_LOGIN = 'campusapp/phone/login'

/**  获取验证码 */
export const GET_PHONE_CODE = 'campusapp/phone/code'

/** 退出登录 */
export const LOGOUT = 'campusapp/logout'
