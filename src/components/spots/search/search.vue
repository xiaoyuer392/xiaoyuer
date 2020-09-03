<template>
    <div class="search">
        <div class="top" >
            <van-icon name="arrow-left" class="lastpage" size="4rem" @click="toLast"/>
            <h2>搜索</h2>
        </div>

        <div class="search_div">
            <div class="search_input">
                <input type="text" placeholder="人文·科技·白日梦" v-model="keyword"> 
                <img @click="search" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYwLjEgKDg4MTMzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5pY29uL2J1dHRvbi/mkJzntKIvMi4wL+acqua/gOa0uzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLkuIDluK3np7vliqjorr7orqEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLop4TojIMv5YiH5Zu+55S75p2/IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzA3LjAwMDAwMCwgLTI4OS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Imljb24vaGVhZGVyL+aQnOe0oi8yLjAv5pyq5r+A5rS7IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDcuMDAwMDAwLCAyODkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5pCc57SiIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMy42NzQyMzM0LDIyLjAzNjUwOSBMMTkuMTc2NDMyLDE3LjYxNTQ1NjQgQzIyLjkyNDMzMzQsMTMuMzQ2MzAyNSAyMi43MDA0ODI2LDYuOTc3NzQ4MTYgMTguNTc2ODMxNywzLjA4MTE0NTkgQzE0LjM3ODAzMDksLTEuMDM5MzA3MTMgNy40ODAyMjk0NiwtMS4wMzkzMDcxMyAzLjIwNjI3ODc2LDMuMTU2Mjk1OCBDLTAuOTkyNTIyMDM5LDcuMjAxNTk4OTMgLTEuMDY3NjcxOTUsMTMuODY5MTUzOSAyLjk4MjQyNzk5LDE3Ljk4OTYwNjkgTDMuMjA2Mjc4NzYsMTguMjE1MDU2NiBDNy4xMDQ0Nzk5NSwyMS45NjEzNTkxIDEzLjE3ODgzMDQsMjIuNDEwNjU5NiAxNy41MjYzMzIxLDE5LjE5MDQwNjQgTDIyLjAyNTczMjUsMjMuNjA5ODYwMSBDMjIuMjQ5NTgzMiwyMy44MzM3MTA5IDIyLjU1MDE4MjgsMjMuOTg0MDEwNyAyMi44NDkxODM1LDIzLjk4NDAxMDcgQzIzLjE2MjQyMjEsMjMuOTcxNDYwNyAyMy40NTg0MTQsMjMuODM3MjMxOCAyMy42NzQyMzM0LDIzLjYwOTg2MDEgQzI0LjA0OTk4MywyMy4yMzQxMTA2IDI0LjEyNTEzMjgsMjIuNDg1ODA5NSAyMy42NzQyMzM0LDIyLjAzNjUwOSBMMjMuNjc0MjMzNCwyMi4wMzY1MDkgWiBNMi4zMDc2Nzc4NCwxMC42NDg5MDA3IEMyLjM4MTIyODgxLDYuMDAyMzk4NDEgNi4yMDU4NzkwMywyLjI1NzY5NDg2IDEwLjkyOTEzMDIsMi4yNTc2OTQ4NiBDMTUuNjUyMzgxNCwyLjI1NzY5NDg2IDE5LjQ3NTQzMjcsNi4wMDIzOTgzOCAxOS41NTA1ODI2LDEwLjY0ODkwMDcgQzE5LjQ3NTQzMjYsMTUuMzY3MzU1MSAxNS41NzcyMzE1LDE5LjExMzY1NzYgMTAuOTI5MTMwMiwxOS4wMzg1MDc3IEM4LjY3MTA4MzQzLDE5LjA3Njk2MTEgNi40OTEwMjU3NywxOC4yMTI4NTcgNC44NzI0OTk5MywxNi42Mzc4NTYxIEMzLjI1Mzk3NDA5LDE1LjA2Mjg1NTEgMi4zMzA3Nzc1NiwxMi45MDcxNTY4IDIuMzA3Njc3ODQsMTAuNjQ4OTAwNyBMMi4zMDc2Nzc4NCwxMC42NDg5MDA3IFoiIGlkPSLlvaLnirYiIGZpbGw9IiNCREJEQkQiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt=""> 
                <!----> 
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYxLjIgKDg5NjUzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5pY29uL+WFqOWxgC/lj5bmtogv5bi46KeE5aSH5Lu9PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IuS4gOW4reenu+WKqOiuvuiuoSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuinhOiMgy/liIflm77nlLvmnb8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MDUuMDAwMDAwLCAtMzQ3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbi/lhajlsYAv5Y+W5raIL+W4uOinhC3nmb3oibLog4zmma8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwNS4wMDAwMDAsIDM0Ny4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLlhbPpl60iPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjRkZGRkZGIiBjeD0iMTIiIGN5PSIxMiIgcj0iOSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEyLDAgQzE4LjYyNzMsMCAyNCw1LjM3MjcgMjQsMTIgQzI0LDE4LjYyNzMgMTguNjI3MywyNCAxMiwyNCBDNS4zNzI3LDI0IDAsMTguNjI3MyAwLDEyIEMwLDUuMzcyNyA1LjM3MjcsMCAxMiwwIFogTTExLjk2NTIsMTAuNTY5OCBMNy45OTYwMDAwMSw2LjYwMDYgQzcuODQ1OTY5NzIsNi40NTA1NjE5OCA3LjY0MjQ4MDM0LDYuMzY2MjcwODQgNy40MzAzLDYuMzY2MjcwODQgQzcuMjE4MTE5NjcsNi4zNjYyNzA4NCA3LjAxNDYzMDI5LDYuNDUwNTYxOTggNi44NjQ2LDYuNjAwNiBMNi42MDA2LDYuODY0NiBDNi40NTA1NjE5OCw3LjAxNDYzMDI5IDYuMzY2MjcwODQsNy4yMTgxMTk2NyA2LjM2NjI3MDg0LDcuNDMwMyBDNi4zNjYyNzA4NCw3LjY0MjQ4MDM0IDYuNDUwNTYxOTgsNy44NDU5Njk3MiA2LjYwMDYsNy45OTYwMDAwMSBMMTAuNTY5OCwxMS45NjUyIEw2LjYwMDYsMTUuOTM0NCBDNi40NTA1NjE5OCwxNi4wODQ0MzAzIDYuMzY2MjcwODQsMTYuMjg3OTE5NyA2LjM2NjI3MDg0LDE2LjUwMDEgQzYuMzY2MjcwODQsMTYuNzEyMjgwMyA2LjQ1MDU2MTk4LDE2LjkxNTc2OTcgNi42MDA2LDE3LjA2NTggTDYuODY0NiwxNy4zMjk4IEM3LjAxNDYzMDI5LDE3LjQ3OTgzOCA3LjIxODExOTY3LDE3LjU2NDEyOTIgNy40MzAzLDE3LjU2NDEyOTIgQzcuNjQyNDgwMzQsMTcuNTY0MTI5MiA3Ljg0NTk2OTcyLDE3LjQ3OTgzOCA3Ljk5NjAwMDAxLDE3LjMyOTggTDExLjk2NTIsMTMuMzYwNSBMMTUuOTM0NCwxNy4zMjk4IEMxNi4wODQ0MzAzLDE3LjQ3OTgzOCAxNi4yODc5MTk3LDE3LjU2NDEyOTIgMTYuNTAwMSwxNy41NjQxMjkyIEMxNi43MTIyODAzLDE3LjU2NDEyOTIgMTYuOTE1NzY5NywxNy40Nzk4MzggMTcuMDY1OCwxNy4zMjk4IEwxNy4zMjk4LDE3LjA2NTggQzE3LjQ3OTgzOCwxNi45MTU3Njk3IDE3LjU2NDEyOTIsMTYuNzEyMjgwMyAxNy41NjQxMjkyLDE2LjUwMDEgQzE3LjU2NDEyOTIsMTYuMjg3OTE5NyAxNy40Nzk4MzgsMTYuMDg0NDMwMyAxNy4zMjk4LDE1LjkzNDQgTDEzLjM2MDUsMTEuOTY1MiBMMTcuMzI5OCw3Ljk5NjAwMDAxIEMxNy40Nzk4MzgsNy44NDU5Njk3MiAxNy41NjQxMjkyLDcuNjQyNDgwMzQgMTcuNTY0MTI5Miw3LjQzMDMgQzE3LjU2NDEyOTIsNy4yMTgxMTk2NyAxNy40Nzk4MzgsNy4wMTQ2MzAyOSAxNy4zMjk4LDYuODY0NiBMMTcuMDY1OCw2LjYwMDYgQzE2LjkxNTc2OTcsNi40NTA1NjE5OCAxNi43MTIyODAzLDYuMzY2MjcwODQgMTYuNTAwMSw2LjM2NjI3MDg0IEMxNi4yODc5MTk3LDYuMzY2MjcwODQgMTYuMDg0NDMwMyw2LjQ1MDU2MTk4IDE1LjkzNDQsNi42MDA2IEwxMS45NjUyLDEwLjU2OTggTDExLjk2NTIsMTAuNTY5OCBaIiBpZD0i5b2i54q2IiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt="" class="close" style="display: none;">
            </div>
        </div>
   
        <div class="search_content" v-if="resultList.length != 0">
            <ul>
                <span style="font-size: 2.4rem;">搜索结果： 演讲</span>
                <div class="result_item" v-for="item in resultList">
                    <img :src="item.video_cover" alt="" class="speak_img">
                    <div class="detail">
                        <span class="detail_title">{{item.title}}</span>
                        <span class="speaker">{{item.speaker.name}}&nbsp;&nbsp;{{item.speaker.intro}}</span> 
                        <span class="play_count">{{item.created}}</span>
                    </div> 
                    <div class="play">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU4ICg4NDY2MykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+aWNvbi/miJHnmoQv5pqC5YGcL+W4uOinhOWkjeWItjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLkuIDluK3np7vliqjorr7orqEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLop4TojIMv5YiH5Zu+55S75p2/IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIuMDAwMDAwLCAtMzkzLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbi9NZWRpYS/mkq3mlL4v5bi46KeELTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjAwMDAwMCwgMzkxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuaSreaUviI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaIiIGZpbGw9IiMwMDAwMDAiIGN4PSIyNCIgY3k9IjI0IiByPSIyMS42Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzAuNTc0MzcyNCwyMi43MjQyNDE5IEMyNy42MzQ3MjEsMjAuNDYwMDI2NCAyNC42OTQ5MjIsMTguMTk2MDU5MyAyMS43NTUzNjkxLDE1LjkzMjE5MTYgQzIwLjcwODYzMjksMTUuMTI1Nzg1MiAxOS4yLDE1Ljg3OTE0OTYgMTkuMiwxNy4yMDc5Mjk3IEwxOS4yLDMwLjc5MjAzMDQgQzE5LjIsMzIuMTIwODEwNSAyMC43MDg2MzI5LDMyLjg3NDIyNDUgMjEuNzU1MzY5MSwzMi4wNjc4MTgyIEMyNC42OTQ5MjIsMjkuODAzOTUwNCAyNy42MzQ3MjEsMjcuNTM5OTgzMyAzMC41NzQzNzI0LDI1LjI3NTc2NzkgQzMxLjQwODU0MjUsMjQuNjMzNTAzNSAzMS40MDg1NDI1LDIzLjM2NjUwNjMgMzAuNTc0MzcyNCwyMi43MjQyNDE5IFoiIGlkPSLot6/lvoQiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt="">
                    </div>
                </div>
            </ul>
        </div>

        <div v-else>暂无内容哦！！！</div>
    </div>
