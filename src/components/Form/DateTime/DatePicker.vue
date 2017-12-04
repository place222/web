<template>
  <div class="calendar">
    <input type="text">
    <div class="header">
        <div><a href="#" id="prev" @click="preMonth">&lt;</a></div>
        <div id="now">2017-02-22</div>
        <div>
            <a href="#" id="next">&gt;</a>
        </div>
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
         
        </tbody>
    </table>
  </div>
</template>
<script>
import DatePickerProto from "./proto/DatePickerProto";



export default {
  mixins: [DatePickerProto],
  data() {
    return {
      days: []
    };
  },
  methods: {
    preMonth: function() {
      var days = this.get42Days(2017, 11);
      this.clearTable(this.$refs.body);
      this.buildTable(this.$refs.body, days);
    },
    nextMonth: function() {
      var days = this.get42Days(2017, 13);
      this.clearTable(this.$refs.body);
      this.buildTable(this.$refs.body, days);
    }
  },
  mounted: function() {
    this.buildTable(this.$refs.body, this.get42Days());
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

.calendar table,
tr,
td,
th {
  border: 1px solid #eee;
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
