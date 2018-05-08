import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
import Rest from '../assets/css/reset.css'
import Information from '../components/information.vue'
import Drama from '../components/drama.vue'
import Movies from '../components/movies.vue'
import Topic from '../components/topic.vue'

// import Mobile from '../components/Mobile.vue'
// import Computer from '../components/Computer.vue'
// import Pag from '../components/Pag.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/movies',
      name: 'Movies',
      component: Movies,
    }, {
      path: '/drama',
      name: 'Drama',
      component: Drama
    }, {
      path: '/information',
      name: 'Information',
      component: Information
    }, {
      path: '/topic',
      name: 'Topic',
      component: Topic
    }
  ]
})
