<template>
  <div :class="alertClass">
    <button v-if="dismissable" type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
    <h4><i class="icon fa" :class="titleIcon"></i>{{title}}</h4>
    <slot>这里填写内容</slot>
  </div>
</template>

<script>
//弹出提示框 type4种类型 并且支持可关闭
export default {
  name: "alert",
  props: {
    title: {
      type: String,
      required: true,
      default: "标题"
    },
    content: {
      type: String,
      default: "内容"
    },
    dismissable: {
      default: false
    },
    // 1错误 2警告 3信息 4成功
    alerttype: {
      type: String,
      default: 1
    }
  },
  computed: {
    alertClass: function() {
      return {
        alert: true,
        "alert-dismissable": this.dismissable,
        "alert-success": this.alerttype == 4,
        "alert-info": this.alerttype == 3,
        "alert-warning": this.alerttype == 2,
        "alert-danger": this.alerttype == 1
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



<style lang="less">
@import "../../less/common.less";
/*
 * Component: alert
 * ----------------
 */

.alert {
  .border-radius(3px);
  h4 {
    font-weight: 600;
  }
  .icon {
    margin-right: 10px;
  }
  .close {
    color: #000;
    .opacity(0.2);
    &:hover {
      .opacity(0.5);
    }
  }
  a {
    color: #fff;
    text-decoration: underline;
  }
}

//Alert Variants
.alert-success {
  &:extend(.bg-green);
  border-color: darken(@green, 5%);
}

.alert-danger,
.alert-error {
  &:extend(.bg-red);
  border-color: darken(@red, 5%);
}

.alert-warning {
  &:extend(.bg-yellow);
  border-color: darken(@yellow, 5%);
}

.alert-info {
  &:extend(.bg-aqua);
  border-color: darken(@aqua, 5%);
}
</style>

