module.exports = new function () {
	var responsive = require('gulp-responsive'),
		size = require('gulp-size');

	return function () {
		return gulp.src([
			cfg.src.img + '/*.' + IMAGE_FORMATS,
			cfg.src.tempImg + '/*.' + IMAGE_FORMATS,
			cfg.src.blocks + '/**/images/*.' + IMAGE_FORMATS,
			cfg.src.modules + '/**/images/*.' + IMAGE_FORMATS,
			!cfg.src.dataUri + '*.' + IMAGE_FORMATS
		])
		.pipe(responsive([{
			name: '*',
			width: 200
		},{
			name: '*',
			width: 200 * 2,
			rename: '@1.5x.png'
		},{
			name: '*',
			width: 200 * 2,
			rename: '@2x.png'
		},{
			name: '*',
			width: 200 * 2,
			rename: '@3x.png'
		}]))
		.pipe(gulp.dest(cfg.dest.img));
	};
};