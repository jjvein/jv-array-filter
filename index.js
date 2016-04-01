"use strict"

var jvIsArray = require('jv-is-array')
//filter cb的参数为 

//hasOwnProperty 过滤数组中的非属性元素
//比如出现 var a = [], a['foo'] = 'bar'
var hasOwnProperty = Object.prototype.hasOwnProperty

module.exports = function(arr, func){

  if(!jvIsArray(arr)) return 
  if(!typeof func == 'function') func = function(){}

  if(arr.filter) return arr.filter(func)

  var i, ret = [], len=arr.length, item
  for(i=0; i<len; i++) {
    item = arr[i]
    if(hasOwnProperty.call(arr, i)) {
      if(func(item, i, arr)) ret.push(item)
    }
  }
  return ret
}
