<template>
<Container>
    <Content>
      <Form>
        <FormItem
          label="活动名称11"
          name="name"
          :rules="[{required:true,message:'名字必填'},{max:10,message:'长度不能超过10个字符'}]">
          <Input v-model="person.name"></Input>
        </FormItem>
        <FormItem label="活动区域"
          name="area"
          :rules="[{required:true,message:'活动区域必填'}]">
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
            <Button @click="handleClick">123</Button>
      </Form>
    </Content>
    <Content>
      <Form>
        <FormItem
          label="活动名称11"
          name="name"
          :rules="[{required:true,message:'名字必填'},{max:10,message:'长度不能超过10个字符'}]">
          <Input v-model="person.name"></Input>
        </FormItem>
        <FormItem label="活动区域"
          name="area"
          :rules="[{required:true,message:'活动区域必填'}]">
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
            <Button @click="handleClick">123</Button>
      </Form>
    </Content>
</Container>
</template>


<script>
import Row from "@/components/Grid/Row";
import Col from "@/components/Grid/Col";
import Container from '@/components/Grid/Container'
import Content from '@/components/Other/Content'

import CheckBox from "@/components/Form/CheckBox/CheckBox";
import CheckBoxGroup from "@/components/Form/CheckBox/CheckBoxGroup";

import Radio from "@/components/Form/Radio/Radio";
import Input from "@/components/Form/Input/Input";
import Select from "@/components/Form/Select/Select";
import Option from "@/components/Form/Select/Option";
import Button from "@/components/Button/Button";

import Form from "@/components/Form/Form/Form";
import FormItem from "@/components/Form/Form/FormItem";

import AsyncValidator from "async-validator";

export default {
  components: {
    Row,
    Col,
    Container,
    Content,
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
  created: function() {
    this.$http
      .get("http://localhost:3003/region")
      .then(res => {
        this.regions = res.data;
        return res;
      })
      .then(res => {
        console.log(`我是第二个回调下的${res}`);
      });
  },
  data() {
    return {
      person: {
        name: "",
        area: 0,
        properties: []
      },
      regions: [],
      rules: {
        name: [{ required: true, message: "名字不能为空" }],
        area: { required: true, message: "区域不能为空" },
        properties: { required: true, message: "活动性质不能为空" }
      }
    };
  },
  methods: {
    handleClick: function() {
      var validator = new AsyncValidator(rules);
      validator.validate(
        this.person,
        { firstFields: true },
        (errors, fields) => {
          if (errors) {
            console.log(errors);
          }
          this.$http
            .post("http://localhost:3003/persons", this.person)
            .then(res => {
              this.$message("成功");
            });
        }
      );
    }
  }
};
</script>
