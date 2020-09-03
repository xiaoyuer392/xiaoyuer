<template>
    <div class="item" >
        <div class="item_img">
            <img v-if="detail.speech_cover" :src="detail.speech_cover" alt="" class="user_img">
            <img v-else :src="detail.cover_url" alt="" class="user_img">
        </div> <!----> 
        <div class="des">
            <span>{{detail.speaker_name}} &nbsp;-&nbsp;</span> 
            <span>{{detail.speaker_intro}}</span>
        </div> <!----> 
        <div class="des_2">
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTYgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU0LjEgKDc2NDkwKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5pY29uL+WFqOWxgC/lvJXlj7cv5bi46KeEPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IuS4gOW4reenu+WKqOiuvuiuoSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuinhOiMgy/liIflm77nlLvmnb8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMjAuMDAwMDAwLCAtNDQ2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbi/lhajlsYAv5byV5Y+3L+W4uOinhCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzIwLjAwMDAwMCwgNDQ2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuW8leWPtyI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjE0LjU1MDYyMTciIGhlaWdodD0iMTQuNTUwNjIxNyI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNS45OTE0OCwxMy44MjMzMDI4IEw5LjI1OTQ4Njk2LDEzLjgyMzMwMjggTDkuMjU5NDg2OTYsOC45Njc3NjI3NiBDOS4yNTk0ODY5Niw2Ljk4Njg4NDc3IDkuNDMxMTc4MjMsNS40MzI4MDU2MyA5Ljc3NDU2ODA2LDQuMzA1NDc2ODIgQzEwLjExNzk1NjcsMy4xNzgxNDc5OSAxMC40NzUwNTIsMi40MjU1ODM3OSAxMS40MDkzOTEsMS41MjM3MjA0OCBDMTIuMzQzNzI4OSwwLjYyMTg1ODQwMSAxMi45OTIwMTEyLDAuMzUxMjI2NTQ0IDE0LjM2MzQ1ODIsMCBMMTUuMzIxNTc2NywyLjA2MDgxNzg5IEMxNC4zNjM0NTgyLDIuNDI2OTU1MTggMTMuNzc5NzQxOSwyLjU5MDI1NTU5IDEyLjg3OTQ1MTIsMy41MjQzMjMwNiBDMTEuOTc5MTYwNiw0LjQ1ODM5MDUxIDExLjkxMjc1NTIsNS4zNjE4NDgzMSAxMS45MTI3NTUyLDYuMTM4MzgzNDYgTDE1Ljk5MTQ4LDYuMTM4MzgzNDYgTDE1Ljk5MTQ4LDEzLjgyMzMwMjggWiBNNi43MzE5OTQyNiwxMy44MjMzMDI4IEwwLDEzLjgyMzMwMjggTDAsOC45Njc3NjI3NiBDMCw2Ljk4Njg4NDc3IDAuMTcxNjkyNDksNS40MzI4MDU2MyAwLjUxNTA4MTA5NCw0LjMwNTQ3NjgyIEMwLjg1ODQ3MDkyLDMuMTc4MTQ3OTkgMS4yMTU1NjYyMSwyLjQyNTU4Mzc5IDIuMTQ5OTA0MDcsMS41MjM3MjA0OCBDMy4wODQyNDMxNCwwLjYyMTg1ODQwMSAzLjczMjUyNDI2LDAuMzUxMjI2NTQ0IDUuMTAzOTcyNDksMCBMNi4wNjIwODk3MSwyLjA2MDgxNzg5IEM1LjEwMzk3MjQ5LDIuNDI2OTU1MTggNC41MjAyNTQ5MSwyLjU5MDI1NTU5IDMuNjE5OTY0MjksMy41MjQzMjMwNiBDMi43MTk2NzM2OCw0LjQ1ODM5MDUxIDIuNjUzMjY4MjgsNS4zNjE4NDgzMSAyLjY1MzI2ODI4LDYuMTM4MzgzNDYgTDYuNzMxOTk0MjYsNi4xMzgzODM0NiBMNi43MzE5OTQyNiwxMy44MjMzMDI4IFoiIGlkPSJTaGFwZSIgZmlsbD0iIzZGNkY2RiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt=""> 
            <div v-if="detail.titlelanguage">{{detail.titlelanguage}}</div>
            <div v-else v-html="detail.quotations">{{detail.quotations}}</div>
        </div><!---->
        <div class="des_3" v-if="detail.quotations" v-html="detail.describe">{{detail.describe}}</div>

    </div>
</template>
<script>
export default{
    props:['detail'],
    data(){
        return {
            name:'/speech'
        }
    },
    methods:{
        chId(item,name){
            console.log(item,name);
            this.$store.dispatch('changId',{item,name});
            this.$router.push('/detail');
        }
    }
}
</script>
<style lang="stylus" scoped>
.item
    padding 0 6rem 4rem 0
    width 100%
    border-bottom .1rem solid #c2c9d7
    margin-bottom 4rem
    .item_img
        width 100%
        height auto
        position relative
        margin-bottom 4rem
        .user_play
            width 7rem
            height 7rem
            position absolute
            bottom 5rem
            right 6rem
        .user_img
            width 100%
            height auto
            box-shadow 0 0 1rem rgba(0,0,0,.1)
    .des
        color #000
        font-size 2.6rem
        font-family PingFangSC-Regular
        font-weight 700
        margin-bottom 2rem
        display -webkit-box
        display -ms-flexbox
        display flex
        -webkit-box-pack start
        -ms-flex-pack start
        justify-content flex-start
        span:nth-of-type(1)
            white-space nowrap
        span:nth-of-type(2)
            font-size 2.6rem
            font-weight 700
    .des_2
        color #6f6f6f
        font-size 2.4rem
        font-family PingFangSC-Regular
        font-weight 400
        display -webkit-box
        display -ms-flexbox
        display flex
        flex-direction column
        -webkit-box-pack start
        -ms-flex-pack start
        justify-content flex-start
        img 
            width 2.6rem
            height 2.6rem
            margin-right 1.6rem
        div
            display block
            width 100%
            font-size 3.4rem
            font-family PingFangSC-Regular
            font-weight 400
    .des_3 
        font-size 2.4rem
</style>