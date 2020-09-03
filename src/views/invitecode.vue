<template>
  <div>
    <div class="wrap"  @click="onClick">
        <van-cell-group>
            <van-cell title="点击生成邀请码"  label="邀请人与被邀请人都将获得30天会员有效期" >
            <template #right-icon >
                <van-icon name="add" style="font-size: 16px; line-height: inherit;" />
            </template>
            </van-cell>
        </van-cell-group>
    </div>
    <div class="count">我邀请的用户：0</div>
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
                Toast.fail('非会员用户不能生成邀请码');
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