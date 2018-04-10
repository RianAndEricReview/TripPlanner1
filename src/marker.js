const mapboxgl = require('mapbox-gl')

const markers = {
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png'
}

const buildMarker = (eventType, coords) => {
  const markerDomEl = document.createElement('div')
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = markers[eventType] ? `url(${markers[eventType]})` : 'url(http://i.imgur.com/WbMOfMl.png)'
  return new mapboxgl.Marker(markerDomEl).setLngLat(coords)
}

module.exports = buildMarker


