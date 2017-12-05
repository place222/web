<template>
  <div class="container">
    <Form direction="">
      <FormItem label="活动名称">
         <Input></Input>
      </FormItem>
      <FormItem label="活动区域">
        <Select>
            <Option>北京</Option>
            <Option>上海</Option>
            <Option>南京</Option>
            <Option>广州</Option>
          </Select>
      </FormItem>
      <FormItem label="活动时间"></FormItem>
      <FormItem label="活动性质">
          <CheckBox>美食餐厅线上活动</CheckBox>
          <CheckBox>地推活动</CheckBox>
          <CheckBox>线下主题活动</CheckBox>
          <CheckBox>单纯品牌曝光</CheckBox>
      </FormItem>
      <FormItem label="特殊资源">
          <Radio>线上品牌赞助商</Radio>
          <Radio>线下场地免费</Radio>
      </FormItem>
    </Form>
  </div>
</template>


<script>
import GridRow from "@/components/Grid/GridRow";
import GridCol from "@/components/Grid/Gridcol";

import CheckBox from "@/components/Form/CheckBox/CheckBox";
import Radio from "@/components/Form/Radio/Radio";
import Input from "@/components/Form/Input";
import Select from "@/components/Form/Select/Select";
import Option from "@/components/Form/Select/Option";
import Button from "@/components/Button/Button";

import Form from "@/components/Form/Form/Form";
import FormItem from "@/components/Form/Form/FormItem";

export default {
  components: {
    GridRow,
    GridCol,
    CheckBox,
    Radio,
    Select,
    Option,
    Input,
    Button,
    Form,
    FormItem
  }
};
</script>


<style lang="less" scoped>
.container {
  width: 600px;
  margin: 0 auto;
  padding: 50px;
}
.row {
  border: 1px solid #eee;
}
</style>
