var Rx = require('rx')

Rx.Observable
  .from([1,2,3,4,5,6,7,8,9])
  .filter(function(val) {
    return val % 2
  })
  .map(function(val) {
    return val * 10
  })
  .subscribe(function(i) {
    console.log(i)
  })
