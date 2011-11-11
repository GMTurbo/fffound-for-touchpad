var offset = 0;
var userOffset = 0;
var showing = false;

function MainAssistant(argFromPusher) {
	this.tecznoArrray = [];
	this.firstLoad = true;
	this.searching = false;
	this.foundArray = [];
	this.author = null;
	this.timer = null;
	this.fillList = function(items) {
		var foundArray = new Array(items.length);
		for (var i = 0; i < items.length; i++) {
			foundArray[i] = {
				image: items[i].thumbnail.url,
				author: items[i].author,
				link: items[i].link,
				content: items[i].content,
				title: items[i].title,
				source: items[i].source
			};
		}
		listModel = {
			items: foundArray
		};
		return {
			getList: function() {
				return listModel;
			}
		};
	};
}

function spinner(state) {
	if (state) {
		$('overlayImg').addClassName("loading");
		$('overlayMain').style.top = "225px"; //105 for circular loader
	} else {
		$('overlayImg').removeClassName("loading");
		$('overlayMain').style.top = "900px";
	}
}

function toggleBar(state) {
	showing = state;
	if (state) {
		$('overlayToolBar').removeClassName("hide");
		$('overlayToolBar').style.zindex = "1000";
		$('overlayToolBar').style.opacity = "1.0"; //105 for circular loader
		$('overlayExpand').removeClassName("hide");
		$('overlayExpand').style.zindex = "1000";
		$('overlayExpand').style.opacity = "1.0"; //105 for circular loader
	} else {
		$('overlayToolBar').addClassName("hide");
		$('overlayToolBar').style.opacity = "0";
		$('overlayToolBar').style.zindex = "0";
		$('overlayExpand').addClassName("hide");
		$('overlayExpand').style.opacity = "0";
		$('overlayExpand').style.zindex = "0";
	}
}

function showBanner(message) {
	Mojo.Controller.getAppController().showBanner(message, {
		source: 'notification'
	});
}

