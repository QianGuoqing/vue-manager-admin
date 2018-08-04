<template>
  <div class="loading-view">
    <a-card title="加载组件" class="card-wrapper">
      <a-spin size="small" />
      <a-spin class="loading-spin" />
      <a-spin size="large" />
      <a-spin class="loading-spin">
        <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
      </a-spin>
    </a-card>
    <a-card title="内容遮罩" class="card-wrapper">
      <a-spin>
        <a-alert message="正在加载的模块" type="info" />
      </a-spin>
      <a-spin style="margin-top: 20px" tip="loading">
        <a-alert message="正在加载的模块正在加载的模块正在加载的模块正在加载的模块正在加载的模块正在加载的模块正在加载的模块正在加载的模块正在加载的模块正在加载的模块正在加载的模块正在加载的模块正在加载的模块正在加载的模块正在加载的模块正在加载的模块正在加载的模块正在加载的模块正在加载的模块" type="info" />
      </a-spin>
    </a-card>
  </div>
</template>

<script>
  export default {
    name: 'LoadingView'
  }
</script>

<style lang="stylus" scoped>
  .loading-view
    margin 10px
    .card-wrapper
      margin-bottom 15px
      .loading-spin
        margin 0 20px
</style>