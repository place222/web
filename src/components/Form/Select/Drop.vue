<template>
   <div class="pop"><slot></slot></div>
</template>

<script>
import Popper from 'popper.js'

export default {
  name: "Drop",
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    classes: {
      type: String
    }
  },
  data() {
    return {
      popper: null
    };
  },
  methods:{
    update(){
      if(this.popper){
        this.$nextTick(()=>{
          this.popper.update();
        })
      }else{
        this.$nextTick(()=>{
          this.popper = new Popper(this.$parent.$refs.reference,this.$el,{
            gpuAcceleration:false,
            placement:this.placement,
            boundariesPadding:0,
            forceAbsolute:true,
            boundariesEleement:'body'
          });
        })
      }
    },
    destroy(){
      if(this.popper){
        this.popper.destroy();
        this.popper = null;
      }
    }
  }
};
</script>
