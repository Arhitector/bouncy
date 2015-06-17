module.exports = new function () {
	var compass			= require('gulp-compass'),
		autoprefixer	= require('gulp-autoprefixer'),
		base64			= require('gulp-base64'),
		csso 			= require('gulp-csso'),
		bless			= require('gulp-bless'),
		size			= require('gulp-size');

	return function () {
		return gulp.src(cfg.src.styles + "/all.min.scss")
		.pipe(compass({
			require: ['sass-globbing'],
			sass: cfg.src.styles
		}))
		.pipe(autoprefixer({
			browsers: [cfg.autoprefixerBrowserSupport],
			cascade: true
		}))
		.pipe(csso())
		.pipe(gulpIf(
			cfg.base64Enable,
			base64({
				baseDir: cfg.dest.img,
				extensions: ['svg', 'png', 'jpg'],
				maxImageSize: cfg.base64Size,
				debug: true
			})
		))
		.pipe(size({showFiles: true}))
		.pipe(bless())
		.pipe(gulp.dest(cfg.dest.css));
	};
};