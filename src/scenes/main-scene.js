import Scene from "/thing-engine/js/components/scene.js";

export default class MainMenu extends Scene {
	
	onShow() {
	}
	
	update() {
		MainMenu.count = 0;
	}
	
}

MainMenu.count = 0;