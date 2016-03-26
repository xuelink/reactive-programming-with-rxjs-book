var Rx = require('rx');

Rx.Observable.from(['Adria', 'Jen', 'Sergi'])
  .subscribe(
    function(x) {
      console.log('Next:', x);
    },
    function(err) {
      console.log('Error:', err);
    },
    function() {
      console.log('Completed !');
    }
  );
