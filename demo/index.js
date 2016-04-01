var jvArrayFilter = require('../')
var log = console.log
var func = function(item, i, arr) {
  if(item > 5) 
    return true

  return false
}
var ret, arr
arr = [1, 3, 5, 7, 9]

ret = jvArrayFilter(arr, func)
log(ret)

arr['foo'] = 'bar'
ret = jvArrayFilter(arr, func)
log(ret)

//这里我们手动的改写prototype函数
var oldFilter = Array.prototype.filter
Array.prototype.filter = undefined
ret = jvArrayFilter(arr, func)
log(ret)

Array.prototype.filter = oldFilter

arr = [1, 3, 'foo', , , 9,]
ret = jvArrayFilter(arr, func)
log(ret)




