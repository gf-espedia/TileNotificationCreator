sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("TileNotificationCreator.TileNotificationCreator.controller.TileNotificationCreatorView1", {
		onInit: function () {
			history.back();
			window.open("https://notificationcreator-m9a44f3468.dispatcher.hana.ondemand.com", '_blank');
		}
	});
});