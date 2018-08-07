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
          <span @click="toHome"><a-icon type="home"/>首页</span>
        </a-menu-item>
        <a-sub-menu key="/ui">
          <span slot="title"><span><a-icon type="switcher"/>UI</span></span>
          <a-menu-item key="/ui/button"><span @click="toButton">按钮</span></a-menu-item>
          <a-menu-item key="/ui/modals"><span @click="toModal">弹框</span></a-menu-item>
          <a-menu-item key="/ui/loading"><span @click="toLoading">Loading</span></a-menu-item>
          <a-menu-item key="/ui/notification"><span @click="toNotification">通知提醒</span></a-menu-item>
          <a-menu-item key="/ui/messages"><span @click="toMessage">全局Message</span></a-menu-item>
          <a-menu-item key="/ui/tabs"><span @click="toTab">Tab页签</span></a-menu-item>
          <a-menu-item key="/ui/gallery"><span @click="toGallery">图片画廊</span></a-menu-item>
          <a-menu-item key="/ui/carousel"><span @click="toCarousel">轮播图</span></a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="/form">
          <span slot="title"><span><a-icon type="form"/>表单</span></span>
          <a-menu-item key="/form/login"><span @click="toLogin">登陆</span></a-menu-item>
          <a-menu-item key="/form/register"><span @click="toRegister">注册</span></a-menu-item>
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
    },
    methods: {
      toHome() {
        this.$router.push({
          path: '/home'
        })
      },
      toButton() {
        this.$router.push({
          path: '/ui/button'
        })
      },
      toModal() {
        this.$router.push({
          path: '/ui/modal'
        })
      },
      toLoading() {
        this.$router.push({
          path: '/ui/loading'
        })
      },
      toNotification() {
        this.$router.push({
          path: '/ui/notification'
        })
      },
      toMessage() {
        this.$router.push({
          path: '/ui/message'
        })
      },
      toTab() {
        this.$router.push({
          path: '/ui/tab'
        })
      },
      toGallery() {
        this.$router.push({
          path: '/ui/gallery'
        })
      },
      toCarousel() {
        this.$router.push({
          path: '/ui/carousel'
        })
      },
      toLogin() {
        this.$router.push({
          path: '/form/login'
        })
      },
      toRegister() {
        this.$router.push({
          path: '/form/register'
        })
      }
    },
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