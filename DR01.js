var map;

//---------  JSON DataStoee ------------
var drLayerURL  = "http://ags.giskku.in.th/ArcGISServer/rest/services/NRU/NRU-MODIS/MapServer/0?f=json"

var drStore = new Ext.data.JsonStore({
	url : drLayerURL
	, fields :["timeInfo"]
})
drStore.load();

drStore.on('load', function (ds) {
        var time = drStore.get("timeInfo");
        alert(time);
    });


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

Ext.onReady(function () {
	Ext.data.Connection.prototype.useDefaultXhrHeader = false;
    Ext.QuickTips.init();
    //MainTabs.render('grid-ct');

});
