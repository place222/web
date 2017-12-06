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