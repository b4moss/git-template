import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import SidePanel from '../views/side_panel/SidePanel.vue'
import Option from '../components/Option.vue'

const router = createRouter({
  // createWebHashHistoryに変更
  // history: createWebHashHistory((import.meta as any).meta.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/side-panel',
      name: 'sidePanel',
      component: SidePanel
    },
    {
      path: '/option',
      name: 'option',
      component: Option
    }
  ]
})

export default router