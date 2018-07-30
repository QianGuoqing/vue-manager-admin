<template>
  <div id="app">
    <a-row class="side-row">
      <a-col class="side-col" :span="4">
        <manager-sidebar></manager-sidebar>
      </a-col>
      <a-col class="main-col" :span="20">
        <manager-header></manager-header>
        <router-view></router-view>
        <manager-footer></manager-footer>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import ManagerHeader from './components/manager-header/ManagerHeader.vue'
  import ManagerFooter from './components/manager-footer/ManagerFooter.vue'
  import ManagerSidebar from './components/manager-sidebar/ManagerSidebar.vue'
  export default {
    name: 'App',
    components: {
      ManagerHeader,
      ManagerFooter,
      ManagerSidebar
    }
  }
</script>

<style lang="stylus">
  html, body, #app
    height 100%
    .side-row
      height 100%
      .side-col
        height 100%
      .main-col
        background-color #f1f3f5
        height 100%
</style>
