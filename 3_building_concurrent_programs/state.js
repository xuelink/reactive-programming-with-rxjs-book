var Rx = require('rx')

function updateDistance(acc, i){
  if (i % 2 === 0){
    acc += 1;
  }

  return acc
}

//
// Rx.Observable.prototype.scan(accumulator, [seed])
//
// [seed] (Any): The initial accumulator value.
//

var ticksObservable = Rx.Observable
  .interval(1000)
  .scan(updateDistance, 0)

ticksObservable.subscribe(function(evenTicks){
  console.log('Subscriber 1 - evenTicks:', evenTicks, 'so far..')
})

ticksObservable.subscribe(function(evenTicks){
  console.log('Subscriber 2 - evenTicks:', evenTicks, 'so far..')
})
