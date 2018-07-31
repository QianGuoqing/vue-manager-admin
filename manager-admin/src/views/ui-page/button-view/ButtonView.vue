<template>
  <div class="button-view">
    <a-card title="基础按钮" class="card-wrapper">
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="danger">Danger</a-button>
      <a-button disabled>Disabled</a-button>
    </a-card>
    <a-card title="图形按钮" class="card-wrapper">
      <a-button icon="plus">添加</a-button>
      <a-button icon="edit">编辑</a-button>
      <a-button icon="delete">删除</a-button>
      <a-button shape="circle" icon="search" />
      <a-button type="primary" icon="search">搜索</a-button>
      <a-button type="primary" icon="download">下载</a-button>
    </a-card>
    <a-card title="Loading按钮" class="card-wrapper">
      <a-button type="primary" :loading="loading">确定</a-button>
      <a-button type="primary" shape="circle" :loading="loading" />
      <a-button :loading="loading">点击加载</a-button>
      <a-button shape="circle" :loading="loading" />
      <a-button @click="stopLoading" type="primary">{{ closeText }}</a-button>
    </a-card>
    <a-card title="按钮组" class="card-wrapper">
      <a-button-group>
        <a-button type="primary">
          <a-icon type="left" />前进
        </a-button>
        <a-button type="primary">
          后退<a-icon type="right" />
        </a-button>
      </a-button-group>
    </a-card>
    <a-card title="按钮尺寸" class="card-wrapper">
      <a-radio-group defaultValue="default" @change="changeButtonSize" v-model="bSize">
        <a-radio value="small">Small</a-radio>
        <a-radio value="default">Default</a-radio>
        <a-radio value="large">Large</a-radio>
      </a-radio-group>
      <a-button :size="buttonSize" type="primary">Primary</a-button>
      <a-button :size="buttonSize">Default</a-button>
      <a-button :size="buttonSize" type="dashed">Dashed</a-button>
      <a-button :size="buttonSize" type="danger">Danger</a-button>
      <a-button :size="buttonSize" disabled>Disabled</a-button>
    </a-card>
  </div>
</template>

<script>
  export default {
    name: 'ButtonView',
    data() {
      return {
        loading: true,
        closeText: '关闭',
        buttonSize: 'default',
        bSize: 'default'
      }
    },
    methods: {
      stopLoading() {
        this.loading = !this.loading
        this.closeText = this.closeText === '关闭' ? '启动' : '关闭'
      },
      changeButtonSize() {
        this.buttonSize = this.bSize
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .button-view
    margin 10px
    .card-wrapper
      margin-bottom 15px
</style>