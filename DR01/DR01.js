var map;
require([
	"esri/map", "esri/layers/ArcGISDynamicMapServiceLayer", 
	"esri/TimeExtent", "esri/dijit/TimeSlider",
	"dojo/_base/array", "dojo/dom", "dojo/domReady!"
], function(Map, ArcGISDynamicMapServiceLayer, TimeExtent, TimeSlider, arrayUtils, dom){
	map = new Map("mapDiv" ,
	{
		basemap : "hybrid",
		center : [102.697870,16.014687],
		zoom : 7
	});

	var ndviLayer = new ArcGISDynamicMapServiceLayer("http://ags.giskku.in.th/ArcGISServer/rest/services/NRU/NRU-MODIS/MapServer");
	//ndviLayer.setVisibleLayers([0]);
	map.addLayers([ndviLayer]);

});