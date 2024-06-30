// https://router.vuejs.org/zh/guide/advanced/meta.html
// 这段可以直接添加到你的任何 `.ts` 文件中，例如 `router.ts`
// 也可以添加到一个 `.d.ts` 文件中。确保这个文件包含在
// 项目的 `tsconfig.json` 中的 "file" 字段内。
import type { Theme } from '@/store/theme'
import 'vue-router'
import { UserRoleEnum } from '@/constants/user'

// 为了确保这个文件被当作一个模块，添加至少一个 `export` 声明
export {}

type RouteMetaRoles = Exclude<UserRoleEnum, UserRoleEnum.GUEST>[] | UserRoleEnum.GUEST

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 根据角色的权限进行动态加载
     *  - 当 roles 为空时，需要登录后才能访问
     *  - 当 roles 为 UserRoleEnum.GUEST 时，不需要登录即可访问
     *  - 当 roles 为 Exclude<UserRoleEnum, UserRoleEnum.GUEST>[] 时，会根据用户的角色进行动态加载
     * @type {RouteMetaRoles}
     */
    roles?: RouteMetaRoles
    /**
     * 指定当前页面的主题
     * @type {Theme}
     */
    theme?: Theme
    /**
     * 是否动态路由(由后端返回路由表)
     * 由后端返回的动态路由不需要再次校验权限
     * @type {boolean}
     */
    dynamic?: boolean
    /**
     * 路由标题
     * @type {string}
     */
    title?: string
    /**
     * 是否在导航栏隐藏
     * @type {boolean}
     */
    hideInNavbar?: boolean
  }
}
