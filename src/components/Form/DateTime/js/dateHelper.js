/**
 *
 * 日期帮助类
 *
 */


/**
 * 格式化日期
 * 月(M) 日(d) 小时(h) 分(m) 秒(s) 季度(q)
 * (new Date()).format('yyyy-MM-dd hh:mm:ss') = > 2006-01-22 12:22:23
 */
Date.prototype.format = function (str) {
  const o = {
    'y+': this.getFullYear(),
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds()
  }

  Object.keys(o).forEach(element => {
    str = str.replace(new RegExp(element), substr => {
      return String.prototype.padStart.call(o[element], substr.length, '0')
    })
  })
  return str
}
