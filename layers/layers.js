var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Strategicportland_2 = new ol.format.GeoJSON();
var features_Strategicportland_2 = format_Strategicportland_2.readFeatures(json_Strategicportland_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strategicportland_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strategicportland_2.addFeatures(features_Strategicportland_2);
var lyr_Strategicportland_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strategicportland_2, 
                style: style_Strategicportland_2,
                popuplayertitle: 'Strategic port land',
                interactive: false,
                title: '<img src="styles/legend/Strategicportland_2.png" /> Strategic port land'
            });
var format_Limiteddevelopment_3 = new ol.format.GeoJSON();
var features_Limiteddevelopment_3 = format_Limiteddevelopment_3.readFeatures(json_Limiteddevelopment_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limiteddevelopment_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limiteddevelopment_3.addFeatures(features_Limiteddevelopment_3);
var lyr_Limiteddevelopment_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limiteddevelopment_3, 
                style: style_Limiteddevelopment_3,
                popuplayertitle: 'Limited development',
                interactive: false,
                title: '<img src="styles/legend/Limiteddevelopment_3.png" /> Limited development'
            });
var format_Specialpurpose_4 = new ol.format.GeoJSON();
var features_Specialpurpose_4 = format_Specialpurpose_4.readFeatures(json_Specialpurpose_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Specialpurpose_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Specialpurpose_4.addFeatures(features_Specialpurpose_4);
var lyr_Specialpurpose_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Specialpurpose_4, 
                style: style_Specialpurpose_4,
                popuplayertitle: 'Special purpose',
                interactive: false,
                title: '<img src="styles/legend/Specialpurpose_4.png" /> Special purpose'
            });
var format_Communityfacilities_5 = new ol.format.GeoJSON();
var features_Communityfacilities_5 = format_Communityfacilities_5.readFeatures(json_Communityfacilities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communityfacilities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communityfacilities_5.addFeatures(features_Communityfacilities_5);
var lyr_Communityfacilities_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communityfacilities_5, 
                style: style_Communityfacilities_5,
                popuplayertitle: 'Community facilities',
                interactive: false,
                title: '<img src="styles/legend/Communityfacilities_5.png" /> Community facilities'
            });
var format_Highimpactindustry_6 = new ol.format.GeoJSON();
var features_Highimpactindustry_6 = format_Highimpactindustry_6.readFeatures(json_Highimpactindustry_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Highimpactindustry_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Highimpactindustry_6.addFeatures(features_Highimpactindustry_6);
var lyr_Highimpactindustry_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Highimpactindustry_6, 
                style: style_Highimpactindustry_6,
                popuplayertitle: 'High impact industry',
                interactive: false,
                title: '<img src="styles/legend/Highimpactindustry_6.png" /> High impact industry'
            });
var format_Industry_7 = new ol.format.GeoJSON();
var features_Industry_7 = format_Industry_7.readFeatures(json_Industry_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industry_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industry_7.addFeatures(features_Industry_7);
var lyr_Industry_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industry_7, 
                style: style_Industry_7,
                popuplayertitle: 'Industry',
                interactive: false,
                title: '<img src="styles/legend/Industry_7.png" /> Industry'
            });
var format_Environmentalmanagementandconservation_8 = new ol.format.GeoJSON();
var features_Environmentalmanagementandconservation_8 = format_Environmentalmanagementandconservation_8.readFeatures(json_Environmentalmanagementandconservation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Environmentalmanagementandconservation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Environmentalmanagementandconservation_8.addFeatures(features_Environmentalmanagementandconservation_8);
var lyr_Environmentalmanagementandconservation_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Environmentalmanagementandconservation_8, 
                style: style_Environmentalmanagementandconservation_8,
                popuplayertitle: 'Environmental management and conservation',
                interactive: false,
                title: '<img src="styles/legend/Environmentalmanagementandconservation_8.png" /> Environmental management and conservation'
            });
var format_Sportandrecreation_9 = new ol.format.GeoJSON();
var features_Sportandrecreation_9 = format_Sportandrecreation_9.readFeatures(json_Sportandrecreation_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sportandrecreation_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sportandrecreation_9.addFeatures(features_Sportandrecreation_9);
var lyr_Sportandrecreation_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sportandrecreation_9, 
                style: style_Sportandrecreation_9,
                popuplayertitle: 'Sport and recreation',
                interactive: false,
                title: '<img src="styles/legend/Sportandrecreation_9.png" /> Sport and recreation'
            });
var format_Openspace_10 = new ol.format.GeoJSON();
var features_Openspace_10 = format_Openspace_10.readFeatures(json_Openspace_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Openspace_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Openspace_10.addFeatures(features_Openspace_10);
var lyr_Openspace_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Openspace_10, 
                style: style_Openspace_10,
                popuplayertitle: 'Open space',
                interactive: false,
                title: '<img src="styles/legend/Openspace_10.png" /> Open space'
            });
var format_Rural_11 = new ol.format.GeoJSON();
var features_Rural_11 = format_Rural_11.readFeatures(json_Rural_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rural_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rural_11.addFeatures(features_Rural_11);
var lyr_Rural_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rural_11, 
                style: style_Rural_11,
                popuplayertitle: 'Rural',
                interactive: false,
                title: '<img src="styles/legend/Rural_11.png" /> Rural'
            });
var format_Specialisedcentre_12 = new ol.format.GeoJSON();
var features_Specialisedcentre_12 = format_Specialisedcentre_12.readFeatures(json_Specialisedcentre_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Specialisedcentre_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Specialisedcentre_12.addFeatures(features_Specialisedcentre_12);
var lyr_Specialisedcentre_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Specialisedcentre_12, 
                style: style_Specialisedcentre_12,
                popuplayertitle: 'Specialised centre',
                interactive: false,
                title: '<img src="styles/legend/Specialisedcentre_12.png" /> Specialised centre'
            });
var format_Ruralresidential_13 = new ol.format.GeoJSON();
var features_Ruralresidential_13 = format_Ruralresidential_13.readFeatures(json_Ruralresidential_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruralresidential_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruralresidential_13.addFeatures(features_Ruralresidential_13);
var lyr_Ruralresidential_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruralresidential_13, 
                style: style_Ruralresidential_13,
                popuplayertitle: 'Rural residential',
                interactive: false,
                title: '<img src="styles/legend/Ruralresidential_13.png" /> Rural residential'
            });
var format_Localcentre_14 = new ol.format.GeoJSON();
var features_Localcentre_14 = format_Localcentre_14.readFeatures(json_Localcentre_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localcentre_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localcentre_14.addFeatures(features_Localcentre_14);
var lyr_Localcentre_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localcentre_14, 
                style: style_Localcentre_14,
                popuplayertitle: 'Local centre',
                interactive: false,
                title: '<img src="styles/legend/Localcentre_14.png" /> Local centre'
            });
var format_Neighbourhoodcentre_15 = new ol.format.GeoJSON();
var features_Neighbourhoodcentre_15 = format_Neighbourhoodcentre_15.readFeatures(json_Neighbourhoodcentre_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neighbourhoodcentre_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neighbourhoodcentre_15.addFeatures(features_Neighbourhoodcentre_15);
var lyr_Neighbourhoodcentre_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neighbourhoodcentre_15, 
                style: style_Neighbourhoodcentre_15,
                popuplayertitle: 'Neighbourhood centre',
                interactive: false,
                title: '<img src="styles/legend/Neighbourhoodcentre_15.png" /> Neighbourhood centre'
            });
var format_Districtcentre_16 = new ol.format.GeoJSON();
var features_Districtcentre_16 = format_Districtcentre_16.readFeatures(json_Districtcentre_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districtcentre_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districtcentre_16.addFeatures(features_Districtcentre_16);
var lyr_Districtcentre_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Districtcentre_16, 
                style: style_Districtcentre_16,
                popuplayertitle: 'District centre',
                interactive: false,
                title: '<img src="styles/legend/Districtcentre_16.png" /> District centre'
            });
var format_Majorcentre_17 = new ol.format.GeoJSON();
var features_Majorcentre_17 = format_Majorcentre_17.readFeatures(json_Majorcentre_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Majorcentre_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Majorcentre_17.addFeatures(features_Majorcentre_17);
var lyr_Majorcentre_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Majorcentre_17, 
                style: style_Majorcentre_17,
                popuplayertitle: 'Major centre',
                interactive: false,
                title: '<img src="styles/legend/Majorcentre_17.png" /> Major centre'
            });
var format_Principalcentre_18 = new ol.format.GeoJSON();
var features_Principalcentre_18 = format_Principalcentre_18.readFeatures(json_Principalcentre_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Principalcentre_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Principalcentre_18.addFeatures(features_Principalcentre_18);
var lyr_Principalcentre_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Principalcentre_18, 
                style: style_Principalcentre_18,
                popuplayertitle: 'Principal centre',
                interactive: false,
                title: '<img src="styles/legend/Principalcentre_18.png" /> Principal centre'
            });
var format_Highdensityresidential_19 = new ol.format.GeoJSON();
var features_Highdensityresidential_19 = format_Highdensityresidential_19.readFeatures(json_Highdensityresidential_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Highdensityresidential_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Highdensityresidential_19.addFeatures(features_Highdensityresidential_19);
var lyr_Highdensityresidential_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Highdensityresidential_19, 
                style: style_Highdensityresidential_19,
                popuplayertitle: 'High density residential',
                interactive: false,
                title: '<img src="styles/legend/Highdensityresidential_19.png" /> High density residential'
            });
var format_Mediumdensityresidential_20 = new ol.format.GeoJSON();
var features_Mediumdensityresidential_20 = format_Mediumdensityresidential_20.readFeatures(json_Mediumdensityresidential_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mediumdensityresidential_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mediumdensityresidential_20.addFeatures(features_Mediumdensityresidential_20);
var lyr_Mediumdensityresidential_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mediumdensityresidential_20, 
                style: style_Mediumdensityresidential_20,
                popuplayertitle: 'Medium density residential',
                interactive: false,
                title: '<img src="styles/legend/Mediumdensityresidential_20.png" /> Medium density residential'
            });
var format_Emergingcommunity_21 = new ol.format.GeoJSON();
var features_Emergingcommunity_21 = format_Emergingcommunity_21.readFeatures(json_Emergingcommunity_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Emergingcommunity_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emergingcommunity_21.addFeatures(features_Emergingcommunity_21);
var lyr_Emergingcommunity_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emergingcommunity_21, 
                style: style_Emergingcommunity_21,
                popuplayertitle: 'Emerging community',
                interactive: false,
                title: '<img src="styles/legend/Emergingcommunity_21.png" /> Emerging community'
            });
var format_Lowdensityresidential_22 = new ol.format.GeoJSON();
var features_Lowdensityresidential_22 = format_Lowdensityresidential_22.readFeatures(json_Lowdensityresidential_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lowdensityresidential_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lowdensityresidential_22.addFeatures(features_Lowdensityresidential_22);
var lyr_Lowdensityresidential_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lowdensityresidential_22, 
                style: style_Lowdensityresidential_22,
                popuplayertitle: 'Low density residential',
                interactive: false,
                title: '<img src="styles/legend/Lowdensityresidential_22.png" /> Low density residential'
            });
var format_FTMFutureTrunkMains_23 = new ol.format.GeoJSON();
var features_FTMFutureTrunkMains_23 = format_FTMFutureTrunkMains_23.readFeatures(json_FTMFutureTrunkMains_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FTMFutureTrunkMains_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FTMFutureTrunkMains_23.addFeatures(features_FTMFutureTrunkMains_23);
var lyr_FTMFutureTrunkMains_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FTMFutureTrunkMains_23, 
                style: style_FTMFutureTrunkMains_23,
                popuplayertitle: 'FTM - Future Trunk Mains',
                interactive: false,
    title: 'FTM - Future Trunk Mains<br />\
    <img src="styles/legend/FTMFutureTrunkMains_23_0.png" /> Acquire Easement<br />\
    <img src="styles/legend/FTMFutureTrunkMains_23_1.png" /> Channel (Lined)<br />\
    <img src="styles/legend/FTMFutureTrunkMains_23_2.png" /> Channel (Unlined)<br />\
    <img src="styles/legend/FTMFutureTrunkMains_23_3.png" /> Drainage Conduit (Pipe)<br />'
        });
var format_PRWTPProposedRubyannaWastewaterTreatmentPlant_24 = new ol.format.GeoJSON();
var features_PRWTPProposedRubyannaWastewaterTreatmentPlant_24 = format_PRWTPProposedRubyannaWastewaterTreatmentPlant_24.readFeatures(json_PRWTPProposedRubyannaWastewaterTreatmentPlant_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRWTPProposedRubyannaWastewaterTreatmentPlant_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRWTPProposedRubyannaWastewaterTreatmentPlant_24.addFeatures(features_PRWTPProposedRubyannaWastewaterTreatmentPlant_24);
var lyr_PRWTPProposedRubyannaWastewaterTreatmentPlant_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRWTPProposedRubyannaWastewaterTreatmentPlant_24, 
                style: style_PRWTPProposedRubyannaWastewaterTreatmentPlant_24,
                popuplayertitle: 'PRWTP - Proposed Rubyanna Wastewater Treatment Plant',
                interactive: false,
                title: '<img src="styles/legend/PRWTPProposedRubyannaWastewaterTreatmentPlant_24.png" /> PRWTP - Proposed Rubyanna Wastewater Treatment Plant'
            });
