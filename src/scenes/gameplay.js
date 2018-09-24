/*
*  scene with tilemap and camera
*
*/

import Scene from "thing-engine/js/components/scene.js";
import TilemapProcessor from "../utils/tilemap-processor.js"; // eslint-disable-line no-unused-vars
import game from "thing-engine/js/game.js";

const CAMERA_BORDER = -110;

class Gameplay extends Scene {
	init() {
		super.init();

		let tilemap = this.all['tilemap'];
		this.map = tilemap.createTypedMap();
		this.W = tilemap.columns;
		this.H = tilemap.rows;
		this.pixelsH = this.H * 100;
		this.pixelsW = this.W * 100;
		this.layer = this.all['layer'];
	}

	isFloorThere(x, y) {
		return this.map[Math.floor(x/100) + Math.floor(y/100) * this.W] < 2;
	}

	isWallThere(x, y) {
		return this.map[Math.floor(x/100) + Math.floor(y/100) * this.W] >= 2;
	}

	onShow() {
	}
	
	update() {
		this.updateCamera();
		super.update();
	}

	updateCamera() {

		if(this.localPlayer) {
			let cx = game.W / 2 - this.localPlayer.x;
			let cy = game.H / 2 - this.localPlayer.y;
			
			if(cx > CAMERA_BORDER) {
				cx = CAMERA_BORDER;
			} else if(cx < (-this.pixelsW - CAMERA_BORDER + game.W)) {
				cx = -this.pixelsW - CAMERA_BORDER + game.W;
			}

			if(cy > CAMERA_BORDER) {
				cy = CAMERA_BORDER;
			} else if(cy < (-this.pixelsH - CAMERA_BORDER + game.H)) {
				cy = -this.pixelsH - CAMERA_BORDER + game.H;
			}

			this.layer.x = cx;
			this.layer.y = cy;
		}
	}
}

export default Gameplay;