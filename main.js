
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
// 导包
// http接口请求包
import http from '@/components/request_http/'
// 引入uView主JS库
import uView from '@/components/uni_modules/uview-ui'


// 全局挂载 
// requests请求框架
Vue.prototype.$http = http
// 引入uView主JS库
Vue.use(uView)

Vue.config.productionTip = false

App.mpType = 'app'


const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
