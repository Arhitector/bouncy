var servicesModel = "../src/markups/modules/services/services.json";

bouncyApp.controller('servicesCtrl', function ($scope, $timeout, jsonLoader) {
	jsonLoader(servicesModel).then(function (data) {
		$scope.servicesData = data;
		$scope.model = data;
		return servicesData = data;
	});
	$scope.clickServices = function (keys) {
		var servicesItemData = servicesData;
		for (item in keys) {
			servicesItemData = servicesItemData[keys[item]];
		}
		$scope.servicesItemData = servicesItemData;

		angular.forEach(angular.element(".b-counter"), function( value, key, $scope){
			var currentElement = angular.element(value);
			var svgPathTextValue = currentElement.find('.b-percent').html();
			var svgRadiusCircle = 60;
			lengthRadius = 2*Math.PI*svgRadiusCircle;
			lengthPath = -lengthRadius + svgPathTextValue /100 * lengthRadius;
			//$scope.svgLengthCircle = lengthRadius;
			//$scope.svgPathTextPath = lengthPath;
			angular.element(value).find('.b-svg__sector').css("stroke-dasharray",lengthRadius);
			angular.element(value).find('.b-svg__sector').css("stroke-dashoffset",lengthPath);
		});

	};
});

/*
var Services = function () {};
Services.prototype = new Core();

Services.prototype.percentIncrement = function () {
	var increment = 00;
	var stopIncrement = this.svgPathTextValue;
	var incrementSelector = this.svgPathTextg;

	var timer = setInterval(function() {
		if (increment < stopIncrement) {
			incrementSelector.text(increment + 1);
			increment++;
		} else {
			clearInterval(timer);
		}
	}, 6);
}

/!* draw sector*!/
Services.prototype.calculateFullLength = function () {
	this.svgLengthCircle = 2*Math.PI*this.svgRadiusCircle;
	this.svgPathTextPath = - this.svgLengthCircle + this.svgPathTextValue /100 * this.svgLengthCircle;
};

Services.prototype.getOptions = function (val) {
	this.svgParent = $(val);
	this.svgPathCircle = this.svgParent.find('.b-svg__circle');
	this.svgPathSector = this.svgParent.find( '.b-svg__sector');
	this.svgPathText = this.svgParent.find('.b-percent');
	this.svgPathTextValue = this.svgPathText.html();
	this.svgRadiusCircle = parseInt(this.svgPathCircle.css('r'), 10);
	console.log(this.svgRadiusCircle);
};
Services.prototype.setOptions = function () {
	this.svgPathSector.css("stroke-dasharray", this.svgLengthCircle);
	this.svgPathSector.css('stroke-dashoffset', this.svgPathTextPath);
	this.svgPathSector.css('stroke', '#19bd99');
};
var initDrawing = function () {
	var services = new Services();
	$.each($('.b-counter .b-svg'), function (i, val) {
		services.getOptions(val);
		services.calculateFullLength();
		services.percentIncrement();
		services.setOptions();
	});
};
/!* end draw sector*!/

$(function () {
	initDrawing();
});


*/
