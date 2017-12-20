<template>
  <button class="btn"
          :class="[`btn-${this.type}`
                  ,disabled?'btn-disabled':'']"
           @click.stop="handleClick">
    <Icon v-if="showIcon" :name="icon"></Icon>
    <slot></slot>
  </button>
</template>

<script>
import Icon from "@/components/Icon/Icon";
export default {
  components: {
    Icon
  },
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "normal"
    },
    icon: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showIcon: function() {
      if (typeof this.icon === "string" && this.icon.length > 0) return true;
      else return false;
    }
  },
  methods: {
    handleClick: function() {
      this.$emit("click");
    }
  }
};
</script>

