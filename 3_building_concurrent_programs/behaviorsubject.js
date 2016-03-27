var Rx = require('rx')

// the differance between Subject and AsyncSubject and BehaviourSubject
// var subject = new Rx.Subject();
// var subject = new Rx.AsyncSubject();
var subject = new Rx.BehaviorSubject('starting');

var source = Rx.Observable
  .interval(100)
  .take(20)

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

