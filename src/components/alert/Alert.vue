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
