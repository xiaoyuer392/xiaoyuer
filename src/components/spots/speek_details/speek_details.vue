<template>
    <div class="detail">
        <header>
            <img @click="toSpot" class="go_back" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU2LjMgKDgxNzE2KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5pY29uL2hlYWRlci/ov5Tlm54v5rex6buRPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IuS4gOW4reenu+WKqOiuvuiuoSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuinhOiMgy/liIflm77nlLvmnb8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MS4wMDAwMDAsIC00NTMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uL2hlYWRlci/ov5Tlm54v5rex6buRIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MS4wMDAwMDAsIDQ1My4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLov5Tlm54iPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNS4wODc1LDIuMTg2Mzc5OTMgTDcuMzg3NSwxMC4wNzE2ODQ2IEwxNS4wODc1LDE3Ljk1Njk4OTIgQzE1LjUsMTguMzg3MDk2OCAxNS41LDE5LjI0NzMxMTggMTUuMDg3NSwxOS42Nzc0MTk0IEMxNC42NzUsMjAuMTA3NTI2OSAxMy44NSwyMC4xMDc1MjY5IDEzLjQzNzUsMTkuNjc3NDE5NCBMNS4wNSwxMS4wNzUyNjg4IEM1LjA1LDExLjA3NTI2ODggNC45MTI1LDExLjA3NTI2ODggNC45MTI1LDEwLjkzMTg5OTYgQzQuNjM3NSwxMC43ODg1MzA1IDQuNSwxMC4zNTg0MjI5IDQuNSwxMC4wNzE2ODQ2IEM0LjUsOS43ODQ5NDYyNCA0LjYzNzUsOS4zNTQ4Mzg3MSA0LjkxMjUsOS4yMTE0Njk1MyBDNC45MTI1LDkuMjExNDY5NTMgNS4wNSw5LjIxMTQ2OTUzIDUuMDUsOS4wNjgxMDAzNiBMMTMuNDM3NSwwLjMyMjU4MDY0NSBDMTMuODUsLTAuMTA3NTI2ODgyIDE0LjY3NSwtMC4xMDc1MjY4ODIgMTUuMDg3NSwwLjMyMjU4MDY0NSBDMTUuNjM3NSwwLjg5NjA1NzM0OCAxNS42Mzc1LDEuNjEyOTAzMjMgMTUuMDg3NSwyLjE4NjM3OTkzIFoiIGlkPSJQYXRoIiBmaWxsPSIjMzMzMzMzIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="" >
            <span>现场详情</span> 
        </header>
        <main>
            <speek_item_header :activity="activity"></speek_item_header>
            <!--  -->
            <div class="introduce">
                <div class="title">单场讲者介绍</div>
                <detail_item
                v-for="detail in item_data"
                :key="detail.speech_id"
                :detail="detail"
                @click="chId(detail,name)"
                ></detail_item>
            </div>    
        </main>
        <footer>本场视频制作剪辑中</footer>
    </div>
</template>
<script>
import detail_item from './detail_item'
import speek_item_header from './speek_details_header'

import { get } from 'utils/http.js'
export default{
    data(){
        return{
            id : 0,
            activity : {},
            item_data : [],
        }
    },

    components: {
        detail_item,
        speek_item_header
    },
    methods: {
      toSpot(){
          this.$router.push('/spot')
      },
    },
    
    async created () {
        this.id = this.$route.params.id

        let data = await get({
            url : `/api/h5/activity/${this.id}`
        })
        this.activity = data.data.activity
        this.item_data = data.data.item_one
        // console.log(data)
        // console.log(this.activity)
        // console.log(this.item_data)

    }
}
</script>

<style lang="stylus" scoped>

header
    width 100%
    height 9rem
    background-color #fff
    overflow hidden
    font-size 3.6rem
    color #000
    font-family "SourceHanSerifSC"
    line-height 9rem
    text-align center
    position absolute
    top 0
    z-index 10
    left 0
    margin-bottom .2rem
    box-shadow 0 0 1rem rgba(0,0,0,.1)
    img
        width 3.2rem
        height 3.2rem
        position absolute
        top calc(50% - 1.6rem)
        left 3.5rem
main
    width 100%
    position absolute
    top 9rem
    bottom 9rem
    overflow scroll
    
    .introduce
        width 100%
        height auto
        background #fff
        padding 3.6rem 0 1rem 6rem  
        .title 
            font-size 2.8rem
            margin-bottom: 4rem;
        


footer
    position fixed
    bottom 0
    width 100%
    font-size 2.8rem
    line-height 10rem
    color #6f6f6f
    font-family PingFangSC-Regular
    font-weight 400
    text-align center
    box-shadow 0 0 1rem rgba(0,0,0,.1)
        
</style>