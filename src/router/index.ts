import { type RouteRecordRaw, createWebHashHistory, createRouter } from 'vue-router'
import { UserRoleEnum } from '@/constants/user'
import ManageLayout from '@/layouts/manage/index.vue'
import { initPerssion } from './permission'

export const routes: RouteRecordRaw[] = [
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      hideInNavbar: true,
    },
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      roles: UserRoleEnum.GUEST,
      hideInNavbar: true,
      hideInTab: true,
    },
  },
  {
    path: '/',
    component: ManageLayout,
    meta: {
      title: 'dashboard',
      elevateChildren: true,
    },
    children: [
      {
        path: '',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: 'dashboard',
          svgIcon: 'dashboard',
          svgSize: '20px',
        },
      },
    ],
  },
  {
    path: '/element-plus',
    component: ManageLayout,
    meta: {
      title: 'ep',
      svgIcon: 'element-plus',
    },
    children: [
      {
        path: 'table',
        component: () => import('@/views/element-plus/table/index.vue'),
        meta: {
          title: 'ep.table',
        },
      },
      {
        path: 'form',
        component: () => import('@/views/element-plus/form/index.vue'),
        name: 'ep-form',
        meta: {
          title: 'ep.form',
          keepAlive: true,
        },
      },
      {
        path: 'tag',
        component: () => import('@/views/element-plus/tag/index.vue'),
        meta: {
          title: 'ep.tag',
          roles: [UserRoleEnum.NORMAL],
        },
      },
    ],
  },
  {
    path: '/menu',
    component: ManageLayout,
    meta: {
      title: 'menu',
      svgIcon: 'menu',
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/menu/menu1/index.vue'),
        meta: {
          title: 'menu.menu1',
        },
      },
      {
        path: 'menu2',
        component: () => import('@/views/menu/menu2/index.vue'),
        meta: {
          title: 'menu.menu2',
        },
        children: [
          {
            path: 'menu2-1',
            component: () => import('@/views/menu/menu2/menu21/index.vue'),
            meta: {
              title: 'menu.menu2.menu2-1',
            },
          },
          {
            path: 'menu2-2',
            component: () => import('@/views/menu/menu2/menu22/index.vue'),
            meta: {
              title: 'menu.menu2.menu2-2',
            },
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

initPerssion(router)

export default router
