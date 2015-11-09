var futureModel = '../src/markups/modules/future/future.json';

bouncyApp.controller('futureCtrl', function ($scope, jsonLoader) {
	jsonLoader(futureModel).then(function (data) {
		$scope.futureData = data;
		$scope.model = data;
	});
});