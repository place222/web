<script>
export default {
  beforeCreate: function() {
    console.log("beforeCreate 钩子执行");
  },
  created: function() {
    console.log("created 钩子执行");
  },
  beforeMount: function() {
    console.log("beforeMount 钩子执行");
  },
  mounted: function() {
    console.log("mounted 钩子执行");
  },
  beforeUpdate: function() {
    console.log("beforeUpdate 钩子执行");
  },
  updated: function() {
    console.log("updated 钩子执行");
  },
  beforeDestroy: function() {
    console.log("beforeDestroy 钩子执行");
  },
  destroyed: function() {
    console.log("destroyed 钩子执行");
  },
  render: function(h) {
    console.log("在没有el和template的情况下会使用这个函数来执行,这个函数拥有最高优先级");
  }
};
</script>
