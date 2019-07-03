import Vue from 'vue'
import Router from 'vue-router'
import Personal from '../components/Personal'
import Portfolio from '../components/Portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'personal',
      path: '/',
      components: {
        main: Personal
      }
    },
    {
      name: 'portfolio',
      path: '/portfolio',
      components: {
        main: Portfolio
      }
    },
  ]
})