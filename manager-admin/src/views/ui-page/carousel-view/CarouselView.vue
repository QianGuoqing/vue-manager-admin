<template>
  <div class="carousel-view">
    <a-card title="基础轮播" class="card-wrapper">
      <a-carousel>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </a-carousel>
    </a-card>
    <a-card title="自动轮播" class="card-wrapper">
      <a-carousel autoplay>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </a-carousel>
    </a-card>
    <a-card title="分页轮播" class="card-wrapper">
      <a-carousel arrows dotsClass="slick-dots slick-thumb">
        <a slot="customPaging" slot-scope="props">
          <img :src="getImgUrl(props.i)" />
        </a>
        <div v-for="item in 4" :key="item">
          <img :src="baseUrl+'abstract0'+item+'.jpg'" />
        </div>
      </a-carousel>
    </a-card>
  </div>
</template>

<script>
  const baseUrl = 'https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/'
  export default {
    name: 'CarouselView',
    data() {
      return {
        baseUrl: baseUrl
      }
    },
    methods: {
      getImgUrl(i) {
        return `${baseUrl}abstract0${i + 1}.jpg`
      }
    }
  }
</script>

<style lang="stylus" scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide  h3 {
  color: #fff;
}

.ant-carousel >>> .slick-dots {
  height: auto
}
.ant-carousel >>> .slick-slide img{
    border: 5px solid #FFF;
    display: block;
    margin: auto;
    max-width: 80%;
}
.ant-carousel >>> .slick-thumb {
  bottom: -45px;
}
.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img{
    filter: grayscale(0%);
}
  .carousel-view
    margin 10px
    .card-wrapper
      margin-bottom 15px
</style>