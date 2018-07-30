<template>
  <div class="manager-header">
    <div class="info-banner">
      <div class="name-date">
        <div class="name">你好 <span class="username">{{ username }}</span></div>
        <div class="time">{{ currentTime }}</div>
      </div>
      <div class="weather-exit">
        <div class="weather">
          <img :src="weatherData.dayPictureUrl" class="weather-icon" alt="">
          <div class="w-weather">{{ weatherData.weather }}</div>
          <div class="temperature">{{ weatherData.temperature }}</div>
        </div>
        <div class="exit">
          <a-button type="danger">退出</a-button>
        </div>
      </div>
    </div>
    <div class="selection-banner">
      <a-tag color="#108ee9" closable>首页</a-tag>
    </div>
  </div>
</template>

<script>
  import jsonp from 'jsonp'
  import { formatTime } from '../../common/js/utils.js'
  export default {
    name: 'ManagerHeader',
    created() {
      let city = '成都'
      jsonp(
        'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2', { param: 'callback' }, (err, data) => {
          data = data.results[0]
          this.weatherData = data.weather_data[0]
          console.log(this.weatherData)
        }
      )
    },
    mounted() {
      setInterval(() => {
        this.currentTime = formatTime(new Date())
      }, 1000)
    },
    data() {
      return {
        username: '苏问',
        currentTime: formatTime(new Date()),
        weatherData: {}
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .manager-header
    .info-banner
      display flex
      justify-content space-between
      align-items center
      margin 10px
      padding 15px 0
      border-bottom 1px solid #1890ff
      .name-date
        display flex
        align-items center
        font-size 14px
        .name
          .username
            font-weight bold
        .time
          margin-left 20px
      .weather-exit
        font-size 14px
        display flex
        align-items center
        .weather
          display flex
          align-items center 
          margin-right 20px
          .weather-icon
            width 25px
            margin-right 10px
          .w-weather
            margin-right 10px
    .selection-banner
      margin 15px 10px
</style>