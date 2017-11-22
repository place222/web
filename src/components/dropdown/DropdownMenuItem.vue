<template>
  <li
    :class="[item.isTitle?'dropdown-header':'',item.isSeparator?'separator':'',item.disabled?'disabled':'']">
    <a :href="item.href">{{item.text}}</a>
  </li>
</template>


<script>
export default {
  props: ["item"]
};
</script>
