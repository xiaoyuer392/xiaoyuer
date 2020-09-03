<template>
  <div>
    <time_item
      v-for="timeItem in timeData"
      :key="timeItem.id"
      :timeItem="timeItem"
    ></time_item>
  </div>
</template>
<script>
import { get } from "utils/http.js";
import time_item from "./time_item";
export default {
  props: ["timeData"],
  data() {
    return {};
  },
  components: {
    time_item,
  },
  // beforeRouteUpdate(to,from,next){
  //     next()
  //     console.log(111)
  // }
};
</script>
<style></style>
