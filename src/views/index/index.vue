<template>
  <div>
      <a href="">Microsoft YaHei</a>
 </div>
</template>

<script>
import {search} from '@/api/product.js'
import { Toast } from "vant";
export default {
  name: '',
  data() { 
    return {

    }
  },
  props: {

  },
  components:{
  },
  mounted() {
      console.log(111);
      this.search()
      Toast('dasd')
  },
  methods:{
      search(){
          search()
          console.log(11122);
      }
  },
 }
</script>

<style lang="less" scoped>
div{
    font-size: 100px;
}
</style>