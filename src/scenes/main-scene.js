import Scene from "/thing-engine/js/components/scene.js";
import TilemapProcessor from "../utils/tilemap-processor.js";

export default class MainMenu extends Scene {
	
	onShow() {
	}
	
	update() {
		MainMenu.count = 0;
		super.update();
	}
}

MainMenu.count = 0;