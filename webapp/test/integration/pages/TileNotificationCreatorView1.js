sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";
	var sViewName = "TileNotificationCreatorView1";
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {},

			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The TileNotificationCreatorView1 view is displayed");
						},
						errorMessage: "Did not find the TileNotificationCreatorView1 view"
					});
				}
			}
		}
	});

});