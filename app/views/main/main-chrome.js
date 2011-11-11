opus.Gizmo({
	name: "main",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2
	},
	chrome: [
		{
			name: "panel2",
			layoutKind: "hbox",
			dropTarget: true,
			type: "Palm.Mojo.Panel",
			l: 0,
			t: 768,
			h: "100%",
			styles: {
				bgColor: "white"
			},
			controls: [
				{
					name: "scroller2",
					scrollPosition: {
						left: 0,
						top: 0
					},
					type: "Palm.Mojo.Scroller",
					l: 0,
					w: 160,
					t: 0,
					h: "100%",
					styles: {
						cursor: "move",
						overflow: "hidden"
					},
					controls: [
						{
							name: "picture1",
							src: "images/fffoundSmall.jpeg",
							ontap: "picture1Tap",
							type: "Palm.Picture",
							l: 0,
							w: 149,
							t: 0,
							h: 128,
							styles: {
								borderColor: "",
								bgImage: ""
							}
						},
						{
							name: "label5",
							label: "",
							type: "Palm.Mojo.Label",
							l: 0,
							t: 128,
							h: 214
						},
						{
							name: "html4",
							content: "<div class='palm-row'style=\"heigth:60px\">\n    <div class=\"palm-row-wrapper\" style=\"heigth:60px\">\n        <div class=\"textfield-group\" x-mojo-focus-highlight=\"true\" style=\"heigth:60px\">\n            <div class=\"title\">        \n                <div class=\"label1\"></div>\n                <div id=\"SearchtextField\" x-mojo-element=\"TextField\" style=\"heigth:60px\"></div>\n            </div> \n        </div>\n    </div>\n</div>\n",
							type: "Palm.Mojo.Html",
							l: 0,
							t: 128,
							styles: {
								bgColor: "",
								textColor: ""
							}
						},
						{
							name: "label7",
							label: "",
							type: "Palm.Mojo.Label",
							l: 0,
							t: 402,
							h: 288
						},
						{
							name: "picture3",
							src: "images/toolba/home32.png",
							ontap: "picture3Tap",
							type: "Palm.Picture",
							l: "56",
							w: 45,
							t: 690,
							h: 47,
							styles: {
								borderColor: ""
							}
						}
					]
				},
				{
					name: "label6",
					label: "",
					type: "Palm.Mojo.Label",
					l: 160,
					w: "5",
					t: 0,
					h: "100%",
					styles: {
						bgColor: "black",
						opacity: "0.75"
					}
				},
				{
					name: "scroller3",
					scrollPosition: {
						left: 0,
						top: 0
					},
					type: "Palm.Mojo.Scroller",
					l: 160,
					w: 705,
					t: 0,
					h: 766,
					styles: {
						cursor: "move",
						overflow: "hidden"
					},
					controls: [
						{
							name: "picture2",
							autoSize: false,
							ontap: "picture2Tap",
							type: "Palm.Picture",
							l: "30",
							w: "617",
							t: "505",
							h: "505",
							styles: {
								borderColor: ""
							}
						},
						{
							name: "label1",
							label: "",
							type: "Palm.Mojo.Label",
							l: 0,
							t: 505,
							h: "5",
							styles: {
								bgColor: "black",
								opacity: "0.75"
							}
						},
						{
							name: "panel4",
							layoutKind: "hbox",
							dropTarget: true,
							type: "Palm.Mojo.Panel",
							l: 0,
							t: 518,
							b: 12,
							h: 236,
							styles: {
								bgColor: "white",
								borderColor: ""
							},
							controls: [
								{
									name: "scroller1",
									scrollPosition: {
										left: 0,
										top: 0
									},
									type: "Palm.Mojo.Scroller",
									l: 0,
									t: 0,
									h: "100%",
									styles: {
										cursor: "move",
										overflow: "hidden"
									},
									controls: [
										{
											name: "list2",
											dropTarget: true,
											items: [
												{
													item: 0,
													label: "Zero",
													value: "0"
												},
												{
													item: 1,
													label: "One",
													value: "1"
												},
												{
													item: 2,
													label: "Two",
													value: "2"
												},
												{
													item: 3,
													label: "Three",
													value: "3"
												}
											],
											useSampleData: false,
											title: undefined,
											itemHtml: "<div id=\"item\" x-mojo-tap-feedback=\"delayed\">\n   <div id=\"column1\" style=\"background-image:url(#{image})\">\n      <h2><span id=\"mix1\">#{author}</span></h2>\n      <title=#{title)>\n      <content=#{content}>\n      <link=#{link}>\n      <source=#{source}>\n   </div>\n</div>\n",
											onlisttap: "list2Listtap",
											renderLimit: "10",
											lookAhead: "5",
											swipeToDelete: false,
											reorderable: false,
											type: "Palm.Mojo.List",
											l: 0,
											t: 0,
											h: 100
										}
									]
								},
								{
									name: "scroller5",
									scrollPosition: {
										left: 0,
										top: 0
									},
									type: "Palm.Mojo.Scroller",
									l: 0,
									t: 0,
									h: "100%",
									styles: {
										cursor: "move",
										overflow: "hidden"
									},
									controls: [
										{
											name: "list3",
											dropTarget: true,
											items: [
												{
													item: 0,
													label: "Zero",
													value: "0"
												},
												{
													item: 1,
													label: "One",
													value: "1"
												},
												{
													item: 2,
													label: "Two",
													value: "2"
												},
												{
													item: 3,
													label: "Three",
													value: "3"
												}
											],
											useSampleData: false,
											title: undefined,
											itemHtml: "<div id=\"item\" x-mojo-tap-feedback=\"delayed\">\n   <div id=\"column1\" style=\"background-image:url(#{image})\">\n      <h2><span id=\"mix1\">#{author}</span></h2>\n      <title=#{title)>\n      <content=#{content}>\n      <link=#{link}>\n      <source=#{source}>\n   </div>\n</div>\n",
											onlisttap: "list2Listtap",
											renderLimit: "10",
											lookAhead: "5",
											type: "Palm.Mojo.List",
											l: 0,
											t: 0,
											h: 100
										}
									]
								},
								{
									name: "scroller6",
									scrollPosition: {
										left: 0,
										top: 0
									},
									type: "Palm.Mojo.Scroller",
									l: 0,
									t: 0,
									h: "100%",
									styles: {
										cursor: "move",
										overflow: "hidden"
									},
									controls: [
										{
											name: "list4",
											dropTarget: true,
											items: [
												{
													item: 0,
													label: "Zero",
													value: "0"
												},
												{
													item: 1,
													label: "One",
													value: "1"
												},
												{
													item: 2,
													label: "Two",
													value: "2"
												},
												{
													item: 3,
													label: "Three",
													value: "3"
												}
											],
											useSampleData: false,
											title: undefined,
											itemHtml: "<div id=\"item\" x-mojo-tap-feedback=\"delayed\">\n   <div id=\"column1\" style=\"background-image:url(#{image})\">\n      <h2><span id=\"mix1\">#{author}</span></h2>\n      <title=#{title)>\n      <content=#{content}>\n      <link=#{link}>\n      <source=#{source}>\n   </div>\n</div>\n",
											onlisttap: "list2Listtap",
											renderLimit: "10",
											lookAhead: "5",
											type: "Palm.Mojo.List",
											l: 0,
											t: 0,
											h: 100
										}
									]
								},
								{
									name: "scroller7",
									scrollPosition: {
										left: 0,
										top: 0
									},
									type: "Palm.Mojo.Scroller",
									l: 0,
									t: 0,
									h: "100%",
									styles: {
										cursor: "move",
										overflow: "hidden"
									},
									controls: [
										{
											name: "list5",
											dropTarget: true,
											items: [
												{
													item: 0,
													label: "Zero",
													value: "0"
												},
												{
													item: 1,
													label: "One",
													value: "1"
												},
												{
													item: 2,
													label: "Two",
													value: "2"
												},
												{
													item: 3,
													label: "Three",
													value: "3"
												}
											],
											useSampleData: false,
											title: undefined,
											itemHtml: "<div id=\"item\" x-mojo-tap-feedback=\"delayed\">\n   <div id=\"column1\" style=\"background-image:url(#{image})\">\n      <h2><span id=\"mix1\">#{author}</span></h2>\n      <title=#{title)>\n      <content=#{content}>\n      <link=#{link}>\n      <source=#{source}>\n   </div>\n</div>\n",
											onlisttap: "list2Listtap",
											renderLimit: "10",
											lookAhead: "5",
											type: "Palm.Mojo.List",
											l: 0,
											t: 0,
											h: 100
										}
									]
								}
							]
						}
					]
				},
				{
					name: "label3",
					label: "",
					type: "Palm.Mojo.Label",
					l: 868,
					w: "5",
					t: 0,
					h: "100%",
					styles: {
						bgColor: "black",
						opacity: "0.75"
					}
				},
				{
					name: "scroller4",
					scrollPosition: {
						left: 0,
						top: 0
					},
					type: "Palm.Mojo.Scroller",
					l: 862,
					t: 40,
					h: 729,
					styles: {
						cursor: "move",
						overflow: "hidden",
						bgColor: "white",
						borderStyle: "",
						borderColor: "",
						textAlign: "center"
					},
					controls: [
						{
							name: "html1",
							content: "<div id=\"con\" x-mojo-tap-feedback=\"delayed\">\n  <span class=\"moreBut left\" id=\"back\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n</div>",
							ontap: "html1Tap",
							type: "Palm.Mojo.Html",
							l: 0,
							t: "0",
							h: 38,
							styles: {
								textAlign: "left"
							}
						},
						{
							name: "list1",
							dropTarget: true,
							items: [],
							useSampleData: false,
							title: undefined,
							itemHtml: "<div id=\"item\" x-mojo-tap-feedback=\"delayed\">\n   <div id=\"column1\" style=\"background-image:url(#{image})\">\n      <h2><span id=\"mix1\">#{author}</span></h2>\n      <title=#{title)>\n      <content=#{content}>\n      <link=#{link}>\n      <source=#{source}>\n   </div>\n</div>\n",
							onlisttap: "list1Listtap",
							renderLimit: "40",
							lookAhead: "20",
							swipeToDelete: false,
							reorderable: false,
							type: "Palm.Mojo.List",
							l: 0,
							t: 0,
							h: 100,
							styles: {
								bgColor: "white",
								textAlign: "center"
							}
						},
						{
							name: "label2",
							label: "",
							type: "Palm.Mojo.Label",
							l: 0,
							t: 132,
							h: 35
						},
						{
							name: "html2",
							content: "<div id=\"con\" x-mojo-tap-feedback=\"delayed\">\n    <span class=\"moreBut right\" id=\"forward\"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n</div>",
							ontap: "html2Tap",
							type: "Palm.Mojo.Html",
							l: 0,
							t: 173,
							h: 18,
							styles: {
								textAlign: "right"
							}
						},
						{
							name: "label4",
							label: "",
							type: "Palm.Mojo.Label",
							l: 0,
							t: 191,
							h: 62
						}
					]
				}
			]
		}
	]
});