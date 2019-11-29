import Lib from "thing-engine/js/lib.js";

class PerspectiveSprite extends PIXI.SimplePlane {
	
	constructor() {
		super(Lib.getTexture('WHITE'), 2 , 2);
		//this.vertexData = [1,2,3,4,5,6,7,8];
		//this.uvs = [0,0,1,0,1,1,1,0];
	}
	
	update() {
		this.vertexData[0] = Math.random() * -20;
		this.vertexData[1] = Math.random() * 20;
	}
	
	get x0() {
		return this.vertexData[0];
	}
	set x0(v) {
		this.vertexData[0] = v;
	}
	get y0() {
		return this.vertexData[1];
	}
	set y0(v) {
		this.vertexData[1] = v;
	}
	get x1() {
		return this.vertexData[2];
	}
	set x1(v) {
		this.vertexData[2] = v;
	}
	get y1() {
		return this.vertexData[3];
	}
	set y1(v) {
		this.vertexData[3] = v;
	}
	get x2() {
		return this.vertexData[4];
	}
	set x2(v) {
		this.vertexData[4] = v;
	}
	get y2() {
		return this.vertexData[5];
	}
	set y2(v) {
		this.vertexData[5] = v;
	}
	get x3() {
		return this.vertexData[6];
	}
	set x3(v) {
		this.vertexData[6] = v;
	}
	get y3() {
		return this.vertexData[7];
	}
	set y3(v) {
		this.vertexData[7] = v;
	}
}

export default PerspectiveSprite;

/// #if EDITOR

PerspectiveSprite.__EDITOR_icon = 'tree/perspective';
__EDITOR_editableProps(PerspectiveSprite, [
	{
		type: 'splitter',
		title: 'Vertices:',
		name: 'vertices'
	},
	{
		name: 'x0',
		type: Number
	},
	{
		name: 'y0',
		type: Number
	},{
		name: 'x1',
		type: Number
	},
	{
		name: 'y1',
		type: Number
	},{
		name: 'x2',
		type: Number
	},
	{
		name: 'y2',
		type: Number
	},{
		name: 'x3',
		type: Number
	},
	{
		name: 'y3',
		type: Number
	}
]);

/// #endif