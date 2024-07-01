import { ref } from 'vue'
import { defineStore } from 'pinia'
import { routes as staticRoutes } from '@/router'
import { type RouteMeta, type RouteRecordRaw } from 'vue-router'
import { UserRoleEnum } from '@/constants/user'
import { useUserStore } from '@/store/user'

export const hasPermission = (meta: RouteMeta | undefined, role: UserRoleEnum) => {
  if (meta?.dynamic || meta?.roles === UserRoleEnum.GUEST) {
    return true
  }
  // 如果目标路由没有设置roles，则默认为admin和normal都可以访问
  const roles: UserRoleEnum[] = meta?.roles || [UserRoleEnum.ADMIN, UserRoleEnum.NORMAL]
  if (roles.includes(role)) {
    return true
  }
  return false
}

const filterAuthRoutesRecursive = (routes: RouteRecordRaw[], role: UserRoleEnum) => {
  return routes.filter((route) => {
    if (hasPermission(route.meta, role) && route.meta?.hideInNavbar !== true) {
      if (route.children) {
        route.children = filterAuthRoutesRecursive(route.children, role)
      }
      return true
    }
    return false
  })
}

export const useRouteStore = defineStore('route', () => {
  /**
   * 显示在导航栏的路由
   * @type {RouteRecordRaw[]}
   */
  const routes = ref<RouteRecordRaw[]>()

  const userStore = useUserStore()

  const initRoutes = () => {
    routes.value = filterAuthRoutesRecursive(staticRoutes, userStore.role!)
  }

  return {
    routes,
    initRoutes,
  }
})
