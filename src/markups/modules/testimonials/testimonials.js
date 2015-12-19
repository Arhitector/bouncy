var testimonialsModel = "../src/markups/modules/testimonials/testimonials.json";

bouncyApp.controller("testimonialsCtrl", function ($scope, jsonLoader, $timeout) {
	jsonLoader(testimonialsModel).then(function (data) {
		$scope.testimonialsData = data;
		$scope.model = data;
	});
	$timeout(function () {
		//DOM has finished rendering
		var mySwiper = new Swiper ('.js-swiper-testimonial', {
			pagination: '.js-testimonial-pagination',
			paginationClickable: true
		});
	});
});