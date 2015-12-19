var detailsModel = "../src/markups/modules/details/details.json";

bouncyApp.controller('datailsCtrl', function ($scope, $timeout, jsonLoader) {
	jsonLoader(detailsModel).then(function (data) {
		$scope.detailsData = data;
		$scope.model = data;
		$scope.contentData = $scope.detailsData.items[0];
	});

	$scope.switchContent = function (index) {
		//- get data for selected tab
		$scope.contentData = $scope.detailsData.items[index];

		//- animation for data in tab.
		$scope.startAnimation = true;
		$timeout(newAnim, 200);
		function newAnim() {
			$scope.startAnimation = false;
		}
	};
});