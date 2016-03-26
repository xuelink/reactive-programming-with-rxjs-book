/***
 * Excerpted from "Reactive Programming with RxJS",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/smreactjs for more book information.
***/
var quakes = Rx.Observable
  .interval(5000)
  .flatMap(function() {
   return Rx.DOM.jsonpRequest({
      url: QUAKE_URL,
      jsonpCallback: 'eqfeed_callback'
    }).retry(3)
  })
  .flatMap(function(result) {
    return Rx.Observable.from(result.response.features);
  })
  .distinct(function(quake){
    return quake.properties.code
  })
quakes.subscribe(function(quake) {
  var coords = quake.geometry.coordinates
  var size = quake.properties.mag * 10000
  L.circle([coords[1], coords[0]], size).addTo(map);
});
