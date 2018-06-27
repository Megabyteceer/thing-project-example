import Lib from "/thing-engine/js/lib.js";

let tm;

const types = [
	'line',
	'brick'
];

Lib.timapProcessor = {
	onTileEditCallback:(tilemap, x, y, type) => {
		tm = tilemap;
		processCell(x, y, type);
	},
	imageToType,
	types,
	getCellType
};

function imageToType(type) {
	return type;
}

function getCellType(x, y) {
	return imageToType(tm.getTile(X, Y));
}

function processCell(x, y, type) {
	tm.setTile(x, y, type);
}

export default null;