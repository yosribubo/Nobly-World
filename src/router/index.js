import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ComingSoon from '../views/ComingSoon.vue'
import About from '../views/About.vue'
import DinoModal from '../views/DinoModal.vue'
import Detail from '../views/Detail.vue'
import Market from '../views/Market.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Nobly World', transition: 'fade-in-up' }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'Nobly World',
      transition: 'fade-in-up'
    }
  },
  {
    path: '/dino-modal',
    name: 'dino-modal',
    component: DinoModal,
    meta: {
      title: 'Nobly World',
      transition: 'fade-in-up'
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    meta: {
      title: 'Nobly World',
      transition: 'fade-in-up'
    }
  },
  {
    path: '/market',
    name: 'market',
    component: Market,
    meta: {
      title: 'Nobly World',
      transition: 'fade-in-up'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
