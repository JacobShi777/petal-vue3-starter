import { createWebHashHistory, createRouter } from 'vue-router'

import ManageLayout from '@/layouts/manage/index.vue'

const routes = [
  {
    path: '/',
    component: ManageLayout,
    children: [
      {
        path: '',
        component: () => import('@/views/dashboard/index.vue'),
      },
    ],
  },
  {
    path: '/user',
    component: ManageLayout,
    children: [
      {
        path: '',
        component: () => import('@/views/user/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
