import DSprite from "thing-editor/js/engine/components/d-sprite.js";

export default class Particle extends DSprite {

	init() {
		/// #if EDITOR
		__getNodeExtendData(this).hidden = true;
		/// #endif
		super.init();
		this.rSpeed = Math.random() - 0.5;
		this.life = 2.0;
		this.scl = Math.random()* 0.6 + 0.2;
		this.scale.x = this.scl;
		this.scale.y = this.scl;
		this.alpha = Math.random()* 0.6 + 0.2;
	}

	update() {
		this.xSpeed += (Math.random() - 0.5) * 0.3;
		this.ySpeed += (Math.random() - 0.6) * 0.3;
		this.xSpeed *= 0.95;
		this.ySpeed *= 0.95;
		super.update();
		this.life -= 0.1;
		if(this.life < 0.001) {
			this.remove();
		} else {
			if(this.life <= 1) {
				this.scale.x = this.scl * this.life;
				this.scale.y = this.scl * this.life;
			}
		}
	}
}