import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import NotFound from './pages/NotFound.vue' // Keeping original not-found or creating new one

const routes = [
  { path: '/', component: Home },
  { path: '/:pathMatch(.*)*', component: Home } // Fallback to Home or 404
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
