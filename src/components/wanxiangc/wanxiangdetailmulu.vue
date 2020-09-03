<template>
  <div>
    <div class="swiper-slide padding swiper-slide-next">
      <div class="item" 
        v-for="item in mulumessage"
        v-bind:key = "item.id"
      >
        <div class="des3">
          <img :src= item.video_cover />
          <div class="tip_content">
            <div class="tip_title">第{{item.episode}}课{{item.title}}</div>
            <div class="tip_user">{{item.titlelanguage}}</div>
          </div>
        </div>
        <!-- <div class="des3">
          <img src="https://cdn.yixi.tv/almond/15951311995544.jpg?imageView2/1/w/280/h/160" alt />
          <div class="tip_content">
            <div class="tip_title">第 1 课：屈原：时间的焦虑</div>
            <div class="tip_user">为什么说屈原是站在神话时代和理性时代门槛上的人？</div>
          </div>
        </div>
        <div class="des3">
          <img src="https://cdn.yixi.tv/almond/15951313715546.jpg?imageView2/1/w/280/h/160" alt />
          <div class="tip_content">
            <div class="tip_title">第 2 课：曹丕：欢乐深处的哀伤</div>
            <div class="tip_user">身为王子，为什么曹丕总能在极乐之时感受到鲜明的哀伤？</div>
          </div>
        </div>
        <div class="des3">
          <img src="https://cdn.yixi.tv/almond/15951309448167.jpg?imageView2/1/w/280/h/160" alt />
          <div class="tip_content">
            <div class="tip_title">第 3 课：陶渊明：生死的辨证</div>
            <div class="tip_user">陶渊明真的是一个不关世事，悠游田园的诗人吗？</div>
          </div>
        </div>
        <div class="des3">
          <img src="https://cdn.yixi.tv/almond/15951309731366.jpg?imageView2/1/w/280/h/160" alt />
          <div class="tip_content">
            <div class="tip_title">第 4 课：杜甫：生活的慰藉</div>
            <div class="tip_user">战乱，流离，妻离子散，杜甫的诗篇中为何还有振奋之意？</div>
          </div>
        </div>
        <div class="des3">
          <img src="https://cdn.yixi.tv/almond/15951328345247.jpg?imageView2/1/w/280/h/160" alt />
          <div class="tip_content">
            <div class="tip_title">第 5 课：欧阳修：一生未损是天真</div>
            <div class="tip_user">当欧阳修获得文名、仕途、友情的圆满成就，还会觉得虚无吗？</div>
          </div>
        </div>
        <div class="des3">
          <img src="https://cdn.yixi.tv/almond/15951312572686.jpg?imageView2/1/w/280/h/160" alt />
          <div class="tip_content">
            <div class="tip_title">第 6 课：文天祥：忽悟大光明</div>
            <div class="tip_user">《过零丁洋》之后，文天祥的下一个生命阶段是什么？</div>
          </div>
        </div>
        <div class="des3">
          <img src="https://cdn.yixi.tv/almond/15951326794165.jpg?imageView2/1/w/280/h/160" alt />
          <div class="tip_content">
            <div class="tip_title">第 7 课：吴梅村：大时代里的个人命运</div>
            <div class="tip_user">在明末的文人与名妓之间，为什么会产生超越世俗的爱情？</div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props:['id'],
  data(){
    return {
      mulumessage : '',
      wanxiangcount : 0
    }
  },
  mounted(){
  axios({
      url: `api/h5/wanxiang/speak/${this.id}`
    })
    .then((result) => {
      this.mulumessage  = result.data.data.wanxiang_speaker.wanxiang_videos
      // console.log(this.mulumessage)
    })
  }
};
</script>

<style lang="stylus" scoped>
</style>