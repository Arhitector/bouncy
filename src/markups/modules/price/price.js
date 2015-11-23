var priceModel = "../src/markups/modules/price/price.json";

bouncyApp.controller("priceCtrl", function ($scope, jsonLoader) {
	jsonLoader(priceModel).then(function (data) {
		$scope.priceData = data;
		$scope.model = data;
	});
});