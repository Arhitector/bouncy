var detailsModel = "../src/markups/modules/details/details.json";

bouncyApp.controller('datailsCtrl', function ($scope, $timeout, jsonLoader) {
	jsonLoader(detailsModel).then(function (data) {
		$scope.detailsData = data;
		$scope.model = data;
		return detailsData = $scope.detailsData;
	});
	$scope.switchContent = function (keyData) {
		//- get data for selected tab
		var contentData = detailsData;
		for(item in keyData){
			contentData = contentData[keyData[item]];
		};
		$scope.contentData = contentData;

		//- animation for data in tab.
		$scope.startAnimation = true;
		$timeout(newAnim, 200);
		function newAnim() {
			$scope.startAnimation = false;
		}
	};
});