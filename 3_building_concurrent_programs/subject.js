var Rx = require('rx')

var subject = new Rx.Subject();

var source = Rx.Observable
  .interval(300)
  .map(function(i){
    return 'Interval message #' + i;
  })
  .take(15);

source.subscribe(subject);

var subscription = subject.subscribe(
  function onNext(val){
    console.log('onNext:',val)
  },
  function onError(err){
    console.log('onError:', err)
  },
  function onCompleted() {
    console.log('onCompleted')
  }
)

subject.onNext('Our Message #1')
subject.onNext('Our Message #2')

setTimeout(function() {
  subject.onNext('Our Message #3')
  subject.onCompleted()
}, 2000)
