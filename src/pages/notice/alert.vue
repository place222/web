<template>
<div>
  <alert dismissable="true" title="传入标题" alerttype="1"></alert>
  <callout title="传入标题">
    <p>哈哈</p>
  </callout>
</div>

</template>

<script>
import Alert from "@/components/Notice/alert/Alert";
import Callout from "@/components/Notice/callout/Callout";

export default {
  components: {
    Alert,
    Callout
  }
};
</script>
