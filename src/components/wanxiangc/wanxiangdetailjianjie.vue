<template>
  <div>
    <div class="swiper-slide swiper-slide-active">
      <div class="item">
        <div class="des1"
          v-html="imagemessage"
        >
          {{imagemessage}}
        </div>
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
      imagemessage : ''
    }
  },
  mounted(){
    
    axios({
        url: `api/h5/wanxiang/speak/${this.id}`
      })
      .then((result) => {
        this.imagemessage  = result.data.data.wanxiang_speaker.wanxiang.course_info
        // console.log(this.imagemessage)
    })
  }
  
};

</script>

<style lang="stylus" scoped>

</style>