var format_WTPWastewaterTreatmentPlant_25 = new ol.format.GeoJSON();
var features_WTPWastewaterTreatmentPlant_25 = format_WTPWastewaterTreatmentPlant_25.readFeatures(json_WTPWastewaterTreatmentPlant_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WTPWastewaterTreatmentPlant_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WTPWastewaterTreatmentPlant_25.addFeatures(features_WTPWastewaterTreatmentPlant_25);
var lyr_WTPWastewaterTreatmentPlant_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WTPWastewaterTreatmentPlant_25, 
                style: style_WTPWastewaterTreatmentPlant_25,
                popuplayertitle: 'WTP - Wastewater Treatment Plant',
                interactive: false,
                title: '<img src="styles/legend/WTPWastewaterTreatmentPlant_25.png" /> WTP - Wastewater Treatment Plant'
            });
var format_WTPBWastewaterTreatmentPlantBuffer_26 = new ol.format.GeoJSON();
var features_WTPBWastewaterTreatmentPlantBuffer_26 = format_WTPBWastewaterTreatmentPlantBuffer_26.readFeatures(json_WTPBWastewaterTreatmentPlantBuffer_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WTPBWastewaterTreatmentPlantBuffer_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WTPBWastewaterTreatmentPlantBuffer_26.addFeatures(features_WTPBWastewaterTreatmentPlantBuffer_26);
var lyr_WTPBWastewaterTreatmentPlantBuffer_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WTPBWastewaterTreatmentPlantBuffer_26, 
                style: style_WTPBWastewaterTreatmentPlantBuffer_26,
                popuplayertitle: 'WTPB - Wastewater Treatment Plant Buffer',
                interactive: false,
                title: '<img src="styles/legend/WTPBWastewaterTreatmentPlantBuffer_26.png" /> WTPB - Wastewater Treatment Plant Buffer'
            });
var format_WMFBWasteManagementFacilityBuffer_27 = new ol.format.GeoJSON();
var features_WMFBWasteManagementFacilityBuffer_27 = format_WMFBWasteManagementFacilityBuffer_27.readFeatures(json_WMFBWasteManagementFacilityBuffer_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WMFBWasteManagementFacilityBuffer_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WMFBWasteManagementFacilityBuffer_27.addFeatures(features_WMFBWasteManagementFacilityBuffer_27);
var lyr_WMFBWasteManagementFacilityBuffer_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WMFBWasteManagementFacilityBuffer_27, 
                style: style_WMFBWasteManagementFacilityBuffer_27,
                popuplayertitle: 'WMFB - Waste Management Facility Buffer',
                interactive: false,
                title: '<img src="styles/legend/WMFBWasteManagementFacilityBuffer_27.png" /> WMFB - Waste Management Facility Buffer'
            });
var format_WMFWasteManagementFacility_28 = new ol.format.GeoJSON();
var features_WMFWasteManagementFacility_28 = format_WMFWasteManagementFacility_28.readFeatures(json_WMFWasteManagementFacility_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WMFWasteManagementFacility_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WMFWasteManagementFacility_28.addFeatures(features_WMFWasteManagementFacility_28);
var lyr_WMFWasteManagementFacility_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WMFWasteManagementFacility_28, 
                style: style_WMFWasteManagementFacility_28,
                popuplayertitle: 'WMF - Waste Management Facility',
                interactive: false,
                title: '<img src="styles/legend/WMFWasteManagementFacility_28.png" /> WMF - Waste Management Facility'
            });
var format_STSASeaTurtleSensitiveArea_29 = new ol.format.GeoJSON();
var features_STSASeaTurtleSensitiveArea_29 = format_STSASeaTurtleSensitiveArea_29.readFeatures(json_STSASeaTurtleSensitiveArea_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STSASeaTurtleSensitiveArea_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STSASeaTurtleSensitiveArea_29.addFeatures(features_STSASeaTurtleSensitiveArea_29);
var lyr_STSASeaTurtleSensitiveArea_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STSASeaTurtleSensitiveArea_29, 
                style: style_STSASeaTurtleSensitiveArea_29,
                popuplayertitle: 'STSA - Sea Turtle Sensitive Area',
                interactive: false,
    title: 'STSA - Sea Turtle Sensitive Area<br />\
    <img src="styles/legend/STSASeaTurtleSensitiveArea_29_0.png" /> <br />'
        });
var format_SCRCBStateControlledRoadCorridorBuffer_30 = new ol.format.GeoJSON();
var features_SCRCBStateControlledRoadCorridorBuffer_30 = format_SCRCBStateControlledRoadCorridorBuffer_30.readFeatures(json_SCRCBStateControlledRoadCorridorBuffer_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCRCBStateControlledRoadCorridorBuffer_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCRCBStateControlledRoadCorridorBuffer_30.addFeatures(features_SCRCBStateControlledRoadCorridorBuffer_30);
var lyr_SCRCBStateControlledRoadCorridorBuffer_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCRCBStateControlledRoadCorridorBuffer_30, 
                style: style_SCRCBStateControlledRoadCorridorBuffer_30,
                popuplayertitle: 'SCRCB - State Controlled Road Corridor Buffer',
                interactive: false,
                title: '<img src="styles/legend/SCRCBStateControlledRoadCorridorBuffer_30.png" /> SCRCB - State Controlled Road Corridor Buffer'
            });
var format_SLSteepLand_31 = new ol.format.GeoJSON();
var features_SLSteepLand_31 = format_SLSteepLand_31.readFeatures(json_SLSteepLand_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLSteepLand_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLSteepLand_31.addFeatures(features_SLSteepLand_31);
var lyr_SLSteepLand_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLSteepLand_31, 
                style: style_SLSteepLand_31,
                popuplayertitle: 'SL - Steep Land',
                interactive: false,
                title: '<img src="styles/legend/SLSteepLand_31.png" /> SL - Steep Land'
            });
var format_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32 = new ol.format.GeoJSON();
var features_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32 = format_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32.readFeatures(json_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32.addFeatures(features_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32);
var lyr_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32, 
                style: style_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32,
                popuplayertitle: 'PRWTPB - Proposed Rubyanna Wastewater Treatment Plant Buffer',
                interactive: false,
                title: '<img src="styles/legend/PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32.png" /> PRWTPB - Proposed Rubyanna Wastewater Treatment Plant Buffer'
            });
var format_FPFuturePathways_33 = new ol.format.GeoJSON();
var features_FPFuturePathways_33 = format_FPFuturePathways_33.readFeatures(json_FPFuturePathways_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPFuturePathways_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPFuturePathways_33.addFeatures(features_FPFuturePathways_33);
var lyr_FPFuturePathways_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FPFuturePathways_33, 
                style: style_FPFuturePathways_33,
                popuplayertitle: 'FP - Future Pathways',
                interactive: false,
                title: '<img src="styles/legend/FPFuturePathways_33.png" /> FP - Future Pathways'
            });
var format_FRFutureRoads_34 = new ol.format.GeoJSON();
var features_FRFutureRoads_34 = format_FRFutureRoads_34.readFeatures(json_FRFutureRoads_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRFutureRoads_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRFutureRoads_34.addFeatures(features_FRFutureRoads_34);
var lyr_FRFutureRoads_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FRFutureRoads_34, 
                style: style_FRFutureRoads_34,
                popuplayertitle: 'FR - Future Roads',
                interactive: false,
                title: '<img src="styles/legend/FRFutureRoads_34.png" /> FR - Future Roads'
            });
var format_OAOperationalAirspace_35 = new ol.format.GeoJSON();
var features_OAOperationalAirspace_35 = format_OAOperationalAirspace_35.readFeatures(json_OAOperationalAirspace_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OAOperationalAirspace_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OAOperationalAirspace_35.addFeatures(features_OAOperationalAirspace_35);
var lyr_OAOperationalAirspace_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OAOperationalAirspace_35, 
                style: style_OAOperationalAirspace_35,
                popuplayertitle: 'OA - Operational Airspace',
                interactive: false,
                title: '<img src="styles/legend/OAOperationalAirspace_35.png" /> OA - Operational Airspace'
            });
var format_GPBGasPipelineBuffer_36 = new ol.format.GeoJSON();
var features_GPBGasPipelineBuffer_36 = format_GPBGasPipelineBuffer_36.readFeatures(json_GPBGasPipelineBuffer_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GPBGasPipelineBuffer_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPBGasPipelineBuffer_36.addFeatures(features_GPBGasPipelineBuffer_36);
var lyr_GPBGasPipelineBuffer_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPBGasPipelineBuffer_36, 
                style: style_GPBGasPipelineBuffer_36,
                popuplayertitle: 'GPB - Gas Pipeline Buffer',
                interactive: false,
                title: '<img src="styles/legend/GPBGasPipelineBuffer_36.png" /> GPB - Gas Pipeline Buffer'
            });
var format_TRSATransportRouteSeparationArea_37 = new ol.format.GeoJSON();
var features_TRSATransportRouteSeparationArea_37 = format_TRSATransportRouteSeparationArea_37.readFeatures(json_TRSATransportRouteSeparationArea_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRSATransportRouteSeparationArea_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRSATransportRouteSeparationArea_37.addFeatures(features_TRSATransportRouteSeparationArea_37);
var lyr_TRSATransportRouteSeparationArea_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRSATransportRouteSeparationArea_37, 
                style: style_TRSATransportRouteSeparationArea_37,
                popuplayertitle: 'TRSA - Transport Route Separation Area',
                interactive: false,
                title: '<img src="styles/legend/TRSATransportRouteSeparationArea_37.png" /> TRSA - Transport Route Separation Area'
            });
var format_LACSLLotsAffectedbyCoastalSetbackLine_38 = new ol.format.GeoJSON();
var features_LACSLLotsAffectedbyCoastalSetbackLine_38 = format_LACSLLotsAffectedbyCoastalSetbackLine_38.readFeatures(json_LACSLLotsAffectedbyCoastalSetbackLine_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LACSLLotsAffectedbyCoastalSetbackLine_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LACSLLotsAffectedbyCoastalSetbackLine_38.addFeatures(features_LACSLLotsAffectedbyCoastalSetbackLine_38);
var lyr_LACSLLotsAffectedbyCoastalSetbackLine_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LACSLLotsAffectedbyCoastalSetbackLine_38, 
                style: style_LACSLLotsAffectedbyCoastalSetbackLine_38,
                popuplayertitle: 'LACSL - Lots Affected by Coastal Setback Line',
                interactive: false,
                title: '<img src="styles/legend/LACSLLotsAffectedbyCoastalSetbackLine_38.png" /> LACSL - Lots Affected by Coastal Setback Line'
            });
var format_MEIBMajorElectricityInfrastructureBuffer_39 = new ol.format.GeoJSON();
var features_MEIBMajorElectricityInfrastructureBuffer_39 = format_MEIBMajorElectricityInfrastructureBuffer_39.readFeatures(json_MEIBMajorElectricityInfrastructureBuffer_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MEIBMajorElectricityInfrastructureBuffer_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MEIBMajorElectricityInfrastructureBuffer_39.addFeatures(features_MEIBMajorElectricityInfrastructureBuffer_39);
var lyr_MEIBMajorElectricityInfrastructureBuffer_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MEIBMajorElectricityInfrastructureBuffer_39, 
                style: style_MEIBMajorElectricityInfrastructureBuffer_39,
                popuplayertitle: 'MEIB - Major Electricity Infrastructure Buffer',
                interactive: false,
                title: '<img src="styles/legend/MEIBMajorElectricityInfrastructureBuffer_39.png" /> MEIB - Major Electricity Infrastructure Buffer'
            });
var format_MESBMajorElectricitySubstationBuffer_40 = new ol.format.GeoJSON();
var features_MESBMajorElectricitySubstationBuffer_40 = format_MESBMajorElectricitySubstationBuffer_40.readFeatures(json_MESBMajorElectricitySubstationBuffer_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MESBMajorElectricitySubstationBuffer_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MESBMajorElectricitySubstationBuffer_40.addFeatures(features_MESBMajorElectricitySubstationBuffer_40);
var lyr_MESBMajorElectricitySubstationBuffer_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MESBMajorElectricitySubstationBuffer_40, 
                style: style_MESBMajorElectricitySubstationBuffer_40,
                popuplayertitle: 'MESB - Major Electricity Substation Buffer',
                interactive: false,
                title: '<img src="styles/legend/MESBMajorElectricitySubstationBuffer_40.png" /> MESB - Major Electricity Substation Buffer'
            });
var format_MTMiningTenements_41 = new ol.format.GeoJSON();
var features_MTMiningTenements_41 = format_MTMiningTenements_41.readFeatures(json_MTMiningTenements_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MTMiningTenements_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTMiningTenements_41.addFeatures(features_MTMiningTenements_41);
var lyr_MTMiningTenements_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MTMiningTenements_41, 
                style: style_MTMiningTenements_41,
                popuplayertitle: 'MT - Mining Tenements',
                interactive: false,
                title: '<img src="styles/legend/MTMiningTenements_41.png" /> MT - Mining Tenements'
            });
