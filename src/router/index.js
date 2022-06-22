import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import HeroLists from "../views/HeroLists.vue"
import HeroDetails from "../views/HeroDetails.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: HeroLists
    },
    {
      path: '/hero/:id',
      name: 'heroDetails',
      component: HeroDetails
    }
  ]
})

export default router