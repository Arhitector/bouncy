var impresedModel = "../src/markups/modules/impresed/impresed.json";

bouncyApp.controller("impresedCtrl", function ($scope, jsonLoader) {
	jsonLoader(impresedModel).then(function (data) {
		$scope.impresedData = data;

	});
});