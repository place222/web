<template>
  <div class="container">
    <Form direction="">
      <FormItem label="活动名称11">
         <Input v-model="person.name"></Input>
      </FormItem>
      <FormItem label="活动区域">
        <Select v-model="person.area">
          <Option v-for="item in regions" :key="item.id" :value="`${item.id}`">{{item.name}}</Option>
        </Select>
      </FormItem>
      <FormItem label="活动时间"></FormItem>
      <FormItem label="活动性质">
        <CheckBoxGroup v-model="person.properties">
          <CheckBox :value="1">美食餐厅线上活动x</CheckBox>
          <CheckBox :value="2">地推活动x</CheckBox>
          <CheckBox :value="3">线下主题活动x</CheckBox>
          <CheckBox :value="4">单纯品牌曝光xyz</CheckBox>
        </CheckBoxGroup>
      </FormItem>
      <FormItem label="特殊资源">
          <Radio>线上品牌赞助商</Radio>
          <Radio>线下场地免费</Radio>
      </FormItem>
       <FormItem>
          <Button @click="handleClick">123</Button>
      </FormItem>
    </Form>
  </div>
</template>


<script>
import GridRow from "@/components/Grid/GridRow";
import GridCol from "@/components/Grid/Gridcol";

import CheckBox from "@/components/Form/CheckBox/CheckBox";
import CheckBoxGroup from "@/components/Form/CheckBox/CheckBoxGroup";

import Radio from "@/components/Form/Radio/Radio";
import Input from "@/components/Form/Input";
import Select from "@/components/Form/Select/Select";
import Option from "@/components/Form/Select/Option";
import Button from "@/components/Button/Button";

import Form from "@/components/Form/Form/Form";
import FormItem from "@/components/Form/Form/FormItem";

import AsyncValidator from "async-validator";

export default {
  components: {
    GridRow,
    GridCol,
    CheckBox,
    CheckBoxGroup,
    Radio,
    Select,
    Option,
    Input,
    Button,
    Form,
    FormItem
  },
  created:function(){
    this.$http.get('http://localhost:3003/region')
    .then((res)=>{
      this.regions = res.data
    })
  },
  data() {
    return {
      person: {
        name: "",
        area: 0,
        properties: []
      },
      regions:[]
    };
  },
  methods: {
    handleClick: function() {
      var rules = {
        name: [
          { required: true, message: "名字不能为空" }
        ],
        area: { required: true, message: "区域不能为空" },
        properties: { required: true, message: "活动性质不能为空" }
      };
      var validator = new AsyncValidator(rules);
      validator.validate(
        this.person,
        { firstFields: true },
        (errors, fields) => {
          if (errors) {
            console.log(errors);
          }
          this.$http.post('http://localhost:3003/persons',this.person)
          .then((res)=>{
            console.log(res)
          })
        }
      );
    }
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
