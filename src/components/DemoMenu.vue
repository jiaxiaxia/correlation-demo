<template>
  <el-menu @select="onMenuSelected" default-active="autodoc.js">
    <el-sub-menu v-for="subMenu in menuData" :key="subMenu.index" :index="subMenu.index">
      <template #title>
        <span>{{ subMenu.title }}</span>
      </template>
      <el-menu-item
        v-for="menuItem in subMenu.children"
        :key="menuItem.index"
        :index="menuItem.index"
      >{{ menuItem.title }}</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script setup>
const menuData = [
  {
    index:'base',
    title:'基础样式',
    children:[{
      index:'dashborder.js',
      title:'虚线框'
    },
    {
      index:'solidborder.js',
      title:'实线框',
    }]
  },
  {
    index:'autodoc',
    title:'AutoDoc',
    children:[{
      index:'autodoc.js',
      title:'勾稽关系',
      slots:['right-top'],
    }]
  }
]
function onMenuSelected() {
  
}
</script>
<style scoped lang="less">
</style>    