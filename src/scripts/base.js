/**
 * TODO. cloudinary dependency should be added by yeoman
 */
define(['scripts/config', 'jquery', 'can/construct/', 'scripts/device', 'cloudinary'], function (config, $, Construct, device, cloudinary) {
	// private classes and functions
	var Application = Construct.extend({
		init: function () {
			var document = $('html');

			if (device.isMobile) {
				document.addClass('mobile');
			}
			if (device.isTouch) {
				document.addClass('touch');
			}
			/**
			 * TODO. should be added by yeoman
			 */
			$('.cloudinary-image').each(function () {
				var $img = $(this),
					config = {},
					width = parseInt($img.css('max-width')),
					height = parseInt($img.css('max-height'));

				if (!isNaN(width)) {
					config.width = width;
				}
				if (!isNaN(height)) {
					config.height = height;
				}
				$img.cloudinary(config);
			});
		}
	});

	new Application();
	return {
		'device': device
	};
});


