<template>
    <div>
        
        <time_header></time_header>
        <time_content :timeData="nowData"></time_content>
        
    </div>
</template>

<script>
import {get} from 'utils/http.js'
import time_header from './header_nav'
import time_content from './time_content'
export default{
    props:['id'],
    data(){
        return {
            nowData : []
        }
    },
    components: {
        time_header,
        time_content,
        
    },
    async created () {
        let result = await get({
            url : '/datalist/spot/times'
        })
        this.timeData = result.data.items
        this.nowData = this.timeData[0].items
    },
    beforeRouteUpdate(to,from,next){
        
        next()
        // console.log('to'+this.$route.params.id)
        this.timeData.forEach((item,index)=>{
            if(item.name == this.$route.params.id){
                this.nowData = item.items
                //  console.log(this.nowData)
            }
        })
    }
}
</script>