import Lib from "/thing-engine/js/lib.js";

let tm;

const GROUND = 1;
const WALL = 2;


const types = [
	{name:'Groung', value: GROUND},
	{name:'Wall', value: WALL}
];

const imgIdToType = [
	GROUND,
	GROUND,
	WALL,
	WALL
];
imgIdToType[-1] = -1;


Lib.tileMapProcessor = {
	onTileEditCallback:(tilemap, x, y, type) => {
		tm = tilemap;
		processCell(x, y, type);
		y++;
		processCell(x, y, getCellType(x,y));
	},
	imageToType,
	types,
	getCellType
};

function imageToType(imgId) {
	return imgIdToType[imgId];
}

function getCellType(x, y) {
	return imageToType(tm.getTile(x, y));
}

function processCell(x, y, type) {
	if(type < 0) { //erasing
		tm.setTile(x, y, -1);
		return;
	}

	let imgId = (type - 1) * 2;
	if(y > 0 && getCellType(x, y-1) === WALL) {
		imgId ++;
	}
	tm.setTile(x, y, imgId);
}

export default null;