var subscribeModel = "../src/markups/modules/subscribe/subscribe.json";

bouncyApp.controller("subscribeCtrl", function ($scope, jsonLoader) {
	jsonLoader(subscribeModel).then(function (data) {
		$scope.model = data;
	});
});