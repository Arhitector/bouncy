var latestNewsModel = "../src/markups/modules/latest-news/latest-news.json";

bouncyApp.controller("latestNewsCtrl", function ($scope, jsonLoader) {
	jsonLoader(latestNewsModel).then(function (data) {
		$scope.latestNewsData = data;
		$scope.model = data;
	});
});