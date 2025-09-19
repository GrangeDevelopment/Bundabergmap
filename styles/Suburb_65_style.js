var size = 0;
var placement = 'point';

var style_Suburb_65 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "11.700000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#fa0000";
    var bufferWidth = 2.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Locality") !== null && resolution > 0 && resolution < 70) {
        labelText = String(feature.get("Locality"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: [6.27,1.254,2.508,1.254,2.508,1.254], lineCap: 'butt', lineJoin: 'miter', width: 1.254}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
