<template>
  <button
  class="btn btn-default dropdown-toggle"
  type="button"
  id="dropdownMenu1"
  data-toggle="dropdown"
  aria-haspopup="true"
  aria-expanded="true"
  @click="toggleClick">
    {{toggleTitle}}
    <span class="caret"></span>
  </button>
</template>


<script>
export default {
  props: {
    toggleTitle: ""
  },
  methods: {
    toggleClick: function() {
      this.$emit("toggleclick");
    }
  }
};
</script>
