function FullViewAssistant(args) {
		this.url = args.url;
}

FullViewAssistant.prototype = {
	setup: function() {
		//this.controller.setWindowOrientation("full");
		Ares.setupSceneAssistant(this);
		this.controller.listen(this.controller.get('backButton'), Mojo.Event.tap, this.back.bind(this));
		
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
		this.controller.stopListening(this.controller.get('backButton'), Mojo.Event.tap, this.back.bind(this));
	},
	activate: function(){
		this.controller.get("imageView1").mojo.centerUrlProvided(this.url);
	},
	back: function(){
		this.controller.stageController.popScene({ret: true});
	}
};