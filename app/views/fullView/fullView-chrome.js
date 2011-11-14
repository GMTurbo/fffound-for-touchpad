opus.Gizmo({
	name: "fullView",
	layoutKind: "absolute",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	t: "0",
	h: "100%",
	styles: {
		zIndex: 2,
		bgImage: "",
		textAlign: "center",
		bgColor: ""
	},
	chrome: [
		{
			name: "imageView1",
			onImageViewChanged: "imageView1ImageViewChanged",
			wrap: false,
			type: "Palm.Mojo.ImageView",
			l: 0,
			t: 0,
			styles: {
				bgColor: ""
			}
		}
	]
});