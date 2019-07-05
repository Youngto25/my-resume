import Vue from 'vue'
import Router from 'vue-router'
import Personal from '../components/Personal'
import Portfolio from '../components/Portfolio'
import Skill from '../components/Skills'
import Contact from '../components/Contact'

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
    {
      name: 'skill',
      path: '/skill',
      components: {
        main: Skill
      }
    },
    {
      name: 'contact',
      path: '/contact',
      components: {
        main: Contact
      }
    },
  ]
})