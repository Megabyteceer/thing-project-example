import Scene from "/thing-engine/js/components/scene.js";
import Lib from "/thing-engine/js/lib.js";
import TilemapProcessor from "../utils/tilemap-processor.js";
import game from "/thing-engine/js/game.js";

const CAMERA_BORDER = -120;

export default class Gameplay extends Scene {
	init() {
		super.init();

		const imageToType = Lib.tileMapProcessor.imageToType;
		let tilemap = this.all['tilemap'];

		this.map = tilemap.map.map(imageToType);
		this.W = tilemap.columns;
		this.H = tilemap.rows;
		this.pixelsH = this.H * 100;
		this.pixelsW = this.W * 100;
		this.layer = this.all['layer'];
	}

	getTile(x, y) {
		return this.map[Math.ceil(x/100) + Math.ceil(y/100) * this.W];
	}

	onShow() {
	}
	
	update() {

		if(this.cameraLookTo) {
			let cx = game.W / 2 - this.cameraLookTo.x;
			let cy = game.H / 2 - this.cameraLookTo.y;
			if(cx > CAMERA_BORDER) {
				cx = CAMERA_BORDER;
			} else if(cx < -this.pixelsW + CAMERA_BORDER) {
				cx = -this.pixelsW + CAMERA_BORDER;
			}

			if(cy > CAMERA_BORDER) {
				cy = CAMERA_BORDER;
			} else if(cy < -this.pixelsH + CAMERA_BORDER) {
				cy = -this.pixelsH + CAMERA_BORDER;
			}

			this.layer.x = cx;
			this.layer.y = cy;

			this.layer.xSpeed += (cx - this.layer.x) * 0.02;
			this.layer.ySpeed += (cy - this.layer.y) * 0.02;
			this.layer.xSpeed *= 0.85;
			this.layer.ySpeed *= 0.85;

		
		}
		super.update();
	}
}