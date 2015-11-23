var teamModel = "../src/markups/modules/team/team.json";

bouncyApp.controller("teamCtrl", function ($scope, jsonLoader) {
	jsonLoader(teamModel).then(function (data) {
		$scope.teamData = data;
		$scope.model = data;
	});
	var mySwiper = new Swiper ('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	});

});