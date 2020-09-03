<template>
  <div class="speek">
    <speek_item 
    v-for="speekItem in speek_item_data" 
    :key="speekItem.id" 
    :speekItem="speekItem"
    ></speek_item>
    </div>
</template>
<script>
import { get } from 'utils/http.js'
import speek_item from './speek_item'
import axios from 'axios'
export default {
    data(){
        return{
            speek_item_data : []
        }
    },
    components: {
        speek_item
    },
    
    async created () {
        const speek_item_data = await get({
            url : '/datalist/spot/speek'
        })
        this.speek_item_data = speek_item_data.data.items
        // console.log(this.speek_item_data)
    }
};
</script>
<style lang="stylus" scoped>
.speek 
    position absolute
    padding-top 4rem
    padding-bottom 10rem
    top 12rem
    left 0
</style>