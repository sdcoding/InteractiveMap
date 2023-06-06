var wms_layers = [];


        var lyr_OpenStreetMapStandard_0 = new ol.layer.Tile({
            'title': 'Open Street Map Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_BeachyHeadSkyViewFactorVisualisation_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Beachy Head Sky View Factor Visualisation",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BeachyHeadSkyViewFactorVisualisation_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [26564.409476, 6574443.983524, 30252.080764, 6579317.121695]
                            })
                        });
var lyr_BeachyHeadMultiHillShadeVisualisation_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Beachy Head Multi Hill Shade Visualisation",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BeachyHeadMultiHillShadeVisualisation_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [26564.409476, 6574443.983524, 30252.080764, 6579317.121695]
                            })
                        });

lyr_OpenStreetMapStandard_0.setVisible(true);lyr_BeachyHeadSkyViewFactorVisualisation_1.setVisible(true);lyr_BeachyHeadMultiHillShadeVisualisation_2.setVisible(true);
var layersList = [lyr_OpenStreetMapStandard_0,lyr_BeachyHeadSkyViewFactorVisualisation_1,lyr_BeachyHeadMultiHillShadeVisualisation_2];
