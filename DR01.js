var map;

//---------  JSON DataStoee ------------
var drLayerURL  = "http://ags.giskku.in.th/ArcGISServer/rest/services/NRU/NRU-MODIS/MapServer/0?f=json&pretty=true"

var drJson = $.getJSON(drLayerURL);
var startDate,endDate = null;

var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': drLayerURL,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 
startDate = json['timeInfo']['timeExtent'][0];
endDate = json['timeInfo']['timeExtent'][1];

function epoch2HDate(epoch){
	var fDate = new Date(epoch);
	date = fDate.toLocaleString();
	d = date.substring(0,2);
	m = date.substring(3,5);
	y = parseInt(date.substring(6,10))+543
	return y+"/"+m+"/"+d+" 00:00:00"
}

//console.log(epoch2HDate(startDate));
//console.log(epoch2HDate(endDate));

require([
	"esri/map", "esri/layers/ArcGISDynamicMapServiceLayer", 
	"esri/TimeExtent", "esri/dijit/TimeSlider",
	"dojo/_base/array", "dojo/dom", "dojo/domReady!", "esri/config"
], function(Map, ArcGISDynamicMapServiceLayer, TimeExtent, TimeSlider, arrayUtils, dom, esriConfig){
	//esri.config.defaults.io.corsEnabledServers.push("ags.giskku.in.th");
	map = new Map("mapDiv" ,
	{
		basemap : "hybrid",
		center : [102.697870,16.014687],
		zoom : 7
	});

	var ndviLayer = new ArcGISDynamicMapServiceLayer("http://ags.giskku.in.th/ArcGISServer/rest/services/NRU/NRU-MODIS/MapServer");
	//ndviLayer.setVisibleLayers([0]);
	map.addLayers([ndviLayer]);
	//-map.on("layers-add-result",initSlider);
	//function initSlider(){
	//	var timeSlider = new TimeSlider({
	//		style:"width: 100%"
	//	},dom.byId("timeSlideDev"));
	//	map.setTimeSlider(timeSlider);

	//	var timeExtent = new TimeExtent();
	//	timeExtent.startTime = new Date()

	//}
});

function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

Ext.onReady(function () {
    Ext.QuickTips.init();
    Ext.Ajax.useDefaultXhrHeader = false;
    Ext.Ajax.cors = true;
    //MainTabs.render('grid-ct');

});
