var latestNewsModel = "../src/markups/modules/latest-news/latest-news.json";

bouncyApp.controller("latestNewsCtrl", function ($scope, jsonLoader, $timeout) {
	jsonLoader(latestNewsModel).then(function (data) {
		$scope.latestNewsData = data;
		$scope.model = data;
	});
	$timeout(function () {
		var mySwiper = new Swiper ('.js-swiper-latest-news', {
			pagination: '.js-latest-news-pagination',
			paginationClickable: true
		});
	});
});