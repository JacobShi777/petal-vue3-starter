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
    },
  },
  {
    path: '/',
    component: ManageLayout,
    children: [
      {
        path: '',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '首页',
        },
      },
    ],
  },
  {
    path: '/element-plus',
    component: ManageLayout,
    meta: {
      title: 'Element Plus',
    },
    children: [
      {
        path: 'table',
        component: () => import('@/views/element-plus/table/index.vue'),
        meta: {
          title: '表格',
        },
      },
      {
        path: 'form',
        component: () => import('@/views/element-plus/form/index.vue'),
        meta: {
          title: '表单',
        },
      },
      {
        path: 'tag',
        component: () => import('@/views/element-plus/tag/index.vue'),
        meta: {
          title: '标签',
          roles: [UserRoleEnum.NORMAL],
        },
      },
    ],
  },
  {
    path: '/menu',
    component: ManageLayout,
    meta: {
      title: '多级路由',
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/menu/menu1/index.vue'),
        meta: {
          title: '菜单1',
        },
      },
      {
        path: 'menu2',
        component: () => import('@/views/menu/menu2/index.vue'),
        meta: {
          title: '菜单2',
        },
        children: [
          {
            path: 'menu2-1',
            component: () => import('@/views/menu/menu2/menu21/index.vue'),
            meta: {
              title: '菜单2-1',
            },
          },
          {
            path: 'menu2-2',
            component: () => import('@/views/menu/menu2/menu22/index.vue'),
            meta: {
              title: '菜单2-2',
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
