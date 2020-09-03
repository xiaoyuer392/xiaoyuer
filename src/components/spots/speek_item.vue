<template>
    <div class="item" @click="toDetailShow">
      <div class="detail_top">
        <div  class="day">
          <img  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjEgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5pY29uL+WFqOWxgC/ml6XljoYv5bi46KeEPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IuS4gOW4reenu+WKqOiuvuiuoSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuinhOiMgy/liIflm77nlLvmnb8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMzguMDAwMDAwLCAtMzk3LjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbi/lhajlsYAv5pel5Y6GL+W4uOinhCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjM2LjAwMDAwMCwgMzk1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuaXpeWOhiIgc3Ryb2tlLXdpZHRoPSIxIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMS4zNzIsOC4zMTYgTDIxLjM3MiwyMS45MzYgTDcuODEyLDIxLjkzNiBMNy4xMjgsMjEuMjUyIEw3LjEyOCwyMS4xNTYgTDYuNTc2LDIxLjE1NiBMNS44OTIsMjAuNDcyIEw1Ljg5MiwxOS4yNzIgTDMuNDU2LDE5LjI3MiBMMi40OTYsMTcuODggQzMuMDg0LDE2LjMyIDMuNTI4LDE0LjY0IDMuODQsMTIuODUyIEM0LjA5MiwxMS40IDQuMjYsOS44ODggNC4zNDQsOC4zMTYgTDMuMTkyLDguMzE2IEwzLjE5MiwyLjE2IEwyMS43NDQsMi4xNiBMMjEuNzQ0LDguMzE2IEwyMS4zNzIsOC4zMTYgWiBNMTcuMDI4LDguMzE2IEw2LjM5Niw4LjMxNiBDNi4zMTIsMTAuMDA4IDYuMTMyLDExLjY0IDUuODY4LDEzLjE4OCBDNS42MjgsMTQuNTggNS4zMDQsMTUuOTI0IDQuOTA4LDE3LjIwOCBMMTUuNDU2LDE3LjIwOCBDMTUuOTQ4LDE1Ljk5NiAxNi4zMDgsMTQuNjE2IDE2LjU2LDEzLjEwNCBDMTYuODEyLDExLjYyOCAxNi45NjgsMTAuMDMyIDE3LjAyOCw4LjMxNiBaIE04LjQ5NiwxOS4yODQgTDguNDk2LDE5LjggTDE4Ljc2OCwxOS44IEwxOC43NjgsMTIuMzM2IEMxOC43MiwxMi43MiAxOC42NiwxMy4wOTIgMTguNiwxMy40NjQgQzE4LjI3NiwxNS40MDggMTcuNzcyLDE3LjE3MiAxNy4wNzYsMTguNjg0IEwxNi4xNCwxOS4yODQgTDguNDk2LDE5LjI4NCBaIiBpZD0i5b2i54q2Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaIiIGN4PSI5IiBjeT0iMTIiIHI9IjEiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2i5aSH5Lu9IiBjeD0iMTQiIGN5PSIxMiIgcj0iMSI+PC9jaXJjbGU+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="" class="day" />
        </div>
        <div  class="title">
          {{speekItem.title}}
        </div>
      </div>
      
      <div  class="detail_center">
        <div  class="day_1">
          <div >{{speekItem.date}}</div>
          <!---->
          <!---->
        </div>
        <div class="time"><!----></div>
      </div>

      <div class="details">
        <div class="left">
          <span></span>
        </div>
        <div class="right">
          <img :src="speekItem.cover" alt=""/>
          <div >
            <img :src="speekItem.icon" alt=""/>
            <div >一席@{{speekItem.city}}</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default{
    props:['speekItem'],
    data(){
      return{
        id:0
      }
    },
    mounted () {
      this.id = this.speekItem.id
    },
    methods: {
      toDetailShow(){
        this.$router.push(`/speek_details/${this.id}`)
        //  console.log(`/speek_details/${this.id}`)
      }
    }
}
</script>
<style lang="stylus" scoped>
    
        .item
            /* position absolute */
            margin-bottom 4rem
            padding-right 2rem
            .detail_top
                width 100%
                display flex
                -webkit-box-pack center
                justify-content center
                -webkit-box-align start
                align-items flex-start
                margin-bottom .8rem
                align-content flex-start
                .day 
                    margin-top .5rem
                    width 10.4rem
                    display flex
                    -webkit-box-pack center
                    justify-content center
                    img 
                        width 3.6rem
                        height 3.6rem
                .title 
                    width 62.6rem
                    text-align left
                    font-size 3.4rem
                    color #000
                    line-height 4.6rem
                    font-family SourceHanSerifSC
            .detail_center
                width 100%
                display flex
                -webkit-box-pack center
                -webkit-box-align start
                align-items flex-start
                align-content flex-start
                .day_1
                    width 10.4rem
                    
                    div 
                        text-align center
                        line-height 2.2rem
                        font-size 2rem
                        font-family PingFangSC
                        font-weight 400
                        width 100%
            .details 
                width 100%
                height 22rem
                margin-top 1.5rems
                display flex
                -webkit-box-pack start
                justify-content flex-start
                .left 
                    height 100%
                    width 10.4rem
                    display flex
                    -webkit-box-pack center
                    justify-content center
                    position relative
                    span 
                        width 1px
                        background rgba(0,0,0,.8)
                        height 100%
                .right 
                    display flex
                    -webkit-box-pack justify
                    justify-content space-between
                    align-content center
                    -webkit-box-align center
                    align-items center
                    overflow hidden
                    border-radius .4rem
                    box-shadow 0 0 1rem rgba(0,0,0,.1)
                    position relative
                    z-index 4
                    img
                        width 39.2rem
                        height 22rem
                    div
                        width 21.4rem
                        
                        background #fff
                        display flex
                        -webkit-box-pack center
                        justify-content center
                        align-content center
                        -webkit-box-align center
                        align-items center
                        flex-wrap wrap
                        img
                            width 7rem
                            height 7rem
                        div 
                            width 100%
                            text-align center
                            font-size 2.6rem
                            font-family SourceHanSerifSC
                            color #000
                            margin-top 1rem
                      ::after
                        position absolute
                        content ""
                        background rgba(0,0,0,.01)
                        left 0
                        top 0
                        width 39.2rem
                        height 22rem
                        z-index 2
</style>