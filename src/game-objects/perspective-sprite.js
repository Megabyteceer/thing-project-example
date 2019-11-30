import Lib from "thing-engine/js/lib.js";

class PerspectiveSprite extends PIXI.SimplePlane {
	
	constructor() {
		super(Lib.getTexture('WHITE'), 2 , 2);
	}
	
	update() {
		this.x0 = Math.random() * -20;
		this.y0 = Math.random() * 20;
	}
	
	get x0() {
		return this.verticesBuffer.data[0];
	}
	set x0(v) {
		this.verticesBuffer.data[0] = v;
		this.verticesBuffer._updateID++;
	}
	get y0() {
		return this.verticesBuffer.data[1];
	}
	set y0(v) {
		this.verticesBuffer.data[1] = v;
		this.verticesBuffer._updateID++;
	}
	get x1() {
		return this.verticesBuffer.data[2];
	}
	set x1(v) {
		this.verticesBuffer.data[2] = v;
		this.verticesBuffer._updateID++;
	}
	get y1() {
		return this.verticesBuffer.data[3];
	}
	set y1(v) {
		this.verticesBuffer.data[3] = v;
		this.verticesBuffer._updateID++;
	}
	get x2() {
		return this.verticesBuffer.data[4];
	}
	set x2(v) {
		this.verticesBuffer.data[4] = v;
		this.verticesBuffer._updateID++;
	}
	get y2() {
		return this.verticesBuffer.data[5];
	}
	set y2(v) {
		this.verticesBuffer.data[5] = v;
		this.verticesBuffer._updateID++;
	}
	get x3() {
		return this.verticesBuffer.data[6];
	}
	set x3(v) {
		this.verticesBuffer.data[6] = v;
		this.verticesBuffer._updateID++;
	}
	get y3() {
		return this.verticesBuffer.data[7];
	}
	set y3(v) {
		this.verticesBuffer.data[7] = v;
		this.verticesBuffer._updateID++;
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