<template>
    <div class="dropdown" :class="open?'open':''">
      <dropdown-toggle @toggleclick="toggle" :toggle-title="toggleTitle"></dropdown-toggle>
      <transition name="menu">
        <dropdown-menu v-if="open" :items="items"></dropdown-menu>
      </transition>
    </div>
</template>

<script>
import DropdownMenu from "./DropdownMenu";
import DropdownToggle from "./DropdownToggle";

export default {
  components: {
    DropdownMenu,
    DropdownToggle
  },
  data() {
    return {
      timeout: null,
      open: this.isOpen,
      items: [{ text: "嘿嘿", href: "http://www.baidu.com" }]
    };
  },
  props: {
    toggleTitle: {
      default: "标题"
    },
    isOpen: {
      default: false
    }
  },
  methods: {
    toggle: function() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.open = !this.open;
      }, 500);
    }
  },
  watch: {
    isOpen(val) {
      this.open = val;
    },
    open(val) {
      this.$emit("open-state-change", val);
    }
  },
  mounted: function() {
    let { toggle } = this;
    this.$el.addEventListener("mouseleave", toggle);
  }
};
</script>

<style lang="less">
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.5s;
}
.menu-enter,
.menu-leave-to {
  opacity: 0;
}
</style>
