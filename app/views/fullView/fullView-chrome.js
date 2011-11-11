opus.Gizmo({
	name: "fullView",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2,
		bgImage: "",
		textAlign: "center"
	},
	chrome: [
		{
			name: "panel6",
			layoutKind: "hbox",
			dropTarget: true,
			type: "Palm.Mojo.Panel",
			l: 0,
			t: 0,
			h: "100%",
			controls: [
				{
					name: "imageView1",
					type: "Palm.Mojo.ImageView",
					l: 511,
					t: 0,
					styles: {
						bgColor: "black"
					}
				}
			]
		}
	]
});