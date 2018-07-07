/*
*	minimal scene with basic engine methods
*/
import Scene from "/thing-engine/js/components/scene.js";

export default class MainMenu extends Scene {
	
	init() { //called by engine after scene created
		super.init();
	}

	onShow() { //called after scene added to screen

	}

	update() { //called 60 frames per second
		super.update();
	}

	onHide() { //called before scene 

	}

	onRemove() { //called by engine before scene will be destroyed
		super.onRemove();
	}
}