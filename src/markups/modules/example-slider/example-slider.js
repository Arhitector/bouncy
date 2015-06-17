define(['scripts/base', 'swiper', 'can/control/', 'can/construct/super/super'], function (base, swiper, Control, _super) {
	// private classes and functions
	var ExampleSlider = Control.extend({
			defaults: {
				sliderOptions: {
					slidesPerView: 2,
					pagination: '.swiper-pagination',
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					paginationClickable: true
				}
			}
		},
		{
			init: function (el, opts) {
				this._super();
				this.render();
			},

			render: function () {
				this.slider = new Swiper('#' + this.element.attr('id') + ' .swiper-container', this.options.sliderOptions);
			}
		});

	return ExampleSlider;
});
