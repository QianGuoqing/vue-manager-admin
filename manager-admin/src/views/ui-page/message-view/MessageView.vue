<template>
  <div class="message-view">
    <a-card title="全局提示框" class="card-wrapper">
      <a-button @click="success">Success</a-button>
      <a-button @click="error">Error</a-button>
      <a-button @click="warning">Warning</a-button>
    </a-card>
  </div>
</template>

<script>
  export default {
    name: 'MessageView',
    methods: {
      success () {
        this.$message.success('This is a message of success');
      },
      error () {
        this.$message.error('This is a message of error');
      },
      warning () {
        this.$message.warning('This is message of warning');
      },
    }
  }
</script>

<style lang="stylus" scoped>
  .message-view
    margin 10px
    .card-wrapper
      margin-bottom 15px
</style>