var format_RCRailCorridor_42 = new ol.format.GeoJSON();
var features_RCRailCorridor_42 = format_RCRailCorridor_42.readFeatures(json_RCRailCorridor_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RCRailCorridor_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RCRailCorridor_42.addFeatures(features_RCRailCorridor_42);
var lyr_RCRailCorridor_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RCRailCorridor_42, 
                style: style_RCRailCorridor_42,
                popuplayertitle: 'RC - Rail Corridor',
                interactive: false,
                title: '<img src="styles/legend/RCRailCorridor_42.png" /> RC - Rail Corridor'
            });
var format_RSAResourceSeparationArea_43 = new ol.format.GeoJSON();
var features_RSAResourceSeparationArea_43 = format_RSAResourceSeparationArea_43.readFeatures(json_RSAResourceSeparationArea_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSAResourceSeparationArea_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSAResourceSeparationArea_43.addFeatures(features_RSAResourceSeparationArea_43);
var lyr_RSAResourceSeparationArea_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSAResourceSeparationArea_43, 
                style: style_RSAResourceSeparationArea_43,
                popuplayertitle: 'RSA - Resource Separation Area',
                interactive: false,
                title: '<img src="styles/legend/RSAResourceSeparationArea_43.png" /> RSA - Resource Separation Area'
            });
var format_LHAPLocalHeritageAdjoiningProperties_44 = new ol.format.GeoJSON();
var features_LHAPLocalHeritageAdjoiningProperties_44 = format_LHAPLocalHeritageAdjoiningProperties_44.readFeatures(json_LHAPLocalHeritageAdjoiningProperties_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LHAPLocalHeritageAdjoiningProperties_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LHAPLocalHeritageAdjoiningProperties_44.addFeatures(features_LHAPLocalHeritageAdjoiningProperties_44);
var lyr_LHAPLocalHeritageAdjoiningProperties_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LHAPLocalHeritageAdjoiningProperties_44, 
                style: style_LHAPLocalHeritageAdjoiningProperties_44,
                popuplayertitle: 'LHAP - Local Heritage Adjoining Properties',
                interactive: false,
                title: '<img src="styles/legend/LHAPLocalHeritageAdjoiningProperties_44.png" /> LHAP - Local Heritage Adjoining Properties'
            });
var format_LHPLocalHeritagePlaces_45 = new ol.format.GeoJSON();
var features_LHPLocalHeritagePlaces_45 = format_LHPLocalHeritagePlaces_45.readFeatures(json_LHPLocalHeritagePlaces_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LHPLocalHeritagePlaces_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LHPLocalHeritagePlaces_45.addFeatures(features_LHPLocalHeritagePlaces_45);
var lyr_LHPLocalHeritagePlaces_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LHPLocalHeritagePlaces_45, 
                style: style_LHPLocalHeritagePlaces_45,
                popuplayertitle: 'LHP - Local Heritage Places',
                interactive: false,
                title: '<img src="styles/legend/LHPLocalHeritagePlaces_45.png" /> LHP - Local Heritage Places'
            });
var format_HPHeritagePlaces_46 = new ol.format.GeoJSON();
var features_HPHeritagePlaces_46 = format_HPHeritagePlaces_46.readFeatures(json_HPHeritagePlaces_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HPHeritagePlaces_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HPHeritagePlaces_46.addFeatures(features_HPHeritagePlaces_46);
var lyr_HPHeritagePlaces_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HPHeritagePlaces_46, 
                style: style_HPHeritagePlaces_46,
                popuplayertitle: 'HP - Heritage Places',
                interactive: false,
                title: '<img src="styles/legend/HPHeritagePlaces_46.png" /> HP - Heritage Places'
            });
var format_GPGasPipeline_47 = new ol.format.GeoJSON();
var features_GPGasPipeline_47 = format_GPGasPipeline_47.readFeatures(json_GPGasPipeline_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GPGasPipeline_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPGasPipeline_47.addFeatures(features_GPGasPipeline_47);
var lyr_GPGasPipeline_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPGasPipeline_47, 
                style: style_GPGasPipeline_47,
                popuplayertitle: 'GP - Gas Pipeline',
                interactive: false,
                title: '<img src="styles/legend/GPGasPipeline_47.png" /> GP - Gas Pipeline'
            });
var format_MEIMajorElectricityInfrastructure_48 = new ol.format.GeoJSON();
var features_MEIMajorElectricityInfrastructure_48 = format_MEIMajorElectricityInfrastructure_48.readFeatures(json_MEIMajorElectricityInfrastructure_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MEIMajorElectricityInfrastructure_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MEIMajorElectricityInfrastructure_48.addFeatures(features_MEIMajorElectricityInfrastructure_48);
var lyr_MEIMajorElectricityInfrastructure_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MEIMajorElectricityInfrastructure_48, 
                style: style_MEIMajorElectricityInfrastructure_48,
                popuplayertitle: 'MEI - Major Electricity Infrastructure',
                interactive: false,
                title: '<img src="styles/legend/MEIMajorElectricityInfrastructure_48.png" /> MEI - Major Electricity Infrastructure'
            });
var format_WBWaterways_49 = new ol.format.GeoJSON();
var features_WBWaterways_49 = format_WBWaterways_49.readFeatures(json_WBWaterways_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WBWaterways_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WBWaterways_49.addFeatures(features_WBWaterways_49);
var lyr_WBWaterways_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WBWaterways_49, 
                style: style_WBWaterways_49,
                popuplayertitle: 'WB - Waterways',
                interactive: false,
                title: '<img src="styles/legend/WBWaterways_49.png" /> WB - Waterways'
            });
var format_STIAStormTideInundationArea_50 = new ol.format.GeoJSON();
var features_STIAStormTideInundationArea_50 = format_STIAStormTideInundationArea_50.readFeatures(json_STIAStormTideInundationArea_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STIAStormTideInundationArea_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STIAStormTideInundationArea_50.addFeatures(features_STIAStormTideInundationArea_50);
var lyr_STIAStormTideInundationArea_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STIAStormTideInundationArea_50, 
                style: style_STIAStormTideInundationArea_50,
                popuplayertitle: 'STIA - Storm Tide Inundation Area',
                interactive: false,
                title: '<img src="styles/legend/STIAStormTideInundationArea_50.png" /> STIA - Storm Tide Inundation Area'
            });
var format_RPAResourceProcessingArea_51 = new ol.format.GeoJSON();
var features_RPAResourceProcessingArea_51 = format_RPAResourceProcessingArea_51.readFeatures(json_RPAResourceProcessingArea_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RPAResourceProcessingArea_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPAResourceProcessingArea_51.addFeatures(features_RPAResourceProcessingArea_51);
var lyr_RPAResourceProcessingArea_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPAResourceProcessingArea_51, 
                style: style_RPAResourceProcessingArea_51,
                popuplayertitle: 'RPA - Resource Processing Area',
                interactive: false,
                title: '<img src="styles/legend/RPAResourceProcessingArea_51.png" /> RPA - Resource Processing Area'
            });
var format_EASEMENTS_52 = new ol.format.GeoJSON();
var features_EASEMENTS_52 = format_EASEMENTS_52.readFeatures(json_EASEMENTS_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EASEMENTS_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EASEMENTS_52.addFeatures(features_EASEMENTS_52);
var lyr_EASEMENTS_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EASEMENTS_52, 
                style: style_EASEMENTS_52,
                popuplayertitle: 'EASEMENTS',
                interactive: false,
                title: '<img src="styles/legend/EASEMENTS_52.png" /> EASEMENTS'
            });
var format_SPEncumbrances_53 = new ol.format.GeoJSON();
var features_SPEncumbrances_53 = format_SPEncumbrances_53.readFeatures(json_SPEncumbrances_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPEncumbrances_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPEncumbrances_53.addFeatures(features_SPEncumbrances_53);
var lyr_SPEncumbrances_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPEncumbrances_53, 
                style: style_SPEncumbrances_53,
                popuplayertitle: 'SP Encumbrances',
                interactive: false,
                title: '<img src="styles/legend/SPEncumbrances_53.png" /> SP Encumbrances'
            });
var format_HugesandSeaviewBargarraStructurePlan_54 = new ol.format.GeoJSON();
var features_HugesandSeaviewBargarraStructurePlan_54 = format_HugesandSeaviewBargarraStructurePlan_54.readFeatures(json_HugesandSeaviewBargarraStructurePlan_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HugesandSeaviewBargarraStructurePlan_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HugesandSeaviewBargarraStructurePlan_54.addFeatures(features_HugesandSeaviewBargarraStructurePlan_54);
var lyr_HugesandSeaviewBargarraStructurePlan_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HugesandSeaviewBargarraStructurePlan_54, 
                style: style_HugesandSeaviewBargarraStructurePlan_54,
                popuplayertitle: 'Huges and Seaview Bargarra Structure Plan',
                interactive: false,
                title: '<img src="styles/legend/HugesandSeaviewBargarraStructurePlan_54.png" /> Huges and Seaview Bargarra Structure Plan'
            });
var format_CentralCoastalCorridorBargaratoElliotHeads_55 = new ol.format.GeoJSON();
var features_CentralCoastalCorridorBargaratoElliotHeads_55 = format_CentralCoastalCorridorBargaratoElliotHeads_55.readFeatures(json_CentralCoastalCorridorBargaratoElliotHeads_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentralCoastalCorridorBargaratoElliotHeads_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentralCoastalCorridorBargaratoElliotHeads_55.addFeatures(features_CentralCoastalCorridorBargaratoElliotHeads_55);
var lyr_CentralCoastalCorridorBargaratoElliotHeads_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentralCoastalCorridorBargaratoElliotHeads_55, 
                style: style_CentralCoastalCorridorBargaratoElliotHeads_55,
                popuplayertitle: 'Central Coastal Corridor (Bargara to Elliot Heads) ',
                interactive: false,
                title: '<img src="styles/legend/CentralCoastalCorridorBargaratoElliotHeads_55.png" /> Central Coastal Corridor (Bargara to Elliot Heads) '
            });
var format_KalkieAshfieldStructurePlanConceptNew_56 = new ol.format.GeoJSON();
var features_KalkieAshfieldStructurePlanConceptNew_56 = format_KalkieAshfieldStructurePlanConceptNew_56.readFeatures(json_KalkieAshfieldStructurePlanConceptNew_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KalkieAshfieldStructurePlanConceptNew_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KalkieAshfieldStructurePlanConceptNew_56.addFeatures(features_KalkieAshfieldStructurePlanConceptNew_56);
var lyr_KalkieAshfieldStructurePlanConceptNew_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KalkieAshfieldStructurePlanConceptNew_56, 
                style: style_KalkieAshfieldStructurePlanConceptNew_56,
                popuplayertitle: 'Kalkie Ashfield Structure Plan Concept New',
                interactive: false,
                title: '<img src="styles/legend/KalkieAshfieldStructurePlanConceptNew_56.png" /> Kalkie Ashfield Structure Plan Concept New'
            });
var format_BranyanLocalAreaPlan_57 = new ol.format.GeoJSON();
var features_BranyanLocalAreaPlan_57 = format_BranyanLocalAreaPlan_57.readFeatures(json_BranyanLocalAreaPlan_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BranyanLocalAreaPlan_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BranyanLocalAreaPlan_57.addFeatures(features_BranyanLocalAreaPlan_57);
var lyr_BranyanLocalAreaPlan_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BranyanLocalAreaPlan_57, 
                style: style_BranyanLocalAreaPlan_57,
                popuplayertitle: 'Branyan Local Area Plan ',
                interactive: false,
                title: '<img src="styles/legend/BranyanLocalAreaPlan_57.png" /> Branyan Local Area Plan '
            });
var lyr_HugesandSeaviewBargarraStructurePlan_58 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Huges and Seaview Bargarra Structure Plan',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/HugesandSeaviewBargarraStructurePlan_58.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16969876.554675, -2857230.537856, 16972050.732928, -2853662.126858]
                            })
                        });
var lyr_CentralCoastalCorridorBargaratoElliotHeads_59 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Central Coastal Corridor (Bargara to Elliot Heads)',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/CentralCoastalCorridorBargaratoElliotHeads_59.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16965613.563074, -2866175.453845, 16975199.862605, -2846451.359360]
                            })
                        });
var lyr_KalkieAshfieldStructurePlanConcept_60 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Kalkie Ashfield Structure Plan Concept',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/KalkieAshfieldStructurePlanConcept_60.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16961292.458904, -2861584.169905, 16966415.082505, -2854353.647321]
                            })
                        });
var lyr_BranyanLocalAreaPlan_61 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Branyan Local Area Plan',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/BranyanLocalAreaPlan_61.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16949539.221882, -2866206.854473, 16955900.081150, -2862275.725751]
                            })
                        });
var format_Unzoned_62 = new ol.format.GeoJSON();
var features_Unzoned_62 = format_Unzoned_62.readFeatures(json_Unzoned_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unzoned_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unzoned_62.addFeatures(features_Unzoned_62);
var lyr_Unzoned_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unzoned_62, 
                style: style_Unzoned_62,
                popuplayertitle: 'Unzoned',
                interactive: true,
                title: '<img src="styles/legend/Unzoned_62.png" /> Unzoned'
            });
