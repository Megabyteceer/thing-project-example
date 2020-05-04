// this class automatically generated with Thing-Editor's component's Wizard,
// and contain basic game-object's methods.
// For details: https://github.com/Megabyteceer/thing-editor/wiki/Custom-Components#custom-component-methods

import Text from "/thing-editor/js/engine/components/text.js";

export default class RandomText extends Text {
	
	init() {
		super.init();
		// Add initialization code here

	}
	
	update() {
		this.text = Math.random();
		this.style.fontSize = 12 + Math.round(Math.random() * 19);
		super.update();
	}

	onRemove() {
		// Add onRemove code here

		super.onRemove();
	}
}

/// #if EDITOR

//RandomText.__EDITOR_group = "Custom/MyComponentsSubGroup"; //group in Classes List Window for more comfort

__EDITOR_editableProps(RandomText, [ //list of editable properties
	{
		type: 'splitter',
		title: 'RandomText',
		name: 'RandomText-props'
	}/*,
	{
		name:'myProperty',
		type:Number,
		default: 1,
		step: 0.01
	}*/
]);
/// #endif