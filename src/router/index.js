import { createRouter, createWebHashHistory } from 'vue-router'
import HomeIndex from '@/homeIndex.vue'
import AdsTest from '@/components/adsTest.vue'
import FavAnime from '@/views/About/fav/favAnime.vue'
import LoadingPage from '@/loadingPage.vue'
import LandingPage from '@/landingPage.vue'
import InfoMe from '@/views/About/infoMe.vue'

const router = createRouter({
  // history:
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home', // default route
      name: 'homeIndex',
      component: HomeIndex,
    },
    {
      path: '/', // default route
      name: 'landingPage',
      component: LandingPage,
    },
    {
      path: '/test', // default route
      name: 'adsTest',
      component: AdsTest,
    },
    {
      path: '/load', // default route
      name: 'loadingPage',
      component: LoadingPage,
    },
    {
      path: '/fav/anime',
      name: 'favAnime',
      component: FavAnime,
    },
    {
      path: '/about/me',
      name: 'infoMe',
      component: InfoMe,
    },
  ],
})

export default router
