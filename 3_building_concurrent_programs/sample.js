var Rx = require('rx');

/* With a sampler */
var source = Rx.Observable.interval(100)
    .sample(Rx.Observable.interval(490))
    .take(2);

var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });

// => Next: 3
// => Next: 8
// => Complet
