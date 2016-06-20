/***
 * Excerpted from "Reactive Programming with RxJS",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/smreactjs for more book information.
***/

var codeLayers = {};
var quakeLayer = L.layerGroup([]).addTo(map);
var identity = Rx.helpers.identity; //(1)

function isHovering(element) {
  var over = Rx.DOM.mouseover(element).map(identity(true)); //(2)
  var out = Rx.DOM.mouseout(element).map(identity(false)); //(3)

  return over.merge(out); //(4)

}

function makeRow(props) {
  var row = document.createElement('tr');
  row.id = props.net + props.code;

  var date = new Date(props.time);
  var time = date.toString();
  [props.place, props.mag, time].forEach(function(text) {
    var cell = document.createElement('td');
    cell.textContent = text;
    row.appendChild(cell);
  });

  return row;
}

function initialize() {
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
    }).share()

  quakes.subscribe(function(quake) {
    var coords = quake.geometry.coordinates
    var size = quake.properties.mag * 10000

    var circle = L.circle([coords[1], coords[0]], size).addTo(map);
    quakeLayer.addLayer(circle);
    codeLayers[quake.id] = quakeLayer.getLayerId(circle);
  });

  var table = document.getElementById('quakes_info');

  function getRowFromEvent(event) {
    return Rx.Observable
      .fromEvent(table, event)
      .filter(function(event) { //(1)
        var el = event.target;
        return el.tagName === 'TD' && el.parentNode.id.length;
      })
      .pluck('target', 'parentNode') //(2)
      .distinctUntilChanged(); //(3)
  }

  getRowFromEvent('mouseover')
    .pairwise()
    .subscribe(function(rows) {
       var prevCircle = quakeLayer.getLayer(codeLayers[rows[0].id]);
       var currCircle = quakeLayer.getLayer(codeLayers[rows[1].id]);

       prevCircle.setStyle({ color: '#0000ff' });
       currCircle.setStyle({ color: '#ff0000' });
      });

  getRowFromEvent('click')
    .subscribe(function(row) {
       var circle = quakeLayer.getLayer(codeLayers[row.id]);
       map.panTo(circle.getLatLng());
      });

  quakes
    .pluck('properties')
    .map(makeRow)
    .subscribe(function(row) {
      table.appendChild(row);
    });
}

Rx.DOM.ready().subscribe(initialize);
