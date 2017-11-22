<template>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <dropdown-menu-item
      v-for="item in items"
      v-bind:item="item"></dropdown-menu-item>
  </ul>
</template>

<script>
import DropdownMenuItem from "./DropdownMenuItem";
export default {
  components: {
    DropdownMenuItem
  },
  props: ["items"]
};
</script>