</template>
<script>

import { get } from 'utils/http.js'
export default{
    data(){
        return {
            isShow : false,
            keyword : '',
            datalist : [],
            resultList : []
        }
    },
    
    watch: {
        keyword(val){
            if(val === ''){
                this.resultList = []
            }
        } ,
        resultList(val){
            console.log(val)
        } 
    },
    async created () {
        let result = await get({
            url : '/datalist/detail'
        })
        this.datalist = result.data.items_speech
        // console.log(this.datalist)
    },

    methods: {
        search(){
            if(this.keyword){
                this.datalist.forEach((item)=>{
                    if(item.title.indexOf(this.keyword) != -1){
                        this.resultList.push(item)
                    }
                })
            }    
        },
        toLast(){
            this.$router.history.go(-1)
        }
    },
    
}
</script>
<style lang="stylus" scoped>
   
    .top 
        position relative
        height 9rem
        width 100%
        display flex
        box-shadow 0 0 1rem rgba(0,0,0,.1)
        .lastpage
            flex 1
            height 100%
            line-height 9rem
            text-align center
            
        h2 
            flex 9
            line-height 9rem
            text-align center
            font-size 3.6rem
    .search_div
        width 100%
        height 14rem
        background #fff
        -webkit-box-pack: center
        -ms-flex-pack center
        justify-content center
        margin-bottom 2px
        display flex
        -webkit-box-align center
        align-items center
        /* line-height 14rem */
        .search_input
            border .3px solid rgba(194,201,215,.4)
            width 67rem
            box-shadow 0 0 1rem rgba(0,0,0,.1)
            height 8rem
            padding 0 3rem
            -webkit-box-pack justify
            justify-content space-between
            border-radius 4.6rem
            line-height 8rem
            input
                width 54rem
                border none
                height 5.9rem
                font-size 2.4rem
                font-family PingFangSC-Regular
                font-weight 400
                color #000
            img
                
                width 4rem
                height 4rem;
        
    .result_item
        width 100%
        height 16rem
        display flex 
        justify-content flex-start
        position relative
        margin-bottom 3rem
        padding 0 4rem
        -webkit-box-pack start
        .speak_img
            width 28rem 
            height 16rem
            margin-right 4rem
            box-shadow 0 0 1rem rgba(0,0,0,.1)
        .detail
            width 31.4rem
            position relative
            box-sizing border-box
            .detail_title
                width 100%
                overflow hidden
                text-overflow: ellipsis
                font-size 2.8rem
                font-family PingFangSC-Medium
                font-weight 500
                display -webkit-box
                color #000
                -webkit-line-clamp 2
                -webkit-box-orient vertical
            .speaker
                width 100%
                font-size 2rem
                font-family PingFangSC-Regular
                font-weight 400
                color #6f6f6f
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 2
                -webkit-box-orient vertical
            .play_count
                position absolute
                left 0
                bottom 0
                font-size 2rem
                font-family PingFangSC-Regular
                font-weight 400
                line-height 2rem
                color #6f6f6f
                width 100%
                display flex
                -webkit-box-pack justify
                justify-content space-between
        .play
            width 3.2rem
            height 16rem
            text-align center
            display flex
            -webkit-box-align center
            align-items center
            -webkit-box-pack center
            justify-content center
            img
                width 3.2rem
                height 3.2rem
    
</style>