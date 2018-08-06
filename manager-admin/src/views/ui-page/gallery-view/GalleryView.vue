<template>
  <div class="gallery-view">
    <a-row :gutter="10">
      <a-col class="gutter-row" :span="6">
        <a-card class="card-wrapper" hoverable v-for="image in imgList[0]" :key="image">
          <img :src="image" slot="cover" alt="">
          <a-card-meta
            title="Europe Street beat">
            <template slot="description">www.instagram.com</template>
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <a-card class="card-wrapper" hoverable v-for="image in imgList[1]" :key="image">
          <img :src="image" slot="cover" alt="">
          <a-card-meta
            title="Europe Street beat">
            <template slot="description">www.instagram.com</template>
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <a-card class="card-wrapper" hoverable v-for="image in imgList[2]" :key="image">
          <img :src="image" slot="cover" alt="">
          <a-card-meta
            title="Europe Street beat">
            <template slot="description">www.instagram.com</template>
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <a-card class="card-wrapper" hoverable v-for="image in imgList[3]" :key="image">
          <img :src="image" slot="cover" alt="">
          <a-card-meta
            title="Europe Street beat">
            <template slot="description">www.instagram.com</template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    name: 'GalleryView',
    data() {
      return {
        imgList: [
          ['../../../../static/gallery/1.png', '../../../../static/gallery/2.png', '../../../../static/gallery/3.png', '../../../../static/gallery/4.png', '../../../../static/gallery/5.png'],
          ['../../../../static/gallery/6.png', '../../../../static/gallery/7.png', '../../../../static/gallery/8.png', '../../../../static/gallery/9.png', '../../../../static/gallery/10.png'],
          ['../../../../static/gallery/11.png', '../../../../static/gallery/12.png', '../../../../static/gallery/13.png', '../../../../static/gallery/14.png', '../../../../static/gallery/15.png'],
          ['../../../../static/gallery/16.png', '../../../../static/gallery/17.png', '../../../../static/gallery/18.png', '../../../../static/gallery/19.png', '../../../../static/gallery/20.png'],
          ['../../../../static/gallery/21.png', '../../../../static/gallery/22.png', '../../../../static/gallery/23.png', '../../../../static/gallery/24.png', '../../../../static/gallery/25.png']
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .gallery-view
    .card-wrapper
      margin 10px 0
</style>