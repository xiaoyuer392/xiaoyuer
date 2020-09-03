<template>
    <div class="countyard">
        <countyard_item 
        v-for="countyardItem in countyard_item_data" 
        :key="countyardItem.id" 
        :countyardItem="countyardItem"
        
        ></countyard_item>
    </div>
</template>
<script>
import { get } from 'utils/http.js'
import countyard_item from './countyard_item'
import axios from 'axios'
export default {
    data(){
        return{
            countyard_item_data : []
        }
    },
    components: {
        countyard_item
    },
    methods: {
        handleClick(){
            console.log(111)
        },
        toDetailShow(){
          console.log(111)
          this.$route.push('/speek_details')
      }  
    },
    async created () {
        const countyard_item_data = await get({
            url : '/datalist/spot/countyard'
        })
        this.countyard_item_data = countyard_item_data.data.items
        console.log(this.countyard_item_data)
    }
};
</script>
<style lang="stylus" scoped>
.countyard 
    position absolute
    top 12rem
    left 0  
    padding-top 4rem
    padding-bottom 10rem
</style>