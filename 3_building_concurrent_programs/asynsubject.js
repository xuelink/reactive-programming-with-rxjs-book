var Rx = require('rx')

// the differance between Subject and AsyncSubject
// var subject = new Rx.Subject();
var subject = new Rx.AsyncSubject();

var source = Rx.Observable
  .range(0,51)
  .delay(1000)

source.subscribe(subject);

var subscription = subject.subscribe(
  function onNext(val){
    console.log('Value :',val)
  },
  function onError(err){
    console.log('onError:', err)
  },
  function onCompleted() {
    console.log('onCompleted')
  }
)

