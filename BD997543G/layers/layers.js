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
var lyr_BullockDownSkyViewFactorVisualisation_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Bullock Down Sky View Factor Visualisation",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BullockDownSkyViewFactorVisualisation_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [26377.089139, 6575834.217621, 29485.645180, 6578808.549441]
                            })
                        });
var lyr_BullockDownMultiHillShadeVisualisation_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Bullock Down Multi Hill Shade Visualisation",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BullockDownMultiHillShadeVisualisation_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [27033.067649, 6576431.474470, 28869.610747, 6578600.975876]
                            })
                        });
var format_AreaofInterest_3 = new ol.format.GeoJSON();
var features_AreaofInterest_3 = format_AreaofInterest_3.readFeatures(json_AreaofInterest_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaofInterest_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaofInterest_3.addFeatures(features_AreaofInterest_3);
var lyr_AreaofInterest_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaofInterest_3, 
                style: style_AreaofInterest_3,
                interactive: false,
                title: '<img src="styles/legend/AreaofInterest_3.png" /> Area of Interest'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BullockDownSkyViewFactorVisualisation_1.setVisible(true);lyr_BullockDownMultiHillShadeVisualisation_2.setVisible(true);lyr_AreaofInterest_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BullockDownSkyViewFactorVisualisation_1,lyr_BullockDownMultiHillShadeVisualisation_2,lyr_AreaofInterest_3];
lyr_AreaofInterest_3.set('fieldAliases', {'id': 'id', 'sfa': 'sfa', });
lyr_AreaofInterest_3.set('fieldImages', {'id': '', 'sfa': '', });
lyr_AreaofInterest_3.set('fieldLabels', {'id': 'no label', 'sfa': 'no label', });
lyr_AreaofInterest_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});