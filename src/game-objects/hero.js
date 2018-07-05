import keys from "/thing-engine/js/utils/keys.js";
import Unit from "./unit.js";
import {
	stepTo
} from "/thing-engine/js/utils/utils.js";

export default class Hero extends Unit {

	init() {
		super.init();
		this.scene.localPlayer = this;
	}

	update() {
		this.xSpeed = stepTo(this.xSpeed, 0, 1.0);
		this.ySpeed = stepTo(this.ySpeed, 0, 1.0);

		this.movementProcess();

		//speed limnit
		if (this.xSpeed > this.speed) {
			this.xSpeed = this.speed;
		} else if (this.xSpeed < -this.speed) {
			this.xSpeed = -this.speed;
		}

		if (this.ySpeed > this.speed) {
			this.ySpeed = this.speed;
		} else if (this.ySpeed < -this.speed) {
			this.ySpeed = -this.speed;
		}
		super.update();
	}

	movementProcess() {
		if (keys.left && this.isFloorThere(-this.radius - 1, 0)) {
			this.xSpeed -= 2;
		} else if (keys.right && this.isFloorThere(this.radius + 1, 0)) {
			this.xSpeed += 2;
		} else {
			this.xSpeed = stepTo(this.xSpeed, 0, 2);
		}
		if (keys.up && this.isFloorThere(0, -this.radius - 1)) {
			this.ySpeed -= 2;
		} else if (keys.down && this.isFloorThere(0, this.radius + 1)) {
			this.ySpeed += 2;
		} else {
			this.ySpeed = stepTo(this.ySpeed, 0, 2);
		}
	}
}