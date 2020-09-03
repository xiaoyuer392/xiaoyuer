<template>
    <div>
<!-- 头部搜索 -->
        <header class="header">
        <div class="serach-input" @click="serachUp">
            <input type="text" placeholder="人文-科技-白日梦" disabled="disabled">
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYwLjEgKDg4MTMzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5pY29uL2J1dHRvbi/mkJzntKIvMi4wL+acqua/gOa0uzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLkuIDluK3np7vliqjorr7orqEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLop4TojIMv5YiH5Zu+55S75p2/IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzA3LjAwMDAwMCwgLTI4OS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Imljb24vaGVhZGVyL+aQnOe0oi8yLjAv5pyq5r+A5rS7IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDcuMDAwMDAwLCAyODkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5pCc57SiIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMy42NzQyMzM0LDIyLjAzNjUwOSBMMTkuMTc2NDMyLDE3LjYxNTQ1NjQgQzIyLjkyNDMzMzQsMTMuMzQ2MzAyNSAyMi43MDA0ODI2LDYuOTc3NzQ4MTYgMTguNTc2ODMxNywzLjA4MTE0NTkgQzE0LjM3ODAzMDksLTEuMDM5MzA3MTMgNy40ODAyMjk0NiwtMS4wMzkzMDcxMyAzLjIwNjI3ODc2LDMuMTU2Mjk1OCBDLTAuOTkyNTIyMDM5LDcuMjAxNTk4OTMgLTEuMDY3NjcxOTUsMTMuODY5MTUzOSAyLjk4MjQyNzk5LDE3Ljk4OTYwNjkgTDMuMjA2Mjc4NzYsMTguMjE1MDU2NiBDNy4xMDQ0Nzk5NSwyMS45NjEzNTkxIDEzLjE3ODgzMDQsMjIuNDEwNjU5NiAxNy41MjYzMzIxLDE5LjE5MDQwNjQgTDIyLjAyNTczMjUsMjMuNjA5ODYwMSBDMjIuMjQ5NTgzMiwyMy44MzM3MTA5IDIyLjU1MDE4MjgsMjMuOTg0MDEwNyAyMi44NDkxODM1LDIzLjk4NDAxMDcgQzIzLjE2MjQyMjEsMjMuOTcxNDYwNyAyMy40NTg0MTQsMjMuODM3MjMxOCAyMy42NzQyMzM0LDIzLjYwOTg2MDEgQzI0LjA0OTk4MywyMy4yMzQxMTA2IDI0LjEyNTEzMjgsMjIuNDg1ODA5NSAyMy42NzQyMzM0LDIyLjAzNjUwOSBMMjMuNjc0MjMzNCwyMi4wMzY1MDkgWiBNMi4zMDc2Nzc4NCwxMC42NDg5MDA3IEMyLjM4MTIyODgxLDYuMDAyMzk4NDEgNi4yMDU4NzkwMywyLjI1NzY5NDg2IDEwLjkyOTEzMDIsMi4yNTc2OTQ4NiBDMTUuNjUyMzgxNCwyLjI1NzY5NDg2IDE5LjQ3NTQzMjcsNi4wMDIzOTgzOCAxOS41NTA1ODI2LDEwLjY0ODkwMDcgQzE5LjQ3NTQzMjYsMTUuMzY3MzU1MSAxNS41NzcyMzE1LDE5LjExMzY1NzYgMTAuOTI5MTMwMiwxOS4wMzg1MDc3IEM4LjY3MTA4MzQzLDE5LjA3Njk2MTEgNi40OTEwMjU3NywxOC4yMTI4NTcgNC44NzI0OTk5MywxNi42Mzc4NTYxIEMzLjI1Mzk3NDA5LDE1LjA2Mjg1NTEgMi4zMzA3Nzc1NiwxMi45MDcxNTY4IDIuMzA3Njc3ODQsMTAuNjQ4OTAwNyBMMi4zMDc2Nzc4NCwxMC42NDg5MDA3IFoiIGlkPSLlvaLnirYiIGZpbGw9IiNCREJEQkQiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" >
        </div>
        </header>
        <!-- 上新 -->
        <Shangxin></Shangxin>
        <!-- 演讲 -->
        <Speech></Speech>
        <!-- 万象 -->
        <Wanxiang></Wanxiang>
        <!-- 枝桠 -->
        <Zhiya></Zhiya>
        <!-- 记录 -->
        <Record></Record>
    </div>
</template>

<script>
    import Shangxin from '../components/home/shangxin';
    import Speech from '../components/home/speech';
    import Wanxiang from '../components/home/wanxiang';
    import Zhiya from '../components/home/zhiya';
    import Record from '../components/home/record';
    
    export default {
        data() {
            return {
            active: 0,
            }
        },
        methods:{
            serachUp(){
                this.$router.push('/search')
            }
        },
        components: {
            Shangxin,
            Speech,
            Wanxiang,
            Zhiya,
            Record
        }
    }

</script>

<style lang="stylus" scoped>

  header 
    width 100%
    height 10rem
    display flex
    align-items center
    justify-content center
    background-color #fff
    overflow hidden
    font-size 3.6rem
    color #000
    z-index 1
    top 0
    left 0
    border-bottom 1px solid rgba(194,201,215,.4)
    .serach-input
      display flex
      -webkit-box-align center
      -ms-flex-align center
      align-items center
      border 1px solid rgba(194,201,215,.4)
      width 67rem
      -webkit-box-shadow 0 0 1rem rgba(0,0,0,.05)
      box-shadow 0 0 1rem rgba(0,0,0,.05)
      height 6rem
      padding 0 3rem
      -webkit-box-pack justify
      -ms-flex-pack justify
      justify-content space-between
      border-radius 4.6rem
      input 
        width 54rem
        border none
        height 5.9rem
        font-size 2.4rem
        font-family PingFangSC-Regular
        background none
        font-weight 400
        color #000
      img
        width 3.2rem
        height 3.2rem

</style>