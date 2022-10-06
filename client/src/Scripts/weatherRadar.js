
export default function weatherRadarFunction() {
	let L;
	let map = L.map("map").setView([45.5, -75.7], 8);
	let OpenStreetMap_Mapnik = L.tileLayer(
		"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
		{
			maxZoom: 19,
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		})
	.addTo(map);
	let wmsLayer = L.tileLayer
	.wms("https://geo.weather.gc.ca/geomet?", {
		layers: "RADAR_1KM_RRAI",
		version: "1.3.0",
		opacity: 0.5
	})
	.addTo(map);
}
