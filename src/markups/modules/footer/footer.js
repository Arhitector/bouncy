var footerModel = "../src/markups/modules/footer/footer.json";

bouncyApp.controller("footerCtrl", function ($scope, jsonLoader) {
	jsonLoader(footerModel).then(function (data) {
		$scope.footerData = data;
	});
});