var Rx = require('rx'),
    fs = require('fs');

var readdir = Rx.Observable.fromNodeCallback(fs.readdir);

var source = readdir('./');

var subscription = source.subscribe(
  function(res) {
    console.log('List of the directories:', res);
  },
  function(err) {
    console.log('Error:', err);
  },
  function() {
    console.log('Done');
  }
)

