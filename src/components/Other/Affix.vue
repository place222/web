<template>
    <div class="t" :style="styles">
     <div>123</div>
     <div>123</div>
     <div>123</div>
     <div>123</div>
     <div>123</div>
     <div>123</div>
     <div>123</div>
     <div>123</div>
     <div>123</div>
     <div>123</div>
     <div>123</div>
     <div>123</div>
     <div>123</div>
     <div>123</div>
     <div>123</div>
     <div>123</div>
     <div>123</div>
     <div>123</div>
     <div>123</div>
     <div>123</div>
    </div>
</template>


<script>
/**
 * 图钉组件 专门可以用来固定屏幕某个地方，不随滚动条股东 侧边菜单？
 *
 *
 */
function getScroll(target, top) {
  const prop = top ? "pageYOffset" : "pageXOffset";
  const method = top ? "scrollTop" : "scrollLeft";

  let rect = target[prop];

  if (typeof rect !== "number") {
    rect = window.document.documentElement[method];
  }
  return rect;
}
export default {
  data(){
    return {
      styles:{},
      affix:false,
      offset:60
    }
  },
  mounted() {
    var t = document.querySelector(".t");
    var _this = this;
    window.addEventListener(
      "resize",
      function() {

        // console.log(
        //   `clientWidth:${t.clientWidth} clientHeight:${t.clientHeight} 去除的滚动条区域`
        // );
        // console.log(
        //   `offsetWidth:${t.offsetWidth} offsetHeight:${t.offsetHeight} 包含边框的宽高`
        // );
        // console.log(
        //   `scrollWidth:${t.scrollWidth} scrollHeight:${t.scrollHeight} 元素内容区的实际宽高度`
        // );
        // console.log(
        //   `clientLeft:${t.clientLeft} clientTop:${t.clientTop} 边框的宽高`
        // );
        // console.log(
        //   `offsetLeft:${t.offsetLeft} offsetTop:${t.offsetTop} 相对于offsetParent的偏移`
        // );
        // console.log(
        //   `scrollLeft:${t.scrollLeft} scrollTop:${t.scrollTop} 已经滚动的宽高，没有滚动条的时候都是0`
        // );
      },
      false
    );

    window.addEventListener(
      "scroll",
      function() {
        //例子 元素固定在屏幕100像素位置
       let top = window.document.documentElement.scrollTop + t.getBoundingClientRect().top;
       console.log(`${top}   ${window.document.documentElement.scrollTop} ${window.pageYOffset}`)
       if((top-_this.offset) < window.document.documentElement.scrollTop && !_this.affix){
         _this.affix = true;
         _this.styles = {
           position:'fixed',
           top:`${_this.offset}px`,
           zIndex:1
         }
       }else if((top-_this.offset) > window.document.documentElement.scrollTop && _this.affix){
         _this.styles = null;
         _this.affix = false;
       }
      },
      false
    );
  }
};
</script>



<style scoped>
.t {
  border: 10px solid red;
  width: 300px;
  height: 30px;
  background: #ccc;
  overflow: auto;
}
.affix {
  position: fixed;
  z-index: 1;
}
</style>
