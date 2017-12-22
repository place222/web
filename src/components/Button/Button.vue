<template>
  <button class="btn"
          :class="[`btn-${this.type}`,`btn-${size}`,
                  ,disabled?'btn-disabled':'']"
          @click="handleClick">
    <Icon v-if="showIcon" :name="icon"></Icon>
    <slot></slot>
  </button>
</template>

<script>
const BUTTON_SIZE = ["normal", "large", "small"];
function oneOf(val, arrs) {
  if (Array.isArray(arrs)) {
    return arrs.indexOf(val) != -1;
  }
}
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
      default: "normal",
      validator: function(val) {
        return oneOf(val, BUTTON_SIZE);
      }
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
  methods:{
    handleClick(){
      console.log('click')
      this.$emit('click')
    }
  }
};
</script>

