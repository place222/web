<template>
  <div class="container">
    <h2>Radio单选框</h2>
    <p>在一组备选项中进行单选</p>
    <div class="stand_radio">
      <Radio v-model="picked">1</Radio>
      <Radio v-model="picked">2</Radio>
    </div>
  </div>
</template>

<script>
import Radio from '@/components/Form/Radio'

export default {
  methods:{
    change:function(){
      console.log(this.picked)
    }
  },
  data(){
    return {
      picked:''
    }
  },
  components:{
    Radio
  }  
}
</script>


<style lang="less" scoped>
.container{
  padding: 50px;
}
.stand_radio{
  padding: 50px 0;
}
</style>
