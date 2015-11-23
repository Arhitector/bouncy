var bouncyApp = angular.module("bouncyApp",['ngSanitize']);

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
}])

.factory('scrollPosition', function () {
		var appHeight = $('body').height();
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
})
.directive("scroll", function ($window, scrollPosition) {
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
})
.directive("clickActive", function () {
	return {
		link: function (scope, element, attributes) {
			element.children().bind({
				click: function (e) {
					element.children().removeClass("active");
					angular.element(e.target).addClass("active");
				}
			});
			var arrayAttr = attributes["clickActive"];
			var onFirstShow = scope;
			/*for(item in arrayAttr){
				var onFirstShow = onFirstShow[arrayAttr[item]];
			};*/
			//console.log(scope.$parent);
		},
		restrickt: "A"
	}
});
/*
window.onload = function () {
	var mySwiper = new Swiper ('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	})
};*/
