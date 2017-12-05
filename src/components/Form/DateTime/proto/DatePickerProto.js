import DatePicker from '../js/datepicker'

export default {
  methods: {
    clearTable: function (ele) {
      ele.innerHTML = ''
    },
    buildTable: function (ele, days) {
      var index = 0
      for (var i = 0; i < 6; i++) {
        var tr = document.createElement('tr')
        for (var j = 0; j < 7; j++) {
          var td = document.createElement('td')
          td.innerHTML = days[index].date.getDate()
          tr.appendChild(td)
          ++index
        }
        ele.appendChild(tr)
      }
    },
    get42Days: function (year, month) {
      let dates = DatePicker.get42Days(year, month)
      let days = []
      let index = 0
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
          if (days[i] === undefined) {
            days[i] = []
          }
          days[i][j] = dates[index++]
        }
      }
      return days
    }
  }
}
