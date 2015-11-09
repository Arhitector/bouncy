var bouncyApp = angular.module("bouncyApp", []);

bouncyApp.controller("bouncyAppCtrl", function($scope, $http){

});

bouncyApp.factory('jsonLoader', ['$http', '$q', function ($http, $q) {
	return function (jsonPath) {
		return $q(function(resolve, reject) {
			$http.get(jsonPath)
				.success(function (data) {
					resolve(data);
				})
				.error(function (err) {
					reject(err);
				});
		});
	};
}]);


bouncyApp.factory('scrollPosition', function () {
		var appHeight = $('body').height() - $(window).height();
		return {
			appHeight: function () {
				return appHeight;
			},
			topPosition : function() {
				return window.pageYOffset == 0 ? true : false;
			},
			bottomPosition : function() {

				return window.pageYOffset >= appHeight ? true : false;
			},
			currentPosition: function () {
				return window.pageYOffset;
			},
			viewportHeight: function () {
				return $(window).height();
			}
		}
	}
);
bouncyApp.directive("scroll", function ($window, scrollPosition) {
	return function(scope, element, attrs) {
		angular.element($window).bind("scroll", function() {
			scope.topPosScroll = false;
			scope.centerScroll = false;
			scope.bottomScroll = false;
			if (this.pageYOffset == 0) {
				scope.topPosScroll = true
			} else if (this.pageYOffset >= scrollPosition.appHeight()) {
				scope.bottomScroll = true;
			} else {
				scope.centerScroll = true;
			}
			scope.$apply();
		});
	};
});