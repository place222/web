<template>
  <div class="calendar">
    <input type="text" :value="selectedDate.date|date">
    <div class="header">
        <div><a href="#" @click.stop="preYear">&lt;&lt;</a></div>
        <div><a href="#" @click.stop="preMonth">&lt;</a></div>
        <div>{{year+'年'+month+'月'}}</div>
        <div><a href="#" @click.stop="nextMonth">&gt;</a></div>
        <div><a href="#" @click.stop="nextYear">&gt;&gt;</a></div>
    </div>
    <table>
        <thead>
            <tr>
                <th>一</th>
                <th>二</th>
                <th>三</th>
                <th>四</th>
                <th>五</th>
                <th>六</th>
                <th>日</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(week,index) in days">
            <td v-for="date in week" @click.stop="selectDate(date)" :class="date.isSelected?'selected':''">{{date.date.getDate()}}</td>
          </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
import DatePickerProto from "./proto/DatePickerProto";
import './js/dateHelper'
const week = ['一','二','三','四','五','六','日']
export default {
  mixins: [DatePickerProto],
  data() {
    let now = new Date();
    return {
      selectedDate: {},
      days: null,
      year:now.getFullYear(),
      month:now.getMonth()+1
    };
  },
  methods: {
    selectDate:function(date){
      this.selectedDate.isSelected = false;
      date.isSelected = true;
      this.selectedDate = date;
    },
    preMonth:function(){
      this.month -=1;
      if(this.month===0){
        this.year -=1;
        this.month = 12;
      }
      this.days = this.get42Days(this.year,this.month-1)
    },
    nextMonth:function(){
      this.month +=1;
      if(this.month === 13){
        this.year+=1;
        this.month = 1;
      }
      this.days = this.get42Days(this.year,this.month-1)
    },
    preYear:function(){
      this.year -=1;
      this.days = this.get42Days(this.year,this.month-1)
    },
    nextYear:function(){
      this.year+=1;
      this.days = this.get42Days(this.year,this.month-1)
    }
  },
  mounted:function(){
    this.days = this.get42Days(this.year,this.month-1)
    console.log(this.days);
  }
};
</script>


<style lang="less" >
.calendar {
  border: 1px solid #eee;
  width: 300px;
}

.header {
  height: 50px;
  display: flex;
  line-height: 50px;
}

.header div {
  flex: 1;
  text-align: center;
}
.header div:nth-of-type(3){
  flex-grow:3;
}
.calendar table,
tr,
td,
th {
  border: 1px solid #eee;
}
td.selected{
  background:red;
}
.calendar table {
  width: 100%;
  border-collapse: collapse;
}

.calendar table td {
  text-align: center;
}

.header a {
  text-decoration: none;
}
</style>
