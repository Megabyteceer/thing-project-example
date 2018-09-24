/*
* Example of custom game object with an editable property.
* Can be added on scene in editor. You can find it in Classes List Window
*/

import MainMenu from "../scenes/main-scene.js";
import DSprite from "thing-engine/js/components/d-sprite.js";
import game from "thing-engine/js/game.js";

class Bunny extends DSprite {
	
	init() {
		super.init();
	}

	onRemove() {
		super.onRemove();
	}
	
	update() {
		MainMenu.count++;
		if (this.y > game.H - 25) {
			this.ySpeed = -Math.abs(this.ySpeed);
		} else if(this.y < 0) {
			this.y = 0;
			this.ySpeed *= -1;
		} else {
			this.ySpeed += this.gravity;
		}

		if (this.x < 0) {
			this.x = 0;
			this.xSpeed *= -1.0;
		}
		
		if (this.x > game.W) {
			this.x = game.W;
			this.xSpeed *= -1.0;
		}
		
		this.scale.x = this.xSpeed > 0 ? 1 : -1;
		super.update();
	}
	
	setTransparency(v) { //custom method used as Button's callback exanple in "levels/2" scene
		this.alpha = v;
	}
}

export default Bunny;

// Editor's metadata used for reresent object and edit it's properties. 
// Look thing-engine components folder to find additional examples of meta-data

/// #if EDITOR
Bunny.__EDITOR_group = "Custom/Bunnies"; //group in Classes List Window for more comfort

__EDITOReditableProps(Bunny, [ //list of editable properties
	{
		name:'gravity',
		type:Number,
		default: 1,
		step: 0.01
	}
]);
/// #endif