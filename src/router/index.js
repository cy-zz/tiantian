import { createRouter, createWebHistory } from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    movieRouter,
    cinemaRouter,
    mineRouter,
    {
      path : '/*',
      redirect : '/movie'
    }
  ]
})

export default router
