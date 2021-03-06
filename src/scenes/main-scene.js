/*
*	minimal scene with basic engine methods
*/
import Scene from "thing-editor/js/engine/components/scene.js";

class MainMenu extends Scene {
	
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

export default MainMenu;