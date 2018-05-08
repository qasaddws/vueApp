// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import flexible from 'lib-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import ElementUI from 'element-ui'   //引入组件库
import ElementThemes from 'element-ui/lib/theme-chalk/index.css' //引入样式
import axios from 'axios'
import App from './App'                                                                                                                                                                                                                                                                              
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.use(ElementUI)  //使用插件</font>

Vue.prototype.$http=axios
// axios.get('static/json/list.json')
//     .then(function(response){
//         console.log(response.data)
//     })
//     .catch(function(error){
//         console.log(error)
//     })

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
