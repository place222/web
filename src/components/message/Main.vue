<template>
  <transition name="fade">
    <div class="message" :class="alertClass" v-if="show" >
      <button type="button" class="close">&times;</button>
      <i class="fa" :class="titleIcon"></i>
      <span>这里填写内容</span>
    </div>
  </transition>
</template>


<script>
export default {
  data: function() {
    return {
      message: "123",
      alerttype: 4,
      timeout: null
    };
  },
  props: {
    show: false
  },
  methods: {
    handleClick: function() {
      this.show = !this.show;
    }
  },
  watch: {
    show(val) {
      if (val == true) {
        this.timeout = setTimeout(() => {
          this.show = !this.show;
        }, 2000);
      }
    }
  },
  computed: {
    alertClass: function() {
      return {
        "message-dismissable": this.dismissable,
        "message-success": this.alerttype == 4,
        "message-info": this.alerttype == 3,
        "message-warning": this.alerttype == 2,
        "message-danger": this.alerttype == 1
      };
    },
    titleIcon: function() {
      return {
        "fa-check": this.alerttype == 4,
        "fa-info": this.alerttype == 3,
        "fa-warning": this.alerttype == 2,
        "fa-ban": this.alerttype == 1
      };
    }
  }
};
</script>


// <style lang="less" scoped>
// @import "../../less/new_less/common.less";

// .message {
//   width: 300px;
//   position: absolute;
//   z-index: 2000;
//   left: 50%;
//   top: 100px; //这个是我们最终的位置
//   margin-left: -150px;
//   padding: 10px;
//   line-height: 30px;
//   box-sizing: border-box;
//   .opacity(0.9);
//   .border-radius(3px);
//   .close {
//     display: block;
//     float: right;
//     color: #000;
//     border: 0;
//     padding: 0;
//     background: 0 0;
//     .opacity(0.2);
//     &:hover {
//       .opacity(0.5);
//     }
//   }
//   i {
//     margin-right: 5px;
//   }
// }

// .message-success {
//   &:extend(.bg-green);
//   border-color: darken(@green, 5%);
// }

// .message-danger,
// .message-error {
//   &:extend(.bg-red);
//   border-color: darken(@red, 5%);
// }

// .message-warning {
//   &:extend(.bg-yellow);
//   border-color: darken(@yellow, 5%);
// }

// .message-info {
//   &:extend(.bg-aqua);
//   border-color: darken(@aqua, 5%);
// }
// //这个是启动过渡的时候的元素的初始状态
// .fade-enter,
// .fade-leave-to {
//   top: -50px;
//   opacity: 0;
// }
// //这个是执行过渡的函数配置
// .fade-enter-active,
// .fade-leave-active {
//   transition: top 0.5s, opacity 0.5s;
// }
// </style>
