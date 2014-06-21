var map;
require([
	"esri/map", "esri/layers/ArcGISDynamicMapServiceLayer", 
	"esri/TimeExtent", "esri/dijit/TimeSlider",
	"dojo/_base/array", "dojo/dom", "dojo/domReady!"
], function(
	Map, ArcGISDynamicMapServiceLayer, 
	TimeExtent, TimeSlider,
	arrayUtils, dom
){
	map = new Map("mapDiv" ,
	{
		basemap : [streets],
		center : []
	})
}