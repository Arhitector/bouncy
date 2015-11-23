var portfolioModel = "../src/markups/modules/portfolio/portfolio.json";

bouncyApp.controller("portfolioCtrl", function ($scope, jsonLoader) {
	jsonLoader(portfolioModel).then(function (data) {
		$scope.portfolioData = data;
		$scope.model = data;
	});
	$scope.clickWork = function (elm, $event) {
		$scope.currentFilter = elm;
		angular.element('.b-list__item').removeClass('active');
		angular.element($event.currentTarget).addClass('active');
	};
	$scope.selectedItems = function (work) {
		var filterData = $scope.currentFilter;
		//console.log($scope.currentFilter);
		resultValue = false;
		if (filterData != 'all words' || !filterData) {
			angular.forEach(work.dataLink, function(item) {
				if( item.indexOf(filterData) >= 0 ) {
					resultValue = true;
				}
			});
		}
		else {
			resultValue = true
		}
		return resultValue;
	}
});