//#{hide}
MainAssistant.prototype = {
	setup: function() {
		//this.controller.setWindowOrientation("up");
		Ares.setupSceneAssistant(this);
		attributes = {
			hintText: $L('search users'),
			modelProperty: 'original',
			multiline: false,
			label: $L('To:'),
			focus: true,
			textFieldMode: 'sentence-case',
			limitResize: false,
			enterSubmits: true,
			holdToEnable: true
		};
		model = {
			'original ': $L(''),
			disabled: false
		};
		this.controller.setupWidget('SearchtextField', attributes, model);
		this.controller.listen(this.controller.get("one"), Mojo.Event.tap, this.save.bind(this));
		this.controller.listen(this.controller.get("three"), Mojo.Event.tap, this.email.bind(this));
		this.controller.listen(this.controller.get("two"), Mojo.Event.tap, this.open.bind(this));
		this.controller.listen(this.controller.get("expand"), Mojo.Event.tap, this.expand.bind(this));
		this.controller.listen(this.controller.get("search"), Mojo.Event.tap, this.searchTap.bind(this));
		this.controller.document.addEventListener("keyup", this.keyupHandler.bind(this), true);
		//this.controller.listen(this.controller.get("picture1"), "onload", this.imageView1ImageViewChanged.bind(this));
	},
	activate: function(ret) {
		if(typeof ret === "undefined"){
			spinner(true);
			$('listTypeID').textContent = "everyone";
			this.loadImages();
		}
	},
	loadImages: function() {
		var query = "Select * from rss where url='http://ffffound.com/feed?offset=0' LIMIT 20";
		var url = "http://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(query) + "&format=json";

		var request = new Ajax.Request(url, {
			method: 'get',
			asynchronous: true,
			evalJSON: "false",
			onSuccess: this.parseResult.bind(this),

			on0: function(ajaxResponse) {
				// connection failed, typically because the server is overloaded or has gone down since the page loaded
				Mojo.Log.error("Connection failed");
			},
			onFailure: function(response) {
				// Request failed (404, that sort of thing)
				Mojo.Log.error("Request failed");
			}
		});
	},
	loadPage: function() {
		var query = "Select * from rss where url='http://ffffound.com/feed?offset=" + offset + "' LIMIT 20";
		var url = "http://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(query) + "&format=json";

		var request = new Ajax.Request(url, {
			method: 'get',
			asynchronous: true,
			evalJSON: "false",
			onSuccess: this.parseResult.bind(this),

			on0: function(ajaxResponse) {
				// connection failed, typically because the server is overloaded or has gone down since the page loaded
				Mojo.Log.error("Connection failed");
			},
			onFailure: function(response) {
				// Request failed (404, that sort of thing)
				Mojo.Log.error("Request failed");
			}
		});
	},
	loadUserPage: function() {
			var query = "Select * from rss where url='http://ffffound.com/home/" + this.author + "/found/feed?offset=" + userOffset + "' LIMIT 20";
			var url = "http://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(query) + "&format=json";
			var request = new Ajax.Request(url, {
				method: 'get',
				asynchronous: true,
				evalJSON: "false",
				onSuccess: this.parseResult.bind(this),

				on0: function(ajaxResponse) {
					// connection failed, typically because the server is overloaded or has gone down since the page loaded
					Mojo.Log.error("Connection failed");
				},
				onFailure: function(response) {
					// Request failed (404, that sort of thing)
					Mojo.Log.error("Request failed");
				}
			});
	},
	parseResult: function(transport) {
		if (transport.status === 200) {
			if (transport.responseJSON.query.results) {
				//this.controller.stopListening(this.controller.get("item"), Mojo.Event.tap, this.list1Listtap.bind(this));
				this.foundArray = this.fillList(transport.responseJSON.query.results.item).getList();
				//this.$.list1.items = this.foundArray.items;
				this.controller.setWidgetModel('list1', this.fillList(transport.responseJSON.query.results.item).getList());
				//this.controller.get('list1').mojo.noticeUpdatedItems(0, this.foundArray.items);
				this.controller.get("scroller4").mojo.scrollTo(0, 0, true, true);
				//this.controller.listen(this.controller.get("item"), Mojo.Event.tap, this.list1Listtap.bind(this));
				if (this.firstLoad) {
					this.firstLoad = false;
					this.currentItem = this.foundArray.items[0];
					this.$.picture2.setSrc(this.currentItem.content.url);
					$('userNameID').textContent = this.currentItem.author;
					//this.controller.get("imageView1").mojo.centerUrlProvided(event.item.content.url);
					this.controller.get("scroller1").mojo.scrollTo(0, 0, true, true);
					this.controller.get("scroller5").mojo.scrollTo(0, 0, true, true);
					this.controller.get("scroller6").mojo.scrollTo(0, 0, true, true);
					this.controller.get("scroller7").mojo.scrollTo(0, 0, true, true);
					this.loadUserImages(this.currentItem);
				}
			} else {
				showBanner("no results ffffound");
			}
			spinner(false);
		}
	},
	parseResultUser: function(transport) {
		if (transport.status === 200) {
			this.foundArrayUser = this.fillList(transport.responseJSON.query.results.item).getList();
			var tmp = this.foundArrayUser;
			if (tmp.items.length === 24) {
				this.controller.setWidgetModel('list2', {
					items: tmp.items.splice(0, 6)
				});
				this.controller.setWidgetModel('list3', {
					items: tmp.items.splice(0, 6)
				});
				this.controller.setWidgetModel('list4', {
					items: tmp.items.splice(0, 6)
				});
				this.controller.setWidgetModel('list5', {
					items: tmp.items.splice(0, 6)
				});
			} else {
				var forEach = Math.floor(tmp.items.length / 4.0);
				var remainder = tmp.items.length % 4;
			}
			spinner(false);
		}
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
		this.controller.stopListening(this.controller.get("saveBut"), Mojo.Event.listTap, this.save.bind(this));
		this.controller.stopListening(this.controller.get("emailBut"), Mojo.Event.propertyChange, this.email.bindAsEventListener(this));
		this.controller.stopListening(this.controller.get("openBut"), Mojo.Event.scrollStarting, this.open.bindAsEventListener(this));
		this.controller.stopListening(this.controller.get("expand"), Mojo.Event.tap, this.expand.bind(this));
		this.controller.stopListening(this.controller.get("search"), Mojo.Event.tap, this.searchTap.bind(this));
		this.controller.document.removeEventListener("keyup", this.keyupHandler.bind(this), true);
	},
	list1Listtap: function(inSender, event) {
		spinner(true);
		toggleBar(false);
		this.currentItem = event.item;
		this.$.picture2.setSrc(event.item.content.url);
		$('userNameID').textContent = this.currentItem.author;
		//this.controller.get("imageView1").mojo.centerUrlProvided(event.item.content.url);
		this.controller.get("scroller1").mojo.scrollTo(0, 0, true, true);
		this.controller.get("scroller5").mojo.scrollTo(0, 0, true, true);
		this.controller.get("scroller6").mojo.scrollTo(0, 0, true, true);
		this.controller.get("scroller7").mojo.scrollTo(0, 0, true, true);
		this.loadUserImages(event.item);
		//this.parseResultUser();
	},
	loadUserImages: function(item) {
		//http://ffffound.com/home/thatdayinthepark/found/feed
		var query = "Select * from rss where url='http://ffffound.com/home/" + item.author + "/found/feed' LIMIT 24";
		var url = "http://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(query) + "&format=json";
		var request = new Ajax.Request(url, {
			method: 'get',
			asynchronous: true,
			evalJSON: "false",
			onSuccess: this.parseResultUser.bind(this),

			on0: function(ajaxResponse) {
				// connection failed, typically because the server is overloaded or has gone down since the page loaded
				Mojo.Log.error("Connection failed");
			},
			onFailure: function(response) {
				// Request failed (404, that sort of thing)
				Mojo.Log.error("Request failed");
			}
		});
	},
	html1Tap: function(inSender, event) {
		if(this.searching){
			userOffset -= 20;
			this.loadUserPage();
		}else{
			offset -= 20;
			this.loadPage();
		}
		spinner(true);
	},
	html2Tap: function(inSender, event) {
		if(this.searching){
			userOffset += 20;
			this.loadUserPage();
		}else{
			offset += 20;
			this.loadPage();
		}
		spinner(true);
	},
	imageView1Tap: function(inSender, event) {
		toggleBar($('overlayToolBar').className.indexOf("hide") > 0);
		this.controller.window.setTimeout(function() {
			toggleBar(false);
		},
		4000);
	},
	save: function(event) {
		if (this.$.picture2.src.length > 0 && $('overlayExpand').className.indexOf("hide") === -1) {
			this.download(this.$.picture2.src);
		}
	},
	open: function(event) {
		if (this.$.picture2.src.length > 0 && $('overlayExpand').className.indexOf("hide") === -1) {
			this.open1();
		}
	},
	email: function(event) {
		if (this.$.picture2.src.length > 0 && $('overlayExpand').className.indexOf("hide") === -1) {
			this.email1(this.$.picture2.src);
		}
	},
	download: function(image) {
		downloadImage = function(url, onSuccess, onFailure) {
			this.controller.serviceRequest('palm://com.palm.downloadmanager/', {
				method: 'download',
				parameters: {
					target: url,
					targetDir: "/media/internal/ffffound",
					targetFilename: name,
					keepFilenameOnRedirect: false,
					subscribe: false
				},
				onComplete: onSuccess,
				onFailure: onFailure
			});
		}.bind(this);
		var onSuccess = function(event) {
			showBanner("Image saved to device");
		};
		onFailure = function() {
			showBanner("Download Failed");
		};
		downloadImage(image, onSuccess.bind(this), onFailure.bind(this));
	},
	email1: function(image) {
		this.controller.serviceRequest("palm://com.palm.applicationManager", {
			method: 'open',
			parameters: {
				id: "com.palm.app.email",
				params: {
					summary: "Checkout this image",
					text: "<img src=\"" + image + "\"><br><br><a href=\"" + this.currentItem.link + "\">" + "check out what I ffffound</a>"
				}
			}
		});
	},
	open1: function() {
		this.controller.serviceRequest('palm://com.palm.applicationManager', {
			method: 'open',
			parameters: {
				id: 'com.palm.app.browser',
				params: {
					target: this.currentItem.link
				}
			}
		});
	},
	list2Listtap: function(inSender, event) {
		spinner(true);
		toggleBar(false);
		this.currentItem = event.item;
		this.$.picture2.setSrc(event.item.content.url);

		this.controller.window.setTimeout(function() {
			spinner(false);
		},
		1500);
	},
	imageView1ImageViewChanged: function(inSender, event) {
		spinner(false);
	},
	picture1Tap: function(inSender, event) {
		if (this.$.picture1.src.indexOf("dancing") > 0) {
			this.$.picture1.setSrc("http://static.ffffound.com/assets/found_01.r3000.gif");
		} else {
			this.$.picture1.setSrc("images/dancing.gif");
		}
	},
	picture2Tap: function(inSender, event) {
		toggleBar($('overlayToolBar').className.indexOf("hide") > 0);
		if(this.timer){
			this.controller.window.clearTimeout(this.timer);
		}
		this.timer = this.controller.window.setTimeout(function() {
				toggleBar(false);
		},
		4000);
	},
	expand: function() {
		if ($('overlayExpand').className.indexOf("hide") === -1) {
			toggleBar(false);
			this.controller.stageController.pushScene('fullView', {
				url: this.currentItem.content.url
			});
		}
	},
	searchTap: function(event) {
		if ($('overlayExpand').className.indexOf("hide") === -1) {
			this.beginSearch(this.currentItem.author);
		}
	},
	keyupHandler: function(event) {
		if (this.controller.sceneId === "main") {
			if (Mojo.Char.isEnterKey(event.keyCode)) {
				this.beginSearch(this.controller.get('SearchtextField').mojo.getValue());
			}
		}
	},
	beginSearch: function(author) {
		if (author.length > 0) {
			$('listTypeID').textContent = author;
			showBanner("Searching " + author + "'s ffffound");
			this.author = author.toLowerCase();
			this.searching = true;
			userOffset = 0;
			var query = "Select * from rss where url='http://ffffound.com/home/" + this.author + "/found/feed' LIMIT 20";
			var url = "http://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(query) + "&format=json";
			var request = new Ajax.Request(url, {
				method: 'get',
				asynchronous: true,
				evalJSON: "false",
				onSuccess: this.parseResult.bind(this),

				on0: function(ajaxResponse) {
					// connection failed, typically because the server is overloaded or has gone down since the page loaded
					Mojo.Log.error("Connection failed");
				},
				onFailure: function(response) {
					// Request failed (404, that sort of thing)
					Mojo.Log.error("Request failed");
				}
			});
		}
	},
	picture3Tap: function(inSender, event) {
		showBanner("showing everyone's ffffound");
		$('listTypeID').textContent = "everyone";
		this.searching = false;
		this.loadPage();
	}
};