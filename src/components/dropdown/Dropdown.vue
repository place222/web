<template>
    <div class="dropdown" :class="open?'open':''">

      <slot name="toggle"></slot>

      <slot name="menu"></slot>

    </div>
</template>

<script>
import sayHello from "@/mixins/sayHello";
import DropdownToggle from "@/components/dropdown/DropdownToggle";
export default {
  componentName: "DropDown",
  components: {
    DropdownToggle
  },
  mixins: [sayHello], //继承得扩展方法
  provide() {
    //提供一个可被子组件注入拿到的属性
    return {
      dropdown: this
    };
  },
  data() {
    return {
      delay: 250,
      open: false,
      timeout: null
    };
  },
  props: {},
  methods: {
    show: function() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.open = true;
      }, this.delay);
    },
    hide: function() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.open = false;
      }, this.delay);
    }
  },
  watch: {},
  created: function() {
    //注册通知的事件处理程序
    this.$on("dropdown-item-click", function(command) {
      this.$emit("command", command);
    });
    this.$on("dropdown-toggle-click", function() {
      this.open = !this.open;
    });
  },
  mounted: function() {
    //做hover的支持
    if (this.$slots.toggle) {
      this.$slots.toggle[0].elm.addEventListener("mouseenter", this.show);
      this.$slots.toggle[0].elm.addEventListener("mouseleave", this.hide);
    }
    if (this.$slots.menu) {
      this.$slots.menu[0].elm.addEventListener("mouseenter", this.show);
      this.$slots.menu[0].elm.addEventListener("mouseleave", this.hide);
    }
  }
};
</script>

