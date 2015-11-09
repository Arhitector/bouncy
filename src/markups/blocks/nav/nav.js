var navData = "../src/markups/blocks/nav/nav.json";

bouncyApp.controller("navCtrl", function($scope, jsonLoader){
	jsonLoader(navData).then(function (data) {
		$scope.navJsonData = data;
	});
	$scope.isActive = false;
	$scope.openMenu = function () {
		$scope.isActive = !$scope.isActive;
	}
});
