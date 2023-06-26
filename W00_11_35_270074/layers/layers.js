var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteMap_1 = new ol.layer.Tile({
            'title': 'Google Satellite Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_MultiHillShade_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Multi Hill Shade",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MultiHillShade_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-25010.231073, 6599191.252079, -16905.444469, 6607317.872900]
                            })
                        });
var lyr_SkyViewFactor_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sky View Factor",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SkyViewFactor_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-25010.231073, 6599191.252079, -16905.444469, 6607317.872900]
                            })
                        });
var format_AreaofInterest_4 = new ol.format.GeoJSON();
var features_AreaofInterest_4 = format_AreaofInterest_4.readFeatures(json_AreaofInterest_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaofInterest_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaofInterest_4.addFeatures(features_AreaofInterest_4);
var lyr_AreaofInterest_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaofInterest_4, 
                style: style_AreaofInterest_4,
                interactive: true,
                title: '<img src="styles/legend/AreaofInterest_4.png" /> Area of Interest'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelliteMap_1.setVisible(true);lyr_MultiHillShade_2.setVisible(true);lyr_SkyViewFactor_3.setVisible(true);lyr_AreaofInterest_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelliteMap_1,lyr_MultiHillShade_2,lyr_SkyViewFactor_3,lyr_AreaofInterest_4];
lyr_AreaofInterest_4.set('fieldAliases', {'id': 'id', 'line': 'line', });
lyr_AreaofInterest_4.set('fieldImages', {'id': '', 'line': '', });
lyr_AreaofInterest_4.set('fieldLabels', {'id': 'no label', 'line': 'no label', });
lyr_AreaofInterest_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});