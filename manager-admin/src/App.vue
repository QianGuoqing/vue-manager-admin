<template>
  <div id="app">
    <a-row>
      <a-col :span="4">
        <manager-sidebar></manager-sidebar>
      </a-col>
      <a-col :span="20">
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

<style>

</style>
