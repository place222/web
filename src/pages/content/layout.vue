<template>
  <div>
    <layout-row>
      <layout-col :span="24">1</layout-col>
    </layout-row>
    <layout-row>
      <layout-col :span="12">1</layout-col>
      <layout-col :span="12">2</layout-col>
    </layout-row>
    <layout-row>
      <layout-col :span="6">1</layout-col>
      <layout-col :span="6">2</layout-col>
      <layout-col :span="6">3</layout-col>
      <layout-col :span="6">4</layout-col>
    </layout-row>
  </div>
</template>


<script>
import LayoutRow from "@/components/layout/LayoutRow";
import LayoutCol from "@/components/layout/LayoutCol";
export default {
  components: {
    LayoutRow,
    LayoutCol
  }
};
</script>

