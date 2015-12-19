var servicesModel = "../src/markups/modules/services/services.json";

bouncyApp.controller('servicesCtrl', function ($scope, $timeout, jsonLoader) {
	jsonLoader(servicesModel).then(function (data) {
		$scope.servicesData = data;
		$scope.model = data;
		$scope.servicesItemData = $scope.servicesData.items[0];
	});
	$scope.clickServices = function (index) {
		//- tabs change
		$scope.servicesItemData = $scope.servicesData.items[index];

		//- svg circle animation
		angular.forEach(angular.element(".b-counter"), function( value, key, $scope){
			var currentElement = angular.element(value);
			var svgPathTextValue = currentElement.find('.b-percent').html();
			var svgRadiusCircle = 60;
			lengthRadius = 2*Math.PI*svgRadiusCircle;
			lengthPath = -lengthRadius + svgPathTextValue /100 * lengthRadius;

			currentElement.find('.b-svg__sector').css("stroke-dasharray",lengthRadius);
			currentElement.find('.b-svg__sector').css("stroke-dashoffset",lengthPath);
		});

	};
});