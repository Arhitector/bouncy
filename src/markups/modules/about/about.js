var aboutModel = '../src/markups/modules/about/about.json';

bouncyApp.controller("aboutCtrl", function ($scope, jsonLoader) {
	jsonLoader(aboutModel).then(function (data) {
		$scope.aboutData = data;
	});
});