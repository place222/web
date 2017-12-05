<template>
  <div class="calendar">
    <input type="text">
    <div class="header">
        <div><a href="#" id="prev">&lt;</a></div>
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
import DatePickerProto from './DatePickerProto'

export default {
  mixins:[DatePickerProto],

  mounted: function() {
    var _this = this;
    var tbody = document.querySelector("tbody");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    prev.addEventListener("click", function() {
      var days = _this.get42Days(2017, 11);
      _this.clearTable(tbody);
      _this.buildTable(tbody, days);
    });
    next.addEventListener("click", function() {
      var days = _this.get42Days(2017, 13);
      _this.clearTable(tbody);
      _this.buildTable(tbody, days);
    });

    this.buildTable(tbody, this.get42Days(2017,12));
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
