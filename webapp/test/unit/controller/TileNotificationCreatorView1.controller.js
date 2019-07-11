/*global QUnit*/

sap.ui.define([
	"TileNotificationCreator/TileNotificationCreator/controller/TileNotificationCreatorView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TileNotificationCreatorView1 Controller");

	QUnit.test("I should test the TileNotificationCreatorView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});