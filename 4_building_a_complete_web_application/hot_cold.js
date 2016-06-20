/***
 * Excerpted from "Reactive Programming with RxJS",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/smreactjs for more book information.
***/

var Rx = require('rx');

function printValue(value) {
  console.log(value);
}

var rangeToFive = Rx.Observable.range(1, 5);
var obs1 = rangeToFive.subscribe(printValue); // 1, 2, 3, 4, 5
var obs2 = Rx.Observable.just().delay(2000)
  .flatMap(function() {
    return rangeToFive.subscribe(printValue); // 1, 2, 3, 4, 5
  });

var source = Rx.Observable.interval(2000);
var observer1 = source.subscribe(function (x) {
  console.log('Observer 1, next value: ' + x);
});

var observer2 = source.subscribe(function (x) {
  console.log('Observer 2: next value: ' + x);
});

var source = Rx.Observable.interval(1000);
var observer1 = source.subscribe(function (x) {
  console.log('Observer 1: ' + x);
});

setTimeout(function() {
  var observer2 = source.subscribe(function (x) {
    console.log('Observer 2: ' + x);
  });
}, 3000);

// Create an Observable that yields a value every second
var source = Rx.Observable.interval(1000);
var publisher = source.publish();

// Even if we are subscribing, no values are pushed yet.
var observer1 = publisher.subscribe(function (x) {
  console.log('Observer 1: ' + x);
});

// publisher connects and starts publishing values
publisher.connect();

setTimeout(function() {
  // 5 seconds later, observer2 subscribes to it and starts receiving
  // current values, not the whole sequence.
  var observer2 = publisher.subscribe(function (x) {
    console.log('Observer 2: ' + x);
  });
}, 5000);
