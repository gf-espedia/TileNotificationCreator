/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"TileNotificationCreator/TileNotificationCreator/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});