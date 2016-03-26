var Rx = require('rx');

var counter = Rx.Observable.interval(1000);

var subscription1 = counter.subscribe(function(i){
  console.log('Subscribtion 1:', i)
})

var subscription2 = counter.subscribe(function(i){
  console.log('Subscribtion 2:', i)
})

setTimeout(function(){
  console.log('Disposed Subscription 2');
  subscription2.dispose();
},4000)
