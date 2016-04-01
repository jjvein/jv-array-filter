var jvArrayFilter = require('../')
var expect = require('expect.js')

var func = function(item, i, arr) {
  if(item > 5) 
    return true

  return false
}
var ret, arr = [1, 3, 5, 7, 9]

describe('Test Suite', function(){
  it('Normal Test', function(){

    ret = jvArrayFilter(arr, func)
    expect(ret).to.be.an(Array)
    expect(ret).to.have.length(2)
  })

  it('Polyfills Test', function(){

    var oldFilter = Array.prototype.filter
    Array.prototype.filter = undefined
    ret = jvArrayFilter(arr, func)
    Array.prototype.filter = oldFilter

    expect(ret).to.be.an(Array)
    expect(ret).to.have.length(2)

  }), 

  it('Special Array', function() {
    
    arr = [1, 3, 'foo', , , 9,]
    ret = jvArrayFilter(arr, func)

    expect(ret).to.be.an(Array)
    expect(ret).to.have.length(1)
    expect(ret).to.contain(9)

  })
})


