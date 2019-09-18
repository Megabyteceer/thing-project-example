import DSprite from "thing-engine/js/components/d-sprite.js";
import Scene from "thing-engine/js/components/scene.js";

class Unit extends DSprite {

	init() {
		super.init();
		this.scene = this.findParentByType(Scene);
	}

	update() {
		this.wallsExtrude();
		super.update();
	}

	isFloorThere(x, y) {
		return this.scene.isFloorThere(x + this.x, y + this.y);
	}

	isWallThere(x,y) {
		return this.scene.isWallThere(x + this.x, y + this.y);
	}

	wallsExtrude() {
		if (this.isWallThere(-this.radius, 0)) {
			this.x++;
			if (this.xSpeed < 0) {
				this.xSpeed = 0;
			}
		} else if (this.isWallThere(this.radius, 0)) {
			this.x--;
			if (this.xSpeed > 0) {
				this.xSpeed = 0;
			}
		}

		if (this.isWallThere(0, -this.radius)) {
			this.y++;
			if (this.ySpeed < 0) {
				this.ySpeed = 0;
			}
		} else if (this.isWallThere(0, this.radius)) {
			this.y--;
			if (this.ySpeed > 0) {
				this.ySpeed = 0;
			}
		}
	}
}

export default Unit;

/// #if EDITOR
__EDITOR_editableProps(Unit, [
	{
		type: 'splitter',
		title: 'Unit:',
		name: 'unit'
	},
	{
		type: Number,
		name: 'HP',
		min: 1,
		default: 1
	},
	{
		type: Number,
		name: 'radius',
		min: 1,
		max: 25,
		default: 10
	},
	{
		type: Number,
		name: 'speed',
		min: 1,
		max: 25,
		default: 5
	}
]);

/// #endif