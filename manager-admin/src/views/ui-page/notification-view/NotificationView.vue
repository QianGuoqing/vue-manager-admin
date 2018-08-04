<template>
  <div class="notification-view">
    <a-card title="通知提醒框" class="card-wrapper">
      <a-button @click="() => openNotificationWithIcon('success')">Success</a-button>
      <a-button @click="() => openNotificationWithIcon('info')">Info</a-button>
      <a-button @click="() => openNotificationWithIcon('warning')">Warning</a-button>
      <a-button @click="() => openNotificationWithIcon('error')">Error</a-button>
    </a-card>
    <a-card title="通知提醒框" class="card-wrapper">
      <a-select v-model="selected" :style="{ width: '120px', marginRight: '10px' }">
        <a-select-option v-for="val in options" :key="val" :value="val">{{val}}</a-select-option>
      </a-select>
      <a-button type="primary" @click="openNotification">Open the notification box</a-button>
    </a-card>
  </div>
</template>

<script>
  const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']
  export default {
    name: 'NotificationView',
    data () {
      return {
        options,
        selected: 'topRight',
      }
    },
    watch: {
      selected(val) {
        this.$notification.config({
          placement: val,
        });
      }
    },
    methods: {
      openNotificationWithIcon (type) {
        this.$notification[type]({
          message: 'Notification Title',
          description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
      },
      openNotification (val) {
        this.$notification.open({
          message: 'Notification Title',
          description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
      },
    }
  }
</script>

<style lang="stylus" scoped>
  .notification-view
    margin 10px
    .card-wrapper
      margin-bottom 15px
</style>