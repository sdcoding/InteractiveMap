var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_BHSVF_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "BH SVF",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BHSVF_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [26564.409476, 6574443.983524, 30252.080764, 6579317.121695]
                            })
                        });
var lyr_BHMULTIHS_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "BH MULTI HS",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BHMULTIHS_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [26564.409476, 6574443.983524, 30252.080764, 6579317.121695]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_BHSVF_1.setVisible(true);lyr_BHMULTIHS_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BHSVF_1,lyr_BHMULTIHS_2];
