var testimonialsModel = "../src/markups/modules/testimonials/testimonials.json";

bouncyApp.controller("testimonialsCtrl", function ($scope, jsonLoader) {
	jsonLoader(testimonialsModel).then(function (data) {
		$scope.testimonialsData = data;
		$scope.model = data;
	});
});