import DSprite from "/thing-engine/js/components/d-sprite.js";
import Gameplay from "../scenes/gameplay.js"; // eslint-disable-line no-unused-vars
import Scene from "/thing-engine/js/components/scene.js";

export default class Unit extends DSprite {

	init() {
		super.init();
		/**@type {Gameplay} */
		this.scene = this.findParentByType(Scene);
		this.unitsGrid = this.scene.unitsGrid;
		this.currentHp = this.HP;
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
		/// #if EDITOR
		/*if (!this._tile && this.HP > 0) {
			assert(false, 'Alive Unit with no tile detected. ' + this.constructor.name + '; x:' + this.x + '; y:' + this.y + '; hp: ' + this.HP + '; isLocal=' + (this === this.scene.localPlayer));
		}*/
		/// #endif

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

	onRemove() {
		super.onRemove();
	}
}
/// #if EDITOR
__EDITOReditableProps(Unit, [
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