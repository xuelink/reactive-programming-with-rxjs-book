var Rx = require('rx');

var avg = Rx.Observable.range(0,5000)
  .reduce(function(prev, current){
    console.log('prev:',prev)
    return {
      sum: prev.sum + current,
      count: prev.count + 1
    };
  }, {sum: 0, count: 0})
  .map(function(i){
    return i.sum / i.count
  })

avg.subscribe(
  function(x){
    console.log('Average is :', x);
  },
  function(err){
    console.log('Error:',err);
  },
  function(){
    console.log('Completed !');
  }
)
