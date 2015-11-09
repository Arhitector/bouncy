
bouncyApp.controller("scrollCtrl", function ($scope, scrollPosition) {

	$scope.scrollUp = function () {
		window.scrollTo(0, scrollPosition.currentPosition() - scrollPosition.viewportHeight());
	};
	$scope.scrollDown = function () {
		window.scrollTo(0, scrollPosition.currentPosition() + scrollPosition.viewportHeight());
	};
});
/*
var Scroller = function () {
	Core.prototype.initialize.apply(this, arguments);
	this.parentElement = $('#scroll');
	this.childTop = $('.g-scroll__up');
	this.childBottom = $('.g-scroll__down');
	this.extrimPoints = function () {
		return this.parentElement.children().removeClass('js-scrolling').addClass('js-scrollingBack')
	};
	this.endPoint = function (getPoint){
		this.extrimPoints();
		getPoint.addClass('js-top');
		//this.removeClone(this.parentElement);
	};
	this.removeClone = function (elementRemove) {
		console.log(elementRemove);
		var el     = elementRemove,
		newone = el.clone(true);
		$("." + el.attr("class") + ":last").remove();
	}
}
Scroller.prototype = new Core();

Scroller.prototype.setClassScrollPosition = function () {
	if (this.scrollPosition == this.scrollTopPoint) {
		this.endPoint(this.childBottom);
		//console.log("top");
	} else if (this.scrollBottomPoint > this.scrollPosition) {
		setTimeout(function() {
			$('#scroll').children().addClass('js-scrolling').removeClass('js-scrollingBack').removeClass('js-top');
		}, 100);
		//this.removeClone(this.parentElement);
		//console.log("scrolled");
	} else if (this.scrollPosition >= this.scrollBottomPoint) {
		this.endPoint(this.childTop);
		//console.log("bottom");
	}
}
Scroller.prototype.buttonsScrollAction = function() {
	var self = this;
	this.childTop.click(function (self){
		$('html, body').animate({ scrollTop: $(window).scrollTop() - $(window).height() }, 500);
	});
	this.childBottom.click(function (self){
		$('html, body').animate({ scrollTop: $(window).scrollTop() + $(window).height() }, 500);
	});
};
Scroller.prototype.onScroll = Scroller.prototype.setClassScrollPosition;


$(function () {
	var scroller = new Scroller();
	scroller.buttonsScrollAction();
});*/
