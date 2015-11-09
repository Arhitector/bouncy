var topModel = '../src/markups/modules/top/top.json';

bouncyApp.controller("topCtrl", function ($scope, jsonLoader) {
	jsonLoader(topModel).then(function (data) {
		$scope.topJsonData = data;
	});
});



