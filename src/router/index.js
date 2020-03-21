import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Nav from '@/personal/nav'

Vue.use(Router)

export default new Router({
  routes: [{ path: '/',name: 'nav',component: Nav}]
})
