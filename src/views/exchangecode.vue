<template>
  <div>
    <div class="wrap" >
        <van-cell-group>
            <van-cell title="请输入兑换码" label="使用兑换码可以立刻获得对应的权益" >
            <template #right-icon >
                <van-icon name="checked" @click="onClick" style="font-size: 16px; line-height: inherit;" />
            </template>
            </van-cell>
        </van-cell-group>
    </div>
    <div class="count">兑换记录</div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Cell);
Vue.use(CellGroup);
export default {
    methods: {
            onClick() {
                Toast.fail('邀请码不正确');
            }
        },
}

</script>
<style lang='stylus' scoped>
    .wrap 
        border-bottom 1.6rem solid #fafbfc
        padding-left 2.8rem
    .count
        color #969799
        margin 2rem 0 2rem 6rem
</style>