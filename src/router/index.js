import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ComingSoon from '../views/ComingSoon.vue'
import Details from '../views/Details.vue'
import DinoModal from '../views/DinoModal.vue'
import MyDinos from '../views/MyDinos.vue'
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
    path: '/details',
    name: 'details',
    component: Details,
    meta: {
      title: 'Nobly World',
      transition: 'fade-in-up'
    }
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: ComingSoon,
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
    path: '/my-dinos',
    name: 'my-dinos',
    component: MyDinos,
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
