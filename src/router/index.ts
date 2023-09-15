import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InstallDocView from '@/views/InstallDocView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/documentation/installation',
      name: 'install-doc',
      component: InstallDocView
    },
  ]
})

export default router
