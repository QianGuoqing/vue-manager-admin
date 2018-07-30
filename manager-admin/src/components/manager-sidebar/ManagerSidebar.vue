<template>
  <div class="manager-sidebar">
    <div class="logo">
      <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="">
      <div class="title">Vue Manager</div>
    </div>
    <div class="menu-list">
      <a-menu
        mode="vertical"
        theme="dark">
        <a-menu-item key="/home">
          <span><a-icon type="home"/>首页</span>
        </a-menu-item>
        <a-sub-menu key="/ui">
          <span slot="title"><span><a-icon type="switcher"/>UI</span></span>
          <a-menu-item key="/ui/button">按钮</a-menu-item>
          <a-menu-item key="/ui/modals">弹框</a-menu-item>
          <a-menu-item key="/ui/loading">Loading</a-menu-item>
          <a-menu-item key="/ui/notification">通知提醒</a-menu-item>
          <a-menu-item key="/ui/messages">全局Message</a-menu-item>
          <a-menu-item key="/ui/tabs">Tab页签</a-menu-item>
          <a-menu-item key="/ui/gallery">图片画廊</a-menu-item>
          <a-menu-item key="/ui/carousel">轮播图</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="/form">
          <span slot="title"><span><a-icon type="form"/>表单</span></span>
          <a-menu-item key="/form/login">登陆</a-menu-item>
          <a-menu-item key="/form/register">注册</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="/table">
          <span slot="title"><span><a-icon type="table"/>表格</span></span>
          <a-menu-item key="/table/basic">基础表格</a-menu-item>
          <a-menu-item key="/table/high">高级表格</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="/rich">
          <span><a-icon type="file-markdown"/>富文本</span>
        </a-menu-item>
        <a-menu-item key="/city">
          <span><a-icon type="global"/>城市管理</span>
        </a-menu-item>
        <a-sub-menu key="/order">
          <span slot="title"><span><a-icon type="solution"/>订单管理</span></span>
          <a-menu-item key="/order/detail">订单详情</a-menu-item>
          <a-menu-item key="/order/finish">结束订单</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="/user">
          <span><a-icon type="user-add"/>员工管理</span>
        </a-menu-item>
        <a-menu-item key="/bikeMap">
          <span><a-icon type="car"/>车辆地图</span>
        </a-menu-item>
        <a-sub-menu key="/charts">
          <span slot="title"><span><a-icon type="bar-chart"/>图标</span></span>
          <a-menu-item key="/charts/bar">柱形图</a-menu-item>
          <a-menu-item key="/charts/pie">饼图</a-menu-item>
          <a-menu-item key="/charts/line">折线图</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="/permission">
          <span><a-icon type="fork"/>权限设置</span>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
  import menuListData from '../../common/js/menu.js'
  export default {
    name: 'ManagerSidebar',
    data() {
      return {
        menuList: [],
        randomKey: Math.random()
      }
    },
    created() {
      this.menuList = menuListData
      console.log(this.menuList)
    }
  }
</script>

<style lang="stylus" scoped>
  .manager-sidebar >>> .ant-row
    height 100%
  .manager-sidebar >>> .ant-col-4
    height 100%

  .manager-sidebar
    height 100%
    background-color #001529
    .logo
      background-color #002140
      padding 25px 15px
      display flex
      align-items center
      img
        width 35px
        height 35px
      .title
        color #fff
        margin-left 10px
</style>