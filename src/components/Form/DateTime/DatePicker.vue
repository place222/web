<template>
  <div class="calendar">
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
import DatePicker from "./datepicker";

export default {
  mounted: function() {
    function clearTable(ele) {
      ele.innerHTML = "";
    }

    function buildTable(ele, days) {
      var index = 0;
      for (var i = 0; i < 6; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < 7; j++) {
          var td = document.createElement("td");
          td.innerHTML = days[index].date.getDate();
          tr.appendChild(td);
          ++index;
        }
        ele.appendChild(tr);
      }
    }

    var tbody = document.querySelector("tbody");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    prev.addEventListener("click", function() {
      var days = new DatePicker(new Date(2017, 11)).get42Days();
      clearTable(tbody);
      buildTable(tbody, days);
    });
    next.addEventListener("click", function() {
      var days = new DatePicker(new Date(2017, 13)).get42Days();
      clearTable(tbody);
      buildTable(tbody, days);
    });

    var days = new DatePicker(new Date(2017, 12)).get42Days();
    buildTable(tbody, days);
  }
};
</script>


<style lang="less" >
.calendar {
  border: 1px solid #eee;
  width: 400px;
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
td {
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
