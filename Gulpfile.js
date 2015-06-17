// common used plugins
require('./gulp/lib/consts');
global._ 			= require('lodash');
global.gulp 		= require('gulp');
global.gulpSequence = require('gulp-sequence');
global.glob 		= require('glob');
global.path 		= require('path');
global.fs 			= require('fs');
global.rimraf 		= require('rimraf');
global.foreach 		= require('gulp-foreach');
global.gulpIf 		= require('gulp-if');
global.noop			= require('gulp-util').noop;
global.notify 		= require('gulp-notify');
global.plumber 		= require('gulp-plumber');
global.configLoader	= require('./gulp/lib/config-loader');
global.args			= require('yargs').argv;

configLoader.load(args.env ? args.env : 'dev');

gulp.task('less', function () {
	gulp.start('lessTask');
});
gulp.task('lessTask', function () {
	return require('./gulp/less-task')();
});
gulp.task('sass', function () {
	return require('./gulp/sass-task')();
});
gulp.task('handlebars', function () {
	return require('./gulp/handlebars-task.js')(true);
});
gulp.task('jade', function () {
	return require('./gulp/jade-task')();
});
gulp.task('js', function () {
	return require('./gulp/js-task')(true);
});
gulp.task('imagemin', function () {
	return require('./gulp/imagemin-task')();
});
gulp.task('sprite', function () {
	return require('./gulp/sprite-task')();
});
gulp.task('connect', function () {
	require('browser-sync')({
		notify: false,
		directory: true,
		open: false,
		port: cfg.serverPort,
		server: {
			baseDir: cfg.dest.root,
			routes: {
				'/pics': cfg.src.tempImg,
				'/src': cfg.src.root,
				'/scripts': cfg.src.scripts,
				'/modules': cfg.src.modules,
				'/bower_components': cfg.src.bowerComponents,
				'/node_modules': cfg.src.nodeModules
			}
		}
	});
});
gulp.task('watch', ['connect'], function () {
	return require('./gulp/watch-task')();
});
gulp.task('cleanCache', function (done) {
	return cache.clearAll(done);
});
gulp.task('cleanDest', function () {
	return gulp.src([cfg.dest.root, cfg.src.styles + '/sprites'], {read: false}).pipe(rimraf());
});
gulp.task('cleanAll', function () {
	return gulp.src(['bower_components', '.sass-cache', 'temp', 'test', 'node_modules', cfg.dest.root, cfg.src.styles + '/sprites',], {read: false}).pipe(rimraf());
	gulp.start('cleanCache');
});
gulp.task('fonts', function () {
	gulp.src(cfg.src.fonts)
		.pipe(gulp.dest(cfg.dest.fonts))
});
gulp.task('pre-commit', [cfg.cssBuilder, cfg.htmlCompiler, 'js', 'imagemin'], function (cb) {
	// add validation tasks
	console.log('pre-commit: ok');
	cb();
	//gulp.start(cssBuilder);
});
gulp.task('default', [cfg.cssBuilder, cfg.htmlCompiler, 'js', 'imagemin'], function () {
	gulp.start('watch');
});
gulp.task('build', [cfg.cssBuilder, cfg.htmlCompiler, 'js', 'imagemin'], function () {
});
gulp.task('prod', function () {
	configLoader.load('prod');

	gulp.start(cfg.htmlCompiler, cfg.cssBuilder, 'js', 'imagemin');
});