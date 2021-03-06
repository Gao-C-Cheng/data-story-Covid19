import Vue from 'vue'
import Router from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import HomeViews from '@/views/HomeViews'

Vue.use(Buefy)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeViews',
      component: HomeViews
    }
  ]
})
