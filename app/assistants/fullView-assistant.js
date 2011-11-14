function FullViewAssistant(args) {
		this.url = args.url;
}

FullViewAssistant.prototype = {
	setup: function() {
		//this.controller.setWindowOrientation("full");
		Ares.setupSceneAssistant(this);
		this.controller.listen(this.controller.get('overlayBack'), Mojo.Event.tap, this.back.bind(this));
		this.controller.listen(this.controller.window, 'resize', this.handleResize.bind(this));
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
		this.controller.stopListening(this.controller.get('overlayBack'), Mojo.Event.tap, this.back.bind(this));
		this.controller.stopListening(this.controller.window, 'resize', this.handleResize.bind(this));
	},
	activate: function(){
		spinner(true);
		this.controller.enableFullScreenMode(true);
		this.controller.stageController.setWindowOrientation("free");
		this.controller.get("imageView1").mojo.centerUrlProvided(this.url);
	},
	deactivate: function(){
		this.controller.enableFullScreenMode(false);
		this.controller.stageController.setWindowOrientation("up");
	},
	back: function(){
		tap.play();
		this.controller.stageController.popScene({ret: true});
	},
	imageView1ImageViewChanged: function(inSender, event) {
		spinner(false);
	},
	handleResize: function(inSender, event){
	 this.controller.get('fullView').clientHeight = this.controller.window.innerHeight;
	 this.controller.get('fullView').clientWidth = this.controller.window.Width;
	 this.controller.get('imageView1').mojo.manualSize(this.controller.window.innerWidth, this.controller.window.innerHeight);
	}
};