var format_Rezone_63 = new ol.format.GeoJSON();
var features_Rezone_63 = format_Rezone_63.readFeatures(json_Rezone_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rezone_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rezone_63.addFeatures(features_Rezone_63);
var lyr_Rezone_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rezone_63, 
                style: style_Rezone_63,
                popuplayertitle: 'Rezone ',
                interactive: false,
                title: '<img src="styles/legend/Rezone_63.png" /> Rezone '
            });
var format_Zoned_64 = new ol.format.GeoJSON();
var features_Zoned_64 = format_Zoned_64.readFeatures(json_Zoned_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoned_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoned_64.addFeatures(features_Zoned_64);
var lyr_Zoned_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoned_64, 
                style: style_Zoned_64,
                popuplayertitle: 'Zoned',
                interactive: true,
                title: '<img src="styles/legend/Zoned_64.png" /> Zoned'
            });
var format_Suburb_65 = new ol.format.GeoJSON();
var features_Suburb_65 = format_Suburb_65.readFeatures(json_Suburb_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburb_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburb_65.addFeatures(features_Suburb_65);
var lyr_Suburb_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburb_65, 
                style: style_Suburb_65,
                popuplayertitle: 'Suburb',
                interactive: false,
                title: '<img src="styles/legend/Suburb_65.png" /> Suburb'
            });
var format_LGA_66 = new ol.format.GeoJSON();
var features_LGA_66 = format_LGA_66.readFeatures(json_LGA_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LGA_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LGA_66.addFeatures(features_LGA_66);
var lyr_LGA_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LGA_66, 
                style: style_LGA_66,
                popuplayertitle: 'LGA',
                interactive: false,
                title: '<img src="styles/legend/LGA_66.png" /> LGA'
            });
var format_Estate_67 = new ol.format.GeoJSON();
var features_Estate_67 = format_Estate_67.readFeatures(json_Estate_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estate_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estate_67.addFeatures(features_Estate_67);
var lyr_Estate_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estate_67, 
                style: style_Estate_67,
                popuplayertitle: 'Estate',
                interactive: false,
                title: '<img src="styles/legend/Estate_67.png" /> Estate'
            });
var format_MajorLandowner_68 = new ol.format.GeoJSON();
var features_MajorLandowner_68 = format_MajorLandowner_68.readFeatures(json_MajorLandowner_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorLandowner_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorLandowner_68.addFeatures(features_MajorLandowner_68);
var lyr_MajorLandowner_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorLandowner_68, 
                style: style_MajorLandowner_68,
                popuplayertitle: 'Major Landowner',
                interactive: false,
                title: '<img src="styles/legend/MajorLandowner_68.png" /> Major Landowner'
            });
var format_EstateLabel_69 = new ol.format.GeoJSON();
var features_EstateLabel_69 = format_EstateLabel_69.readFeatures(json_EstateLabel_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstateLabel_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstateLabel_69.addFeatures(features_EstateLabel_69);
var lyr_EstateLabel_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstateLabel_69, 
                style: style_EstateLabel_69,
                popuplayertitle: 'Estate Label',
                interactive: false,
                title: '<img src="styles/legend/EstateLabel_69.png" /> Estate Label'
            });
var format_ParcelAttributesLabel_70 = new ol.format.GeoJSON();
var features_ParcelAttributesLabel_70 = format_ParcelAttributesLabel_70.readFeatures(json_ParcelAttributesLabel_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelAttributesLabel_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelAttributesLabel_70.addFeatures(features_ParcelAttributesLabel_70);
var lyr_ParcelAttributesLabel_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelAttributesLabel_70, 
                style: style_ParcelAttributesLabel_70,
                popuplayertitle: 'Parcel Attributes Label',
                interactive: false,
                title: '<img src="styles/legend/ParcelAttributesLabel_70.png" /> Parcel Attributes Label'
            });
var group_LabelSwitch = new ol.layer.Group({
                                layers: [lyr_EstateLabel_69,lyr_ParcelAttributesLabel_70,],
                                fold: "open",
                                title: 'Label Switch'});
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_Suburb_65,lyr_LGA_66,lyr_Estate_67,lyr_MajorLandowner_68,],
                                fold: "open",
                                title: 'Administrative'});
var group_ParcelBoundaries = new ol.layer.Group({
                                layers: [lyr_Unzoned_62,lyr_Rezone_63,lyr_Zoned_64,],
                                fold: "open",
                                title: 'Parcel Boundaries'});
var group_PSP = new ol.layer.Group({
                                layers: [lyr_HugesandSeaviewBargarraStructurePlan_58,lyr_CentralCoastalCorridorBargaratoElliotHeads_59,lyr_KalkieAshfieldStructurePlanConcept_60,lyr_BranyanLocalAreaPlan_61,],
                                fold: "open",
                                title: 'PSP'});
var group_GrowthAreaBoundaries = new ol.layer.Group({
                                layers: [lyr_HugesandSeaviewBargarraStructurePlan_54,lyr_CentralCoastalCorridorBargaratoElliotHeads_55,lyr_KalkieAshfieldStructurePlanConceptNew_56,lyr_BranyanLocalAreaPlan_57,],
                                fold: "open",
                                title: 'Growth Area Boundaries'});
var group_NDHDeductedOverlays = new ol.layer.Group({
                                layers: [lyr_TRSATransportRouteSeparationArea_37,lyr_LACSLLotsAffectedbyCoastalSetbackLine_38,lyr_MEIBMajorElectricityInfrastructureBuffer_39,lyr_MESBMajorElectricitySubstationBuffer_40,lyr_MTMiningTenements_41,lyr_RCRailCorridor_42,lyr_RSAResourceSeparationArea_43,lyr_LHAPLocalHeritageAdjoiningProperties_44,lyr_LHPLocalHeritagePlaces_45,lyr_HPHeritagePlaces_46,lyr_GPGasPipeline_47,lyr_MEIMajorElectricityInfrastructure_48,lyr_WBWaterways_49,lyr_STIAStormTideInundationArea_50,lyr_RPAResourceProcessingArea_51,lyr_EASEMENTS_52,lyr_SPEncumbrances_53,],
                                fold: "open",
                                title: 'NDH Deducted Overlays'});
var group_NotetoDueDiligence = new ol.layer.Group({
                                layers: [lyr_STSASeaTurtleSensitiveArea_29,lyr_SCRCBStateControlledRoadCorridorBuffer_30,lyr_SLSteepLand_31,lyr_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32,lyr_FPFuturePathways_33,lyr_FRFutureRoads_34,lyr_OAOperationalAirspace_35,lyr_GPBGasPipelineBuffer_36,],
                                fold: "open",
                                title: 'Note to Due Diligence'});
var group_OtherLayers = new ol.layer.Group({
                                layers: [lyr_FTMFutureTrunkMains_23,lyr_PRWTPProposedRubyannaWastewaterTreatmentPlant_24,lyr_WTPWastewaterTreatmentPlant_25,lyr_WTPBWastewaterTreatmentPlantBuffer_26,lyr_WMFBWasteManagementFacilityBuffer_27,lyr_WMFWasteManagementFacility_28,],
                                fold: "open",
                                title: 'Other Layers'});
var group_Zoned = new ol.layer.Group({
                                layers: [lyr_Ruralresidential_13,lyr_Localcentre_14,lyr_Neighbourhoodcentre_15,lyr_Districtcentre_16,lyr_Majorcentre_17,lyr_Principalcentre_18,lyr_Highdensityresidential_19,lyr_Mediumdensityresidential_20,lyr_Emergingcommunity_21,lyr_Lowdensityresidential_22,],
                                fold: "open",
                                title: 'Zoned'});
var group_Unzoned = new ol.layer.Group({
                                layers: [lyr_Strategicportland_2,lyr_Limiteddevelopment_3,lyr_Specialpurpose_4,lyr_Communityfacilities_5,lyr_Highimpactindustry_6,lyr_Industry_7,lyr_Environmentalmanagementandconservation_8,lyr_Sportandrecreation_9,lyr_Openspace_10,lyr_Rural_11,lyr_Specialisedcentre_12,],
                                fold: "open",
                                title: 'Unzoned'});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatellite_1,],
                                fold: "open",
                                title: 'Base Layer'});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatellite_1.setVisible(true);lyr_Strategicportland_2.setVisible(false);lyr_Limiteddevelopment_3.setVisible(false);lyr_Specialpurpose_4.setVisible(false);lyr_Communityfacilities_5.setVisible(false);lyr_Highimpactindustry_6.setVisible(false);lyr_Industry_7.setVisible(false);lyr_Environmentalmanagementandconservation_8.setVisible(false);lyr_Sportandrecreation_9.setVisible(false);lyr_Openspace_10.setVisible(false);lyr_Rural_11.setVisible(false);lyr_Specialisedcentre_12.setVisible(false);lyr_Ruralresidential_13.setVisible(false);lyr_Localcentre_14.setVisible(false);lyr_Neighbourhoodcentre_15.setVisible(false);lyr_Districtcentre_16.setVisible(false);lyr_Majorcentre_17.setVisible(false);lyr_Principalcentre_18.setVisible(false);lyr_Highdensityresidential_19.setVisible(false);lyr_Mediumdensityresidential_20.setVisible(false);lyr_Emergingcommunity_21.setVisible(false);lyr_Lowdensityresidential_22.setVisible(false);lyr_FTMFutureTrunkMains_23.setVisible(false);lyr_PRWTPProposedRubyannaWastewaterTreatmentPlant_24.setVisible(false);lyr_WTPWastewaterTreatmentPlant_25.setVisible(false);lyr_WTPBWastewaterTreatmentPlantBuffer_26.setVisible(false);lyr_WMFBWasteManagementFacilityBuffer_27.setVisible(false);lyr_WMFWasteManagementFacility_28.setVisible(false);lyr_STSASeaTurtleSensitiveArea_29.setVisible(false);lyr_SCRCBStateControlledRoadCorridorBuffer_30.setVisible(false);lyr_SLSteepLand_31.setVisible(false);lyr_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32.setVisible(false);lyr_FPFuturePathways_33.setVisible(false);lyr_FRFutureRoads_34.setVisible(false);lyr_OAOperationalAirspace_35.setVisible(false);lyr_GPBGasPipelineBuffer_36.setVisible(false);lyr_TRSATransportRouteSeparationArea_37.setVisible(false);lyr_LACSLLotsAffectedbyCoastalSetbackLine_38.setVisible(false);lyr_MEIBMajorElectricityInfrastructureBuffer_39.setVisible(false);lyr_MESBMajorElectricitySubstationBuffer_40.setVisible(false);lyr_MTMiningTenements_41.setVisible(false);lyr_RCRailCorridor_42.setVisible(false);lyr_RSAResourceSeparationArea_43.setVisible(false);lyr_LHAPLocalHeritageAdjoiningProperties_44.setVisible(false);lyr_LHPLocalHeritagePlaces_45.setVisible(false);lyr_HPHeritagePlaces_46.setVisible(false);lyr_GPGasPipeline_47.setVisible(false);lyr_MEIMajorElectricityInfrastructure_48.setVisible(false);lyr_WBWaterways_49.setVisible(false);lyr_STIAStormTideInundationArea_50.setVisible(false);lyr_RPAResourceProcessingArea_51.setVisible(false);lyr_EASEMENTS_52.setVisible(false);lyr_SPEncumbrances_53.setVisible(false);lyr_HugesandSeaviewBargarraStructurePlan_54.setVisible(false);lyr_CentralCoastalCorridorBargaratoElliotHeads_55.setVisible(false);lyr_KalkieAshfieldStructurePlanConceptNew_56.setVisible(false);lyr_BranyanLocalAreaPlan_57.setVisible(false);lyr_HugesandSeaviewBargarraStructurePlan_58.setVisible(true);lyr_CentralCoastalCorridorBargaratoElliotHeads_59.setVisible(true);lyr_KalkieAshfieldStructurePlanConcept_60.setVisible(true);lyr_BranyanLocalAreaPlan_61.setVisible(true);lyr_Unzoned_62.setVisible(true);lyr_Rezone_63.setVisible(true);lyr_Zoned_64.setVisible(true);lyr_Suburb_65.setVisible(true);lyr_LGA_66.setVisible(true);lyr_Estate_67.setVisible(false);lyr_MajorLandowner_68.setVisible(false);lyr_EstateLabel_69.setVisible(false);lyr_ParcelAttributesLabel_70.setVisible(true);
