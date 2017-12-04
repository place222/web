function DatePicker() {
  this.days = []
  this.now = new Date()
}

DatePicker.prototype.getNow = function () {
  return this.now
}

DatePicker.prototype.get42Days = function (year, month) {
  var now = new Date()
  var thisMonthOfYear = now.getFullYear() // 2017
  var thisMonthOfMonth = now.getMonth() // 10
  var thisMonthOfDate = now.getDate() // 28
  var thisMonthOfDays = new Date(thisMonthOfYear, thisMonthOfMonth + 1, 0).getDate() // 当前月份的天数
  var day = new Date(thisMonthOfYear, thisMonthOfMonth).getDay() // 1号星期几

  console.log(`当前年份:${thisMonthOfYear}-当前月份:${thisMonthOfMonth}-当前日期:${thisMonthOfDate}-这个月的天数:${thisMonthOfDays}`)
  console.log(`这个月的1号是星期${day}`)
  var lastMonthOfDays = day - 1 // 上个月需要几天

  var nextMonthOfDays = 42 - lastMonthOfDays - thisMonthOfDays // 下个月需要几天
  var i = 0
  for (i = 1 - lastMonthOfDays; i <= 0; i++) {
    this.days.push({
      date: new Date(thisMonthOfYear, thisMonthOfMonth, i)
    })
  }
  for (i = 1; i < thisMonthOfDays + 1; i++) {
    this.days.push({
      date: new Date(thisMonthOfYear, thisMonthOfMonth, i)
    })
  }
  for (i = 1; i < nextMonthOfDays + 1; i++) {
    this.days.push({
      date: new Date(thisMonthOfYear, thisMonthOfMonth + 1, i)
    })
  }
  return this.days
}

export default DatePicker
