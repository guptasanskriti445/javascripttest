var map = new ol.Map({
    target: 'map',
    controls: ol.control.defaults().extend([
        new ol.control.FullScreen()
      ]),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([73.85,18.52]),
      zoom: 7
    })
  });
 