var layersList = [group_BaseLayer,group_Unzoned,group_Zoned,group_OtherLayers,group_NotetoDueDiligence,group_NDHDeductedOverlays,group_GrowthAreaBoundaries,group_PSP,group_ParcelBoundaries,group_Administrative,group_LabelSwitch];
lyr_Strategicportland_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Limiteddevelopment_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Specialpurpose_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Communityfacilities_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Highimpactindustry_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Industry_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Environmentalmanagementandconservation_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Sportandrecreation_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Openspace_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Rural_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Specialisedcentre_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Ruralresidential_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Localcentre_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Neighbourhoodcentre_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Districtcentre_16.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Majorcentre_17.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Principalcentre_18.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Highdensityresidential_19.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Mediumdensityresidential_20.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Emergingcommunity_21.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_Lowdensityresidential_22.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Zone_Precincts': 'Zone_Precincts', 'CF_Label': 'CF_Label', 'AREA_SQM': 'AREA_SQM', 'ZONE': 'ZONE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Amendment': 'Amendment', 'INCLUDE': 'INCLUDE', });
lyr_FTMFutureTrunkMains_23.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LGIP_ID': 'LGIP_ID', 'Asset_Name': 'Asset_Name', 'Asset_Type': 'Asset_Type', 'Shape_Leng': 'Shape_Leng', 'BRC_Timing': 'BRC_Timing', 'SOW_Total_Asset_Cost_Base_Year': 'SOW_Total_Asset_Cost_Base_Year', 'Shape_Length': 'Shape_Length', });
lyr_PRWTPProposedRubyannaWastewaterTreatmentPlant_24.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_WTPWastewaterTreatmentPlant_25.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FACILITY_GROUP': 'FACILITY_GROUP', 'FACILITY_NAME': 'FACILITY_NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Infrastructure_Status': 'Infrastructure_Status', 'Infrastructure_Change_Date': 'Infrastructure_Change_Date', });
lyr_WTPBWastewaterTreatmentPlantBuffer_26.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FACILITY_GROUP': 'FACILITY_GROUP', 'FACILITY_NAME': 'FACILITY_NAME', 'BUFF_DIST': 'BUFF_DIST', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Infrastructure_Status': 'Infrastructure_Status', 'Infrastructure_Change_Date': 'Infrastructure_Change_Date', });
lyr_WMFBWasteManagementFacilityBuffer_27.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FACILITY_GROUP': 'FACILITY_GROUP', 'FACILITY_NAME': 'FACILITY_NAME', 'BUFF_DIST': 'BUFF_DIST', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_WMFWasteManagementFacility_28.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FACILITY_GROUP': 'FACILITY_GROUP', 'FACILITY_NAME': 'FACILITY_NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_STSASeaTurtleSensitiveArea_29.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'BUFF_DIST': 'BUFF_DIST', 'Name': 'Name', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SCRCBStateControlledRoadCorridorBuffer_30.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'STREET': 'STREET', 'ROAD_NAME': 'ROAD_NAME', 'Segment_ID': 'Segment_ID', 'Parcel_ID': 'Parcel_ID', 'Seg_Par': 'Seg_Par', 'BUFF_DIST': 'BUFF_DIST', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SLSteepLand_31.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'gridcode': 'gridcode', 'Name': 'Name', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'BUFF_DIST': 'BUFF_DIST', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FPFuturePathways_33.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Asset_Type': 'Asset_Type', 'Path_Width': 'Path_Width', 'LGIP_ID': 'LGIP_ID', 'Facility_L': 'Facility_L', 'Constructi': 'Constructi', 'Shape_Leng': 'Shape_Leng', 'BRC_Timing': 'BRC_Timing', 'SOW_Total_Asset_Cost_Base_Year': 'SOW_Total_Asset_Cost_Base_Year', 'Shape_Length': 'Shape_Length', });
lyr_FRFutureRoads_34.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Hierarchy': 'Hierarchy', 'Project_Type': 'Project_Type', 'Project': 'Project', 'LGIP_ID': 'LGIP_ID', 'Shape_Leng': 'Shape_Leng', 'BRC_Timing': 'BRC_Timing', 'SOW_Total_Asset_Cost_Base_Year': 'SOW_Total_Asset_Cost_Base_Year', 'Shape_Length': 'Shape_Length', });
lyr_OAOperationalAirspace_35.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LOCATION': 'LOCATION', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_GPBGasPipelineBuffer_36.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'STATUS': 'STATUS', 'D_GRANTED': 'D_GRANTED', 'PRINC_HLDR': 'PRINC_HLDR', 'STAGE': 'STAGE', 'BUFF_DIST': 'BUFF_DIST', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'PERMIT_USE': 'PERMIT_USE', 'PERMIT_TYPE': 'PERMIT_TYPE', });
lyr_TRSATransportRouteSeparationArea_37.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KRA_NO': 'KRA No', 'KRA_NAME': 'KRA Name', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_LACSLLotsAffectedbyCoastalSetbackLine_38.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MEIBMajorElectricityInfrastructureBuffer_39.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'POWERLINK': 'POWERLINK', 'BUFF_DIST': 'BUFF_DIST', 'ERGON': 'ERGON', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MESBMajorElectricitySubstationBuffer_40.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SITE_NAME': 'SITE_NAME', 'SITE_STATU': 'SITE_STATU', 'BUFF_DIST': 'BUFF_DIST', 'ASSET_TYPE': 'ASSET_TYPE', 'OP_NUMBER': 'OP_NUMBER', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MTMiningTenements_41.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'NAME', 'DIVISION': 'DIVISION', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'PERMITID': 'PERMITID', 'DISPLAYNAME': 'DISPLAYNAME', 'PERMITNAME': 'PERMITNAME', 'PERMITTYPEID': 'PERMITTYPEID', 'PERMITTYPE': 'PERMITTYPE', 'PERMITTYPEABBREVIATION': 'PERMITTYPEABBREVIATION', 'PERMITNUMBER': 'PERMITNUMBER', 'PERMITSTATUSTYPEID': 'PERMITSTATUSTYPEID', 'PERMITSTATUS': 'PERMITSTATUS', 'PERMITSTATE': 'PERMITSTATE', 'PERMITMINERALS': 'PERMITMINERALS', 'PERMITPURPOSE': 'PERMITPURPOSE', 'LODGEDATE': 'LODGEDATE', 'APPROVEDATE': 'APPROVEDATE', 'EXPIRYDATE': 'EXPIRYDATE', 'NONCURRENTDATE': 'NONCURRENTDATE', 'AUTHORISEDHOLDERID': 'AUTHORISEDHOLDERID', 'AUTHORISEDHOLDERNAME': 'AUTHORISEDHOLDERNAME', 'NATIVETITLECATEGORY': 'NATIVETITLECATEGORY', 'SHAPEAREA': 'SHAPEAREA', 'SHAPEAREAHECTARES': 'SHAPEAREAHECTARES', 'AREA_SUBBLOCKS': 'AREA_SUBBLOCKS', });
lyr_RCRailCorridor_42.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Area': 'Area', 'AREA_UNIT': 'AREA_UNIT', 'Category': 'Category', 'QR_INTERES': 'QR_INTERES', 'Date_Stamp': 'Date_Stamp', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_RSAResourceSeparationArea_43.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KRA_NO': 'KRA No', 'KRA_NAME': 'KRA Name', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_LHAPLocalHeritageAdjoiningProperties_44.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'Previous_Council_Name': 'Previous_Council_Name', 'LOT': 'LOT', 'PLAN_': 'PLAN_', 'Parcel_Number': 'Parcel_Number', 'Registration_Date': 'Registration_Date', 'DERM_LANDUSE': 'DERM_LANDUSE', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Description': 'Description', 'Table7_No': 'Table7_No', });
lyr_LHPLocalHeritagePlaces_45.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'Site_Name': 'Site_Name', 'Address': 'Address', 'SURV_IND': 'SURV_IND', 'PARCEL_TYP': 'PARCEL_TYP', 'COVER_TYP': 'COVER_TYP', 'LOT': 'LOT', 'PLAN_': 'PLAN', 'LOTPLAN': 'LOTPLAN', 'SEG_NUM': 'SEG_NUM', 'PAR_NUM': 'PAR_NUM', 'SEGPAR': 'SEGPAR', 'PAR_IND': 'PAR_IND', 'LOT_AREA': 'LOT_AREA', 'EXCL_AREA': 'EXCL_AREA', 'LOT_VOLUME': 'LOT_VOLUME', 'TENURE': 'TENURE', 'PRC': 'PRC', 'PARISH': 'PARISH', 'COUNTY': 'COUNTY', 'LAC': 'LAC', 'SHIRE_NAME': 'SHIRE_NAME', 'FEAT_NAME': 'FEAT_NAME', 'ALIAS_NAME': 'ALIAS_NAME', 'LOC': 'LOC', 'LOCALITY': 'LOCALITY', 'ACC_CODE': 'ACC_CODE', 'CA_AREA_SQ': 'CA_AREA_SQ', 'Suburb': 'Suburb', 'Descriptio': 'Descriptio', 'Council_Re': 'Council_Re', 'Ref_No': 'Ref_No', 'Table7_No': 'Table7_No', 'LAYER_NAME': 'LAYER_NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_HPHeritagePlaces_46.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLACE_ID': 'PLACE_ID', 'ACCURACY': 'ACCURACY', 'PLACENAME': 'PLACENAME', 'STATUS': 'STATUS', 'ENTRYDATE': 'ENTRYDATE', 'AREA_SQM': 'AREA_SQM', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_GPGasPipeline_47.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'PERMITID': 'PERMITID', 'PERMITNAME': 'PermitName', 'PERMITTYPEID': 'PERMITTYPEID', 'PERMITTYPE': 'PERMITTYPE', 'PERMITTYPEABBREVIATION': 'PERMITTYPEABBREVIATION', 'PERMITNUMBER': 'PermitNumber', 'PERMITSTATUSTYPEID': 'PERMITSTATUSTYPEID', 'PERMITSTATUS': 'PERMITSTATUS', 'PERMITSTATE': 'PermitState', 'PERMITMINERALS': 'PermitMinerals', 'PERMITPURPOSE': 'PermitPurpose', 'LODGEDATE': 'LodgeDate', 'APPROVEDATE': 'ApproveDate', 'EXPIRYDATE': 'ExpiryDate', 'NONCURRENTDATE': 'NonCurrentDate', 'AUTHORISEDHOLDERID': 'AuthorisedHolderId', 'AUTHORISEDHOLDERNAME': 'AuthorisedHolderName', 'NATIVETITLECATEGORY': 'NativeTitleCategory', 'DIVISION': 'Division', 'AREA_SUBBLOCKS': 'Area_SubBlocks', 'NAME': 'NAME', });
lyr_MEIMajorElectricityInfrastructure_48.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ROUTE_LENG': 'ROUTE_LENG', 'ANNOTATION': 'ANNOTATION', 'SW_SIZE': 'SW_SIZE', 'TYPE': 'TYPE', 'CONSTRUCTI': 'CONSTRUCTI', 'LEGACY_ID': 'LEGACY_ID', 'LEGACY_FEE': 'LEGACY_FEE', 'OPERATING_': 'OPERATING_', 'TR_LINE_ID': 'TR_LINE_ID', 'GSCH_ANNOT': 'GSCH_ANNOT', 'ECORP_ASSE': 'ECORP_ASSE', 'SERVICE_ST': 'SERVICE_ST', 'ANNOTATI00': 'ANNOTATI00', 'REPORTING_': 'REPORTING_', 'TR_LINE_GC': 'TR_LINE_GC', 'FEEDER_OP_': 'FEEDER_OP_', 'FEEDER_O00': 'FEEDER_O00', 'DATE_ERECT': 'DATE_ERECT', 'VERIFIED': 'VERIFIED', 'WIND_PRESS': 'WIND_PRESS', 'ENERGISED': 'ENERGISED', 'MEAN_EFFEC': 'MEAN_EFFEC', 'SPECIAL_CO': 'SPECIAL_CO', 'ZONE_SUBST': 'ZONE_SUBST', 'PHASE': 'PHASE', 'FEEDER_SEC': 'FEEDER_SEC', 'MAX_DESIGN': 'MAX_DESIGN', 'PHASE_CODE': 'PHASE_CODE', 'LINE_LENGT': 'LINE_LENGT', 'REMARKS': 'REMARKS', 'OWNER': 'OWNER', 'NO_CONDUCT': 'NO_CONDUCT', 'CONSTRUC00': 'CONSTRUC00', 'DESCRIPTIO': 'DESCRIPTIO', 'ANNOTATI01': 'ANNOTATI01', 'NBL': 'NBL', 'CUTTING_AL': 'CUTTING_AL', 'GSCH_ANN00': 'GSCH_ANN00', 'LGA': 'LGA', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', });
lyr_WBWaterways_49.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'path': 'path', });
lyr_STIAStormTideInundationArea_50.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_RPAResourceProcessingArea_51.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_EASEMENTS_52.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PLAN_LOT': 'PLAN_LOT', 'PURPOSE': 'PURPOSE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SPEncumbrances_53.set('fieldAliases', {'id': 'id', });
lyr_HugesandSeaviewBargarraStructurePlan_54.set('fieldAliases', {'id': 'id', });
lyr_CentralCoastalCorridorBargaratoElliotHeads_55.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_KalkieAshfieldStructurePlanConceptNew_56.set('fieldAliases', {'id': 'id', });
lyr_BranyanLocalAreaPlan_57.set('fieldAliases', {'id': 'id', });
lyr_Unzoned_62.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned/Unzoned': 'Zoned/Unzoned', 'Zoning': 'Zoning', 'Strategy': 'Strategy', 'Strat Link': 'Strat Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 20dw/HA (350m2)': 'Lot Yield @ 20dw/HA (350m2)', 'VALUE @ 350m2': 'VALUE @ 350m2', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%DM)': 'Market Value (10%DM)', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Address': 'Vendor Address', 'Vendor Mobile': 'Vendor Mobile', 'Vendor Email': 'Vendor Email', 'Lead Link': 'Lead Link', 'plan_lot': 'plan_lot', 'derm_landuse': 'derm_landuse', 'house_no': 'house_no', 'street_name': 'street_name', 'street_type': 'street_type', 'road_name': 'road_name', 'locality': 'locality', 'legal_area': 'legal_area', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Major Land Owner': 'Major Land Owner', });
lyr_Rezone_63.set('fieldAliases', {'fid': 'fid', });
lyr_Zoned_64.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned / Unzoned': 'Zoned / Unzoned', 'Current Zone': 'Current Zone', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 15 Dw/Ha': 'Lot Yield @ 15 Dw/Ha', 'VALUE @ 467m2': 'VALUE @ 467m2', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%DM)': 'Market Value (10%DM)', 'Development Contributions per Lot': 'Development Contributions per Lot', 'Last Sold Price': 'Last Sold Price', 'Last Sold Date': 'Last Sold Date', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Address': 'Vendor Address', 'Vendor Mobile': 'Vendor Mobile', 'Vendor Email': 'Vendor Email', 'Lead Link': 'Lead Link', 'Major Land Owner': 'Major Land Owner', });
lyr_Suburb_65.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Locality': 'Locality', 'Post_Code': 'Post_Code', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_LGA_66.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Previous_Council': 'Previous_Council', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Estate_67.set('fieldAliases', {'Estate': 'Estate', 'Status': 'Status', 'Developer': 'Developer', });
lyr_MajorLandowner_68.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned/Unzoned': 'Zoned/Unzoned', 'Zoning': 'Zoning', 'Strategy': 'Strategy', 'Strat Link': 'Strat Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 20dw/HA (350m2)': 'Lot Yield @ 20dw/HA (350m2)', 'VALUE @ 350m2': 'VALUE @ 350m2', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%DM)': 'Market Value (10%DM)', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Address': 'Vendor Address', 'Vendor Mobile': 'Vendor Mobile', 'Vendor Email': 'Vendor Email', 'Lead Link': 'Lead Link', 'plan_lot': 'plan_lot', 'derm_landuse': 'derm_landuse', 'house_no': 'house_no', 'street_name': 'street_name', 'street_type': 'street_type', 'road_name': 'road_name', 'locality': 'locality', 'legal_area': 'legal_area', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Major Land Owner': 'Major Land Owner', });
lyr_EstateLabel_69.set('fieldAliases', {'fid': 'fid', 'Estate': 'Estate', 'Status': 'Status', 'Developer': 'Developer', });
lyr_ParcelAttributesLabel_70.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned / Unzoned': 'Zoned / Unzoned', 'Current Zone': 'Current Zone', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 15 Dw/Ha': 'Lot Yield @ 15 Dw/Ha', 'VALUE @ 467m2': 'VALUE @ 467m2', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%DM)': 'Market Value (10%DM)', 'Development Contributions per Lot': 'Development Contributions per Lot', 'Last Sold Price': 'Last Sold Price', 'Last Sold Date': 'Last Sold Date', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Address': 'Vendor Address', 'Vendor Mobile': 'Vendor Mobile', 'Vendor Email': 'Vendor Email', 'Lead Link': 'Lead Link', 'Major Land Owner': 'Major Land Owner', '_Name': '_Name', '_Current RLP': '_Current RLP', '_Current OPC': '_Current OPC', '_Development Contributions per Lot': '_Development Contributions per Lot', '_Market Value (20%DM)': '_Market Value (20%DM)', '_Market Value (30%DM)': '_Market Value (30%DM)', '_Market Value (25%DM)': '_Market Value (25%DM)', '_Market Value (15%DM)': '_Market Value (15%DM)', '_Market Value (12%DM)': '_Market Value (12%DM)', '_Market Value (10%DM)': '_Market Value (10%DM)', });
lyr_Strategicportland_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Limiteddevelopment_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Specialpurpose_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Communityfacilities_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Highimpactindustry_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Industry_7.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Environmentalmanagementandconservation_8.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Sportandrecreation_9.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Openspace_10.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Rural_11.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Specialisedcentre_12.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Ruralresidential_13.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Localcentre_14.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Neighbourhoodcentre_15.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Districtcentre_16.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Majorcentre_17.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Principalcentre_18.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Highdensityresidential_19.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Mediumdensityresidential_20.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Emergingcommunity_21.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_Lowdensityresidential_22.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Zone_Precincts': 'TextEdit', 'CF_Label': 'Range', 'AREA_SQM': 'TextEdit', 'ZONE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Amendment': 'TextEdit', 'INCLUDE': 'TextEdit', });
lyr_FTMFutureTrunkMains_23.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LGIP_ID': 'TextEdit', 'Asset_Name': 'TextEdit', 'Asset_Type': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BRC_Timing': 'TextEdit', 'SOW_Total_Asset_Cost_Base_Year': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_PRWTPProposedRubyannaWastewaterTreatmentPlant_24.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WTPWastewaterTreatmentPlant_25.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FACILITY_GROUP': 'TextEdit', 'FACILITY_NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Infrastructure_Status': 'TextEdit', 'Infrastructure_Change_Date': 'DateTime', });
lyr_WTPBWastewaterTreatmentPlantBuffer_26.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FACILITY_GROUP': 'TextEdit', 'FACILITY_NAME': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Infrastructure_Status': 'TextEdit', 'Infrastructure_Change_Date': 'DateTime', });
lyr_WMFBWasteManagementFacilityBuffer_27.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FACILITY_GROUP': 'TextEdit', 'FACILITY_NAME': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WMFWasteManagementFacility_28.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FACILITY_GROUP': 'TextEdit', 'FACILITY_NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_STSASeaTurtleSensitiveArea_29.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'Name': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SCRCBStateControlledRoadCorridorBuffer_30.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'STREET': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'Segment_ID': 'TextEdit', 'Parcel_ID': 'TextEdit', 'Seg_Par': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SLSteepLand_31.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'gridcode': 'TextEdit', 'Name': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_FPFuturePathways_33.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Asset_Type': 'TextEdit', 'Path_Width': 'TextEdit', 'LGIP_ID': 'TextEdit', 'Facility_L': 'TextEdit', 'Constructi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BRC_Timing': 'TextEdit', 'SOW_Total_Asset_Cost_Base_Year': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_FRFutureRoads_34.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Hierarchy': 'TextEdit', 'Project_Type': 'TextEdit', 'Project': 'TextEdit', 'LGIP_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BRC_Timing': 'TextEdit', 'SOW_Total_Asset_Cost_Base_Year': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_OAOperationalAirspace_35.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LOCATION': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GPBGasPipelineBuffer_36.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'STATUS': 'TextEdit', 'D_GRANTED': 'TextEdit', 'PRINC_HLDR': 'TextEdit', 'STAGE': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'PERMIT_USE': 'TextEdit', 'PERMIT_TYPE': 'TextEdit', });
lyr_TRSATransportRouteSeparationArea_37.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'KRA_NO': 'Range', 'KRA_NAME': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LACSLLotsAffectedbyCoastalSetbackLine_38.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MEIBMajorElectricityInfrastructureBuffer_39.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'POWERLINK': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ERGON': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MESBMajorElectricitySubstationBuffer_40.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SITE_NAME': 'TextEdit', 'SITE_STATU': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ASSET_TYPE': 'TextEdit', 'OP_NUMBER': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MTMiningTenements_41.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'DIVISION': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'PERMITID': 'TextEdit', 'DISPLAYNAME': 'TextEdit', 'PERMITNAME': 'TextEdit', 'PERMITTYPEID': 'TextEdit', 'PERMITTYPE': 'TextEdit', 'PERMITTYPEABBREVIATION': 'TextEdit', 'PERMITNUMBER': 'TextEdit', 'PERMITSTATUSTYPEID': 'TextEdit', 'PERMITSTATUS': 'TextEdit', 'PERMITSTATE': 'TextEdit', 'PERMITMINERALS': 'TextEdit', 'PERMITPURPOSE': 'TextEdit', 'LODGEDATE': 'DateTime', 'APPROVEDATE': 'DateTime', 'EXPIRYDATE': 'DateTime', 'NONCURRENTDATE': 'DateTime', 'AUTHORISEDHOLDERID': 'TextEdit', 'AUTHORISEDHOLDERNAME': 'TextEdit', 'NATIVETITLECATEGORY': 'TextEdit', 'SHAPEAREA': 'TextEdit', 'SHAPEAREAHECTARES': 'TextEdit', 'AREA_SUBBLOCKS': 'TextEdit', });
lyr_RCRailCorridor_42.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Area': 'TextEdit', 'AREA_UNIT': 'TextEdit', 'Category': 'TextEdit', 'QR_INTERES': 'TextEdit', 'Date_Stamp': 'DateTime', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RSAResourceSeparationArea_43.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'KRA_NO': 'Range', 'KRA_NAME': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LHAPLocalHeritageAdjoiningProperties_44.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'Previous_Council_Name': 'TextEdit', 'LOT': 'TextEdit', 'PLAN_': 'TextEdit', 'Parcel_Number': 'TextEdit', 'Registration_Date': 'DateTime', 'DERM_LANDUSE': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Description': 'TextEdit', 'Table7_No': 'Range', });
lyr_LHPLocalHeritagePlaces_45.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'Site_Name': 'TextEdit', 'Address': 'TextEdit', 'SURV_IND': 'TextEdit', 'PARCEL_TYP': 'TextEdit', 'COVER_TYP': 'TextEdit', 'LOT': 'TextEdit', 'PLAN_': 'TextEdit', 'LOTPLAN': 'TextEdit', 'SEG_NUM': 'TextEdit', 'PAR_NUM': 'TextEdit', 'SEGPAR': 'TextEdit', 'PAR_IND': 'TextEdit', 'LOT_AREA': 'TextEdit', 'EXCL_AREA': 'TextEdit', 'LOT_VOLUME': 'TextEdit', 'TENURE': 'TextEdit', 'PRC': 'TextEdit', 'PARISH': 'TextEdit', 'COUNTY': 'TextEdit', 'LAC': 'TextEdit', 'SHIRE_NAME': 'TextEdit', 'FEAT_NAME': 'TextEdit', 'ALIAS_NAME': 'TextEdit', 'LOC': 'TextEdit', 'LOCALITY': 'TextEdit', 'ACC_CODE': 'TextEdit', 'CA_AREA_SQ': 'TextEdit', 'Suburb': 'TextEdit', 'Descriptio': 'TextEdit', 'Council_Re': 'TextEdit', 'Ref_No': 'TextEdit', 'Table7_No': 'Range', 'LAYER_NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HPHeritagePlaces_46.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLACE_ID': 'TextEdit', 'ACCURACY': 'TextEdit', 'PLACENAME': 'TextEdit', 'STATUS': 'TextEdit', 'ENTRYDATE': 'DateTime', 'AREA_SQM': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GPGasPipeline_47.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'PERMITID': 'TextEdit', 'PERMITNAME': 'TextEdit', 'PERMITTYPEID': 'TextEdit', 'PERMITTYPE': 'TextEdit', 'PERMITTYPEABBREVIATION': 'TextEdit', 'PERMITNUMBER': 'TextEdit', 'PERMITSTATUSTYPEID': 'TextEdit', 'PERMITSTATUS': 'TextEdit', 'PERMITSTATE': 'TextEdit', 'PERMITMINERALS': 'TextEdit', 'PERMITPURPOSE': 'TextEdit', 'LODGEDATE': 'DateTime', 'APPROVEDATE': 'DateTime', 'EXPIRYDATE': 'DateTime', 'NONCURRENTDATE': 'DateTime', 'AUTHORISEDHOLDERID': 'TextEdit', 'AUTHORISEDHOLDERNAME': 'TextEdit', 'NATIVETITLECATEGORY': 'TextEdit', 'DIVISION': 'TextEdit', 'AREA_SUBBLOCKS': 'TextEdit', 'NAME': 'TextEdit', });
lyr_MEIMajorElectricityInfrastructure_48.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ROUTE_LENG': 'TextEdit', 'ANNOTATION': 'TextEdit', 'SW_SIZE': 'TextEdit', 'TYPE': 'TextEdit', 'CONSTRUCTI': 'TextEdit', 'LEGACY_ID': 'TextEdit', 'LEGACY_FEE': 'TextEdit', 'OPERATING_': 'TextEdit', 'TR_LINE_ID': 'TextEdit', 'GSCH_ANNOT': 'TextEdit', 'ECORP_ASSE': 'TextEdit', 'SERVICE_ST': 'TextEdit', 'ANNOTATI00': 'TextEdit', 'REPORTING_': 'TextEdit', 'TR_LINE_GC': 'TextEdit', 'FEEDER_OP_': 'TextEdit', 'FEEDER_O00': 'TextEdit', 'DATE_ERECT': 'TextEdit', 'VERIFIED': 'TextEdit', 'WIND_PRESS': 'TextEdit', 'ENERGISED': 'TextEdit', 'MEAN_EFFEC': 'TextEdit', 'SPECIAL_CO': 'TextEdit', 'ZONE_SUBST': 'TextEdit', 'PHASE': 'TextEdit', 'FEEDER_SEC': 'TextEdit', 'MAX_DESIGN': 'TextEdit', 'PHASE_CODE': 'TextEdit', 'LINE_LENGT': 'TextEdit', 'REMARKS': 'TextEdit', 'OWNER': 'TextEdit', 'NO_CONDUCT': 'TextEdit', 'CONSTRUC00': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'ANNOTATI01': 'TextEdit', 'NBL': 'TextEdit', 'CUTTING_AL': 'TextEdit', 'GSCH_ANN00': 'TextEdit', 'LGA': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_WBWaterways_49.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_STIAStormTideInundationArea_50.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RPAResourceProcessingArea_51.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EASEMENTS_52.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PLAN_LOT': 'TextEdit', 'PURPOSE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SPEncumbrances_53.set('fieldImages', {'id': 'TextEdit', });
lyr_HugesandSeaviewBargarraStructurePlan_54.set('fieldImages', {'id': 'TextEdit', });
lyr_CentralCoastalCorridorBargaratoElliotHeads_55.set('fieldImages', {'fid': '', 'id': '', 'layer': '', 'path': '', });
lyr_KalkieAshfieldStructurePlanConceptNew_56.set('fieldImages', {'id': 'TextEdit', });
lyr_BranyanLocalAreaPlan_57.set('fieldImages', {'id': 'TextEdit', });
lyr_Unzoned_62.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PARCEL': 'TextEdit', 'Address': 'TextEdit', 'Zoned/Unzoned': 'TextEdit', 'Zoning': 'TextEdit', 'Strategy': 'TextEdit', 'Strat Link': 'TextEdit', 'Overlays': 'TextEdit', 'Gross HA': 'TextEdit', 'NDH': 'TextEdit', 'Lot Yield @ 20dw/HA (350m2)': 'TextEdit', 'VALUE @ 350m2': 'TextEdit', 'Market Value (20%DM)': 'TextEdit', 'Current RLP': 'TextEdit', 'Current OPC': 'TextEdit', 'Market Value (30%DM)': 'TextEdit', 'Market Value (25%DM)': 'TextEdit', 'Market Value (15%DM)': 'TextEdit', 'Market Value (12%DM)': 'TextEdit', 'Market Value (10%DM)': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'Estate Status': 'TextEdit', 'Developer': 'TextEdit', 'Vendor Company': 'TextEdit', 'Vendor Names': 'TextEdit', 'Vendor Address': 'TextEdit', 'Vendor Mobile': 'TextEdit', 'Vendor Email': 'TextEdit', 'Lead Link': 'TextEdit', 'plan_lot': 'TextEdit', 'derm_landuse': 'TextEdit', 'house_no': 'TextEdit', 'street_name': 'TextEdit', 'street_type': 'TextEdit', 'road_name': 'TextEdit', 'locality': 'TextEdit', 'legal_area': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Major Land Owner': 'TextEdit', });
lyr_Rezone_63.set('fieldImages', {'fid': 'TextEdit', });
lyr_Zoned_64.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PARCEL': 'TextEdit', 'Address': 'TextEdit', 'Zoned / Unzoned': 'TextEdit', 'Current Zone': 'TextEdit', 'Strategy': 'TextEdit', 'Strategy Link': 'TextEdit', 'Overlays': 'TextEdit', 'Gross HA': 'TextEdit', 'NDH': 'TextEdit', 'Lot Yield @ 15 Dw/Ha': 'TextEdit', 'VALUE @ 467m2': 'TextEdit', 'Market Value (20%DM)': 'TextEdit', 'Current RLP': 'TextEdit', 'Current OPC': 'TextEdit', 'Market Value (30%DM)': 'TextEdit', 'Market Value (25%DM)': 'TextEdit', 'Market Value (15%DM)': 'TextEdit', 'Market Value (12%DM)': 'TextEdit', 'Market Value (10%DM)': 'TextEdit', 'Development Contributions per Lot': 'TextEdit', 'Last Sold Price': 'TextEdit', 'Last Sold Date': 'DateTime', 'OWNERSHIP': 'TextEdit', 'Estate Status': 'TextEdit', 'Developer': 'TextEdit', 'Vendor Company': 'TextEdit', 'Vendor Names': 'TextEdit', 'Vendor Address': 'TextEdit', 'Vendor Mobile': 'TextEdit', 'Vendor Email': 'TextEdit', 'Lead Link': 'TextEdit', 'Major Land Owner': 'TextEdit', });
lyr_Suburb_65.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Locality': 'TextEdit', 'Post_Code': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LGA_66.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Previous_Council': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Estate_67.set('fieldImages', {'Estate': 'TextEdit', 'Status': 'TextEdit', 'Developer': 'TextEdit', });
lyr_MajorLandowner_68.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PARCEL': 'TextEdit', 'Address': 'TextEdit', 'Zoned/Unzoned': 'TextEdit', 'Zoning': 'TextEdit', 'Strategy': 'TextEdit', 'Strat Link': 'TextEdit', 'Overlays': 'TextEdit', 'Gross HA': 'TextEdit', 'NDH': 'TextEdit', 'Lot Yield @ 20dw/HA (350m2)': 'TextEdit', 'VALUE @ 350m2': 'TextEdit', 'Market Value (20%DM)': 'TextEdit', 'Current RLP': 'TextEdit', 'Current OPC': 'TextEdit', 'Market Value (30%DM)': 'TextEdit', 'Market Value (25%DM)': 'TextEdit', 'Market Value (15%DM)': 'TextEdit', 'Market Value (12%DM)': 'TextEdit', 'Market Value (10%DM)': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'Estate Status': 'TextEdit', 'Developer': 'TextEdit', 'Vendor Company': 'TextEdit', 'Vendor Names': 'TextEdit', 'Vendor Address': 'TextEdit', 'Vendor Mobile': 'TextEdit', 'Vendor Email': 'TextEdit', 'Lead Link': 'TextEdit', 'plan_lot': 'TextEdit', 'derm_landuse': 'TextEdit', 'house_no': 'TextEdit', 'street_name': 'TextEdit', 'street_type': 'TextEdit', 'road_name': 'TextEdit', 'locality': 'TextEdit', 'legal_area': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Major Land Owner': 'TextEdit', });
lyr_EstateLabel_69.set('fieldImages', {'fid': 'TextEdit', 'Estate': 'TextEdit', 'Status': 'TextEdit', 'Developer': 'TextEdit', });
lyr_ParcelAttributesLabel_70.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PARCEL': '', 'Address': '', 'Zoned / Unzoned': '', 'Current Zone': '', 'Strategy': '', 'Strategy Link': '', 'Overlays': '', 'Gross HA': '', 'NDH': '', 'Lot Yield @ 15 Dw/Ha': '', 'VALUE @ 467m2': '', 'Market Value (20%DM)': '', 'Current RLP': '', 'Current OPC': '', 'Market Value (30%DM)': '', 'Market Value (25%DM)': '', 'Market Value (15%DM)': '', 'Market Value (12%DM)': '', 'Market Value (10%DM)': '', 'Development Contributions per Lot': '', 'Last Sold Price': '', 'Last Sold Date': '', 'OWNERSHIP': '', 'Estate Status': '', 'Developer': '', 'Vendor Company': '', 'Vendor Names': '', 'Vendor Address': '', 'Vendor Mobile': '', 'Vendor Email': '', 'Lead Link': '', 'Major Land Owner': '', '_Name': '', '_Current RLP': '', '_Current OPC': '', '_Development Contributions per Lot': '', '_Market Value (20%DM)': '', '_Market Value (30%DM)': '', '_Market Value (25%DM)': '', '_Market Value (15%DM)': '', '_Market Value (12%DM)': '', '_Market Value (10%DM)': '', });
lyr_Strategicportland_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Limiteddevelopment_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Specialpurpose_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Communityfacilities_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Highimpactindustry_6.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Industry_7.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Environmentalmanagementandconservation_8.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Sportandrecreation_9.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Openspace_10.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Rural_11.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Specialisedcentre_12.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Ruralresidential_13.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Localcentre_14.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Neighbourhoodcentre_15.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Districtcentre_16.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Majorcentre_17.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Principalcentre_18.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Highdensityresidential_19.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Mediumdensityresidential_20.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Emergingcommunity_21.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_Lowdensityresidential_22.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Zone_Precincts': 'hidden field', 'CF_Label': 'hidden field', 'AREA_SQM': 'hidden field', 'ZONE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Amendment': 'hidden field', 'INCLUDE': 'hidden field', });
lyr_FTMFutureTrunkMains_23.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LGIP_ID': 'hidden field', 'Asset_Name': 'hidden field', 'Asset_Type': 'hidden field', 'Shape_Leng': 'hidden field', 'BRC_Timing': 'hidden field', 'SOW_Total_Asset_Cost_Base_Year': 'hidden field', 'Shape_Length': 'hidden field', });
lyr_PRWTPProposedRubyannaWastewaterTreatmentPlant_24.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_WTPWastewaterTreatmentPlant_25.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FACILITY_GROUP': 'hidden field', 'FACILITY_NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Infrastructure_Status': 'hidden field', 'Infrastructure_Change_Date': 'hidden field', });
lyr_WTPBWastewaterTreatmentPlantBuffer_26.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FACILITY_GROUP': 'hidden field', 'FACILITY_NAME': 'hidden field', 'BUFF_DIST': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Infrastructure_Status': 'hidden field', 'Infrastructure_Change_Date': 'hidden field', });
lyr_WMFBWasteManagementFacilityBuffer_27.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FACILITY_GROUP': 'hidden field', 'FACILITY_NAME': 'hidden field', 'BUFF_DIST': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_WMFWasteManagementFacility_28.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FACILITY_GROUP': 'hidden field', 'FACILITY_NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_STSASeaTurtleSensitiveArea_29.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'BUFF_DIST': 'hidden field', 'Name': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SCRCBStateControlledRoadCorridorBuffer_30.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'STREET': 'hidden field', 'ROAD_NAME': 'hidden field', 'Segment_ID': 'hidden field', 'Parcel_ID': 'hidden field', 'Seg_Par': 'hidden field', 'BUFF_DIST': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SLSteepLand_31.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'gridcode': 'hidden field', 'Name': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PRWTPBProposedRubyannaWastewaterTreatmentPlantBuffer_32.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'BUFF_DIST': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_FPFuturePathways_33.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Asset_Type': 'hidden field', 'Path_Width': 'hidden field', 'LGIP_ID': 'hidden field', 'Facility_L': 'hidden field', 'Constructi': 'hidden field', 'Shape_Leng': 'hidden field', 'BRC_Timing': 'hidden field', 'SOW_Total_Asset_Cost_Base_Year': 'hidden field', 'Shape_Length': 'hidden field', });
lyr_FRFutureRoads_34.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Hierarchy': 'hidden field', 'Project_Type': 'hidden field', 'Project': 'hidden field', 'LGIP_ID': 'hidden field', 'Shape_Leng': 'hidden field', 'BRC_Timing': 'hidden field', 'SOW_Total_Asset_Cost_Base_Year': 'hidden field', 'Shape_Length': 'hidden field', });
lyr_OAOperationalAirspace_35.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LOCATION': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_GPBGasPipelineBuffer_36.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'STATUS': 'hidden field', 'D_GRANTED': 'hidden field', 'PRINC_HLDR': 'hidden field', 'STAGE': 'hidden field', 'BUFF_DIST': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'PERMIT_USE': 'hidden field', 'PERMIT_TYPE': 'hidden field', });
lyr_TRSATransportRouteSeparationArea_37.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KRA_NO': 'hidden field', 'KRA_NAME': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LACSLLotsAffectedbyCoastalSetbackLine_38.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MEIBMajorElectricityInfrastructureBuffer_39.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'POWERLINK': 'hidden field', 'BUFF_DIST': 'hidden field', 'ERGON': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MESBMajorElectricitySubstationBuffer_40.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'SITE_NAME': 'hidden field', 'SITE_STATU': 'hidden field', 'BUFF_DIST': 'hidden field', 'ASSET_TYPE': 'hidden field', 'OP_NUMBER': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MTMiningTenements_41.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Name': 'hidden field', 'DIVISION': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'PERMITID': 'hidden field', 'DISPLAYNAME': 'hidden field', 'PERMITNAME': 'hidden field', 'PERMITTYPEID': 'hidden field', 'PERMITTYPE': 'hidden field', 'PERMITTYPEABBREVIATION': 'hidden field', 'PERMITNUMBER': 'hidden field', 'PERMITSTATUSTYPEID': 'hidden field', 'PERMITSTATUS': 'hidden field', 'PERMITSTATE': 'hidden field', 'PERMITMINERALS': 'hidden field', 'PERMITPURPOSE': 'hidden field', 'LODGEDATE': 'hidden field', 'APPROVEDATE': 'hidden field', 'EXPIRYDATE': 'hidden field', 'NONCURRENTDATE': 'hidden field', 'AUTHORISEDHOLDERID': 'hidden field', 'AUTHORISEDHOLDERNAME': 'hidden field', 'NATIVETITLECATEGORY': 'hidden field', 'SHAPEAREA': 'hidden field', 'SHAPEAREAHECTARES': 'hidden field', 'AREA_SUBBLOCKS': 'hidden field', });
lyr_RCRailCorridor_42.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Area': 'hidden field', 'AREA_UNIT': 'hidden field', 'Category': 'hidden field', 'QR_INTERES': 'hidden field', 'Date_Stamp': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RSAResourceSeparationArea_43.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KRA_NO': 'hidden field', 'KRA_NAME': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LHAPLocalHeritageAdjoiningProperties_44.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'Previous_Council_Name': 'hidden field', 'LOT': 'hidden field', 'PLAN_': 'hidden field', 'Parcel_Number': 'hidden field', 'Registration_Date': 'hidden field', 'DERM_LANDUSE': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Description': 'hidden field', 'Table7_No': 'hidden field', });
lyr_LHPLocalHeritagePlaces_45.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'ID': 'hidden field', 'Site_Name': 'hidden field', 'Address': 'hidden field', 'SURV_IND': 'hidden field', 'PARCEL_TYP': 'hidden field', 'COVER_TYP': 'hidden field', 'LOT': 'hidden field', 'PLAN_': 'hidden field', 'LOTPLAN': 'hidden field', 'SEG_NUM': 'hidden field', 'PAR_NUM': 'hidden field', 'SEGPAR': 'hidden field', 'PAR_IND': 'hidden field', 'LOT_AREA': 'hidden field', 'EXCL_AREA': 'hidden field', 'LOT_VOLUME': 'hidden field', 'TENURE': 'hidden field', 'PRC': 'hidden field', 'PARISH': 'hidden field', 'COUNTY': 'hidden field', 'LAC': 'hidden field', 'SHIRE_NAME': 'hidden field', 'FEAT_NAME': 'hidden field', 'ALIAS_NAME': 'hidden field', 'LOC': 'hidden field', 'LOCALITY': 'hidden field', 'ACC_CODE': 'hidden field', 'CA_AREA_SQ': 'hidden field', 'Suburb': 'hidden field', 'Descriptio': 'hidden field', 'Council_Re': 'hidden field', 'Ref_No': 'hidden field', 'Table7_No': 'hidden field', 'LAYER_NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_HPHeritagePlaces_46.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLACE_ID': 'hidden field', 'ACCURACY': 'hidden field', 'PLACENAME': 'hidden field', 'STATUS': 'hidden field', 'ENTRYDATE': 'hidden field', 'AREA_SQM': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_GPGasPipeline_47.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Shape_Length': 'hidden field', 'PERMITID': 'hidden field', 'PERMITNAME': 'hidden field', 'PERMITTYPEID': 'hidden field', 'PERMITTYPE': 'hidden field', 'PERMITTYPEABBREVIATION': 'hidden field', 'PERMITNUMBER': 'hidden field', 'PERMITSTATUSTYPEID': 'hidden field', 'PERMITSTATUS': 'hidden field', 'PERMITSTATE': 'hidden field', 'PERMITMINERALS': 'hidden field', 'PERMITPURPOSE': 'hidden field', 'LODGEDATE': 'hidden field', 'APPROVEDATE': 'hidden field', 'EXPIRYDATE': 'hidden field', 'NONCURRENTDATE': 'hidden field', 'AUTHORISEDHOLDERID': 'hidden field', 'AUTHORISEDHOLDERNAME': 'hidden field', 'NATIVETITLECATEGORY': 'hidden field', 'DIVISION': 'hidden field', 'AREA_SUBBLOCKS': 'hidden field', 'NAME': 'hidden field', });
lyr_MEIMajorElectricityInfrastructure_48.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'ROUTE_LENG': 'hidden field', 'ANNOTATION': 'hidden field', 'SW_SIZE': 'hidden field', 'TYPE': 'hidden field', 'CONSTRUCTI': 'hidden field', 'LEGACY_ID': 'hidden field', 'LEGACY_FEE': 'hidden field', 'OPERATING_': 'hidden field', 'TR_LINE_ID': 'hidden field', 'GSCH_ANNOT': 'hidden field', 'ECORP_ASSE': 'hidden field', 'SERVICE_ST': 'hidden field', 'ANNOTATI00': 'hidden field', 'REPORTING_': 'hidden field', 'TR_LINE_GC': 'hidden field', 'FEEDER_OP_': 'hidden field', 'FEEDER_O00': 'hidden field', 'DATE_ERECT': 'hidden field', 'VERIFIED': 'hidden field', 'WIND_PRESS': 'hidden field', 'ENERGISED': 'hidden field', 'MEAN_EFFEC': 'hidden field', 'SPECIAL_CO': 'hidden field', 'ZONE_SUBST': 'hidden field', 'PHASE': 'hidden field', 'FEEDER_SEC': 'hidden field', 'MAX_DESIGN': 'hidden field', 'PHASE_CODE': 'hidden field', 'LINE_LENGT': 'hidden field', 'REMARKS': 'hidden field', 'OWNER': 'hidden field', 'NO_CONDUCT': 'hidden field', 'CONSTRUC00': 'hidden field', 'DESCRIPTIO': 'hidden field', 'ANNOTATI01': 'hidden field', 'NBL': 'hidden field', 'CUTTING_AL': 'hidden field', 'GSCH_ANN00': 'hidden field', 'LGA': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', });
lyr_WBWaterways_49.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_STIAStormTideInundationArea_50.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Name': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RPAResourceProcessingArea_51.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'NAME': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_EASEMENTS_52.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PLAN_LOT': 'hidden field', 'PURPOSE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SPEncumbrances_53.set('fieldLabels', {'id': 'hidden field', });
lyr_HugesandSeaviewBargarraStructurePlan_54.set('fieldLabels', {'id': 'hidden field', });
lyr_CentralCoastalCorridorBargaratoElliotHeads_55.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_KalkieAshfieldStructurePlanConceptNew_56.set('fieldLabels', {'id': 'hidden field', });
lyr_BranyanLocalAreaPlan_57.set('fieldLabels', {'id': 'hidden field', });
lyr_Unzoned_62.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PARCEL': 'header label - always visible', 'Address': 'inline label - visible with data', 'Zoned/Unzoned': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Strategy': 'hidden field', 'Strat Link': 'hidden field', 'Overlays': 'hidden field', 'Gross HA': 'hidden field', 'NDH': 'hidden field', 'Lot Yield @ 20dw/HA (350m2)': 'hidden field', 'VALUE @ 350m2': 'hidden field', 'Market Value (20%DM)': 'hidden field', 'Current RLP': 'hidden field', 'Current OPC': 'hidden field', 'Market Value (30%DM)': 'hidden field', 'Market Value (25%DM)': 'hidden field', 'Market Value (15%DM)': 'hidden field', 'Market Value (12%DM)': 'hidden field', 'Market Value (10%DM)': 'hidden field', 'OWNERSHIP': 'hidden field', 'Estate Status': 'hidden field', 'Developer': 'hidden field', 'Vendor Company': 'hidden field', 'Vendor Names': 'hidden field', 'Vendor Address': 'hidden field', 'Vendor Mobile': 'hidden field', 'Vendor Email': 'hidden field', 'Lead Link': 'hidden field', 'plan_lot': 'hidden field', 'derm_landuse': 'hidden field', 'house_no': 'hidden field', 'street_name': 'hidden field', 'street_type': 'hidden field', 'road_name': 'hidden field', 'locality': 'hidden field', 'legal_area': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Major Land Owner': 'hidden field', });
lyr_Rezone_63.set('fieldLabels', {'fid': 'hidden field', });
lyr_Zoned_64.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PARCEL': 'header label - always visible', 'Address': 'inline label - visible with data', 'Zoned / Unzoned': 'inline label - visible with data', 'Current Zone': 'inline label - visible with data', 'Strategy': 'inline label - visible with data', 'Strategy Link': 'inline label - visible with data', 'Overlays': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'NDH': 'inline label - visible with data', 'Lot Yield @ 15 Dw/Ha': 'inline label - visible with data', 'VALUE @ 467m2': 'header label - always visible', 'Market Value (20%DM)': 'inline label - visible with data', 'Current RLP': 'inline label - visible with data', 'Current OPC': 'inline label - visible with data', 'Market Value (30%DM)': 'inline label - visible with data', 'Market Value (25%DM)': 'inline label - visible with data', 'Market Value (15%DM)': 'inline label - visible with data', 'Market Value (12%DM)': 'inline label - visible with data', 'Market Value (10%DM)': 'inline label - visible with data', 'Development Contributions per Lot': 'inline label - visible with data', 'Last Sold Price': 'inline label - visible with data', 'Last Sold Date': 'inline label - visible with data', 'OWNERSHIP': 'header label - always visible', 'Estate Status': 'inline label - visible with data', 'Developer': 'inline label - visible with data', 'Vendor Company': 'inline label - visible with data', 'Vendor Names': 'inline label - visible with data', 'Vendor Address': 'inline label - visible with data', 'Vendor Mobile': 'inline label - visible with data', 'Vendor Email': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', 'Major Land Owner': 'inline label - visible with data', });
lyr_Suburb_65.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Locality': 'hidden field', 'Post_Code': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LGA_66.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Previous_Council': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Estate_67.set('fieldLabels', {'Estate': 'hidden field', 'Status': 'hidden field', 'Developer': 'hidden field', });
lyr_MajorLandowner_68.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PARCEL': 'hidden field', 'Address': 'hidden field', 'Zoned/Unzoned': 'hidden field', 'Zoning': 'hidden field', 'Strategy': 'hidden field', 'Strat Link': 'hidden field', 'Overlays': 'hidden field', 'Gross HA': 'hidden field', 'NDH': 'hidden field', 'Lot Yield @ 20dw/HA (350m2)': 'hidden field', 'VALUE @ 350m2': 'hidden field', 'Market Value (20%DM)': 'hidden field', 'Current RLP': 'hidden field', 'Current OPC': 'hidden field', 'Market Value (30%DM)': 'hidden field', 'Market Value (25%DM)': 'hidden field', 'Market Value (15%DM)': 'hidden field', 'Market Value (12%DM)': 'hidden field', 'Market Value (10%DM)': 'hidden field', 'OWNERSHIP': 'hidden field', 'Estate Status': 'hidden field', 'Developer': 'hidden field', 'Vendor Company': 'hidden field', 'Vendor Names': 'hidden field', 'Vendor Address': 'hidden field', 'Vendor Mobile': 'hidden field', 'Vendor Email': 'hidden field', 'Lead Link': 'hidden field', 'plan_lot': 'hidden field', 'derm_landuse': 'hidden field', 'house_no': 'hidden field', 'street_name': 'hidden field', 'street_type': 'hidden field', 'road_name': 'hidden field', 'locality': 'hidden field', 'legal_area': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Major Land Owner': 'hidden field', });
lyr_EstateLabel_69.set('fieldLabels', {'fid': 'hidden field', 'Estate': 'hidden field', 'Status': 'hidden field', 'Developer': 'hidden field', });
lyr_ParcelAttributesLabel_70.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PARCEL': 'hidden field', 'Address': 'hidden field', 'Zoned / Unzoned': 'hidden field', 'Current Zone': 'hidden field', 'Strategy': 'hidden field', 'Strategy Link': 'hidden field', 'Overlays': 'hidden field', 'Gross HA': 'hidden field', 'NDH': 'hidden field', 'Lot Yield @ 15 Dw/Ha': 'hidden field', 'VALUE @ 467m2': 'hidden field', 'Market Value (20%DM)': 'hidden field', 'Current RLP': 'hidden field', 'Current OPC': 'hidden field', 'Market Value (30%DM)': 'hidden field', 'Market Value (25%DM)': 'hidden field', 'Market Value (15%DM)': 'hidden field', 'Market Value (12%DM)': 'hidden field', 'Market Value (10%DM)': 'hidden field', 'Development Contributions per Lot': 'hidden field', 'Last Sold Price': 'hidden field', 'Last Sold Date': 'hidden field', 'OWNERSHIP': 'hidden field', 'Estate Status': 'hidden field', 'Developer': 'hidden field', 'Vendor Company': 'hidden field', 'Vendor Names': 'hidden field', 'Vendor Address': 'hidden field', 'Vendor Mobile': 'hidden field', 'Vendor Email': 'hidden field', 'Lead Link': 'hidden field', 'Major Land Owner': 'hidden field', '_Name': 'hidden field', '_Current RLP': 'hidden field', '_Current OPC': 'hidden field', '_Development Contributions per Lot': 'hidden field', '_Market Value (20%DM)': 'hidden field', '_Market Value (30%DM)': 'hidden field', '_Market Value (25%DM)': 'hidden field', '_Market Value (15%DM)': 'hidden field', '_Market Value (12%DM)': 'hidden field', '_Market Value (10%DM)': 'hidden field', });
lyr_ParcelAttributesLabel_70.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});