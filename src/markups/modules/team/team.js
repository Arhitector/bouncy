var teamModel = "../src/markups/modules/team/team.json";

bouncyApp.controller("teamCtrl", function ($scope, jsonLoader, $timeout) {
	jsonLoader(teamModel).then(function (data) {
		$scope.teamData = data;
		$scope.model = data;
	});
	/*var mySwiper = new Swiper ('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	});*/
	$timeout(function () {
		//DOM has finished rendering
		var mySwiper = new Swiper ('.js-team-swiper', {
			pagination: '.js-team-pagination',
			paginationClickable: true
		});
	});


});