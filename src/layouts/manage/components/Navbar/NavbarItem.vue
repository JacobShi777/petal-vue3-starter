<script lang="ts" setup>
import { computed } from 'vue'
import { type RouteRecordRaw, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import path from 'path-browserify'

const router = useRouter()
const { t } = useI18n()

const props = withDefaults(
  defineProps<{
    level?: number
    routes: RouteRecordRaw[]
    prePath: string
  }>(),
  {
    level: 1,
    prePath: '',
  },
)

const processedRoutes = computed(() => {
  return props.routes.map((route) => {
    if (route.meta?.elevateChildren) {
      if (!route.children || route.children.length !== 1) {
        throw new Error(
          'route with elevateChildren true must have exactly one child (当route的elevateChildren为true时, 必须有且仅有一个子元素)',
        )
      }
      return {
        ...route.children![0],
        path: route.path + route.children![0].path,
      }
    } else {
      return route
    }
  })
})

const hasChild = (route: RouteRecordRaw) => {
  return route.children && route.children.length > 0
}

const handleMenuItem = (e: any) => {
  router.push(e.index)
}
</script>

<template>
  <template v-for="(route, index) in processedRoutes" :key="index">
    <el-menu-item v-if="!hasChild(route)" :index="path.join(props.prePath, route.path)" @click="handleMenuItem">
      <SvgIcon
        v-if="route.meta?.svgIcon"
        :name="route.meta?.svgIcon"
        :size="route.meta?.svgSize || '22px'"
        class="navbar-icon"
      ></SvgIcon>
      <template #title>
        <span>{{ route.meta?.title && t(route.meta?.title) }}</span>
      </template>
    </el-menu-item>
    <el-sub-menu v-else :index="path.join(props.prePath, route.path)">
      <template #title>
        <SvgIcon
          v-if="route.meta?.svgIcon"
          :name="route.meta?.svgIcon"
          :size="route.meta?.svgSize || '22px'"
          class="navbar-icon"
        ></SvgIcon>
        <span>{{ route.meta?.title && t(route.meta?.title) }}</span>
      </template>
      <NavbarItem :level="props.level + 1" :routes="route.children!" :prePath="path.join(props.prePath, route.path)" />
    </el-sub-menu>
  </template>
</template>

<style lang="scss" scoped>
.navbar-icon {
  margin-right: 8px;
}
</style>
