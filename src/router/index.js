// index.js
import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import test from '../components/test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})

export default router
