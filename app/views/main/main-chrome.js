opus.Gizmo({
	name: "main",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2,
		bgColor: "white"
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
							h: 270
						},
						{
							name: "picture3",
							src: "images/house.png",
							ontap: "picture3Tap",
							type: "Palm.Picture",
							l: "45",
							w: "64",
							t: 690,
							h: "64",
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
					l: 165,
					w: 682,
					t: 0,
					h: 766,
					styles: {
						cursor: "move",
						overflow: "hidden"
					},
					controls: [
						{
							name: "picture2",
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
											itemHtml: "<div class=\"img-desc\" style=\"background:url(#{background}) center center no-repeat; background-size: 100%;\">\n    <img id=\"image\" src=\"#{image}\" alt=\"\" x-mojo-touch-feedback=\"delayed\"/><cite>#{title}</cite>\n</div>",
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
									name: "label4",
									label: "",
									type: "Palm.Mojo.Label",
									l: 208,
									w: "2",
									t: 0
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
											itemHtml: "<div class=\"img-desc\" style=\"background:url(#{background}) center center no-repeat; background-size: 100%;\">\n    <img id=\"image\" src=\"#{image}\" alt=\"\" x-mojo-touch-feedback=\"delayed\"/><cite>#{title}</cite>\n</div>",
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
									name: "label8",
									label: "",
									type: "Palm.Mojo.Label",
									l: 398,
									w: "2",
									t: 0
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
											itemHtml: "<div class=\"img-desc\" style=\"background:url(#{background}) center center no-repeat; background-size: 100%;\">\n    <img id=\"image\" src=\"#{image}\" alt=\"\" x-mojo-touch-feedback=\"delayed\"/><cite>#{title}</cite>\n</div>",
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
					l: 0,
					t: 0,
					h: "100%",
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
							name: "label2",
							label: "",
							type: "Palm.Mojo.Label",
							l: 0,
							t: 0,
							h: 9
						},
						{
							name: "scroller7",
							scrollPosition: {
								left: 0,
								top: 0
							},
							type: "Palm.Mojo.Scroller",
							l: 0,
							t: 9,
							h: 677,
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
									name: "list1",
									dropTarget: true,
									items: [],
									useSampleData: false,
									title: undefined,
									itemHtml: "<div class=\"img-desc\" style=\"background:url(#{background}) center center no-repeat; background-size: 100%;\">\n    <img id=\"image\" src=\"#{image}\" alt=\"\" x-mojo-touch-feedback=\"delayed\"/><cite>#{author}</cite>\n</div>\n",
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
								}
							]
						},
						{
							name: "panel1",
							layoutKind: "hbox",
							dropTarget: true,
							type: "Palm.Mojo.Panel",
							l: 0,
							t: 0,
							h: "100%",
							controls: [
								{
									name: "picture4",
									src: "images/br_back.png",
									autoSize: false,
									ontap: "picture4Tap",
									type: "Palm.Picture",
									l: 0,
									w: "50%",
									t: 0,
									h: 64,
									styles: {
										borderColor: ""
									}
								},
								{
									name: "picture5",
									src: "images/br_next.png",
									autoSize: false,
									ontap: "picture5Tap",
									type: "Palm.Picture",
									l: 0,
									w: "50%",
									t: 0,
									h: 64,
									styles: {
										borderColor: ""
									}
								}
							]
						}
					]
				}
			]
		}
	]
});