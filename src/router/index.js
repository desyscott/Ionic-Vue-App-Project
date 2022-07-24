import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesScreen from '@/screens/MemoriesScreen.vue'

const routes= [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path:"/memories",
    name:"memories",
    component:MemoriesScreen
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),//enables going back and forward navigation
  routes
})

export default router;
