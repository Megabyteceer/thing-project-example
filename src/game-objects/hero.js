import DSprite from "/thing-engine/js/components/d-sprite.js";
import Scene from "/thing-engine/js/components/scene.js";
import keys from "/thing-engine/js/utils/keys.js";

export default class Hero extends DSprite {

	init() {
		super.init();
		this.scene = this.findParentByType(Scene);
	}

	update() {
		if(keys.left) {
			this.x -= 5;
		}
		if(keys.right) {
			this.x += 5;
		}
		if(keys.up) {
			this.y -= 5;
		}
		if(keys.down) {
			this.y += 5;
		}

		this.scene.cameraLookTo = this;

	}
}