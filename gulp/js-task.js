module.exports = new function () {
	var rename		= require('gulp-rename'),
		uglify		= require('gulp-uglify'), // UglifyJS
		stealTools	= require('steal-tools'),
		mkdirp		= require('mkdirp');

	gulp.task('jsInitialize', function (cb) {
		if (cfg.isProd) {
			cb();
		}
		else {
			return gulp.src(['package.json', 'bower.json'])
				.pipe(gulp.dest(cfg.dest.root));
		}
	});

	gulp.task('jsRun', function (cb) {
		if (cfg.isProd) {
			var bundle = _.extend({
					include: [],
					exclude: []
				}, cfg.jsBundles[cfg.jsBundle]),
				includes = [],
				files = [];

			if (bundle.include.indexOf('*') !== -1) {
				includes = _.map(glob.sync(cfg.src.modules + '/*'), function (value) {
					return value.substr(cfg.src.modules.length + 1);
				});
			}
			else {
				includes = bundle.include;
			}
			includes.forEach(function (fileName) {
				var filePath = cfg.src.modules + '/' + fileName;

				if (fs.statSync(filePath).isDirectory()) {
					glob.sync(filePath + '/*.@(js)').forEach(function (depName) {
						files.push(depName.substr(cfg.src.modules.length + 1));
					});
				}
				else {
					files.push(fileName);
				}
			});
			bundle.exclude.forEach(function (pattern) {
				if (pattern.constructor === RegExp) {
					_.remove(files, function (fileName) {
						return pattern.test(fileName);
					});
				}
				else {
					files = _.without(files, pattern);
				}
			});
			files = _.map(files, function (fileName) {
				return 'modules/' + fileName.replace(/\.(js)$/, '');
			});
			mkdirp.sync(cfg.dest.temp + '/bundles/' + cfg.jsBundle);
			fs.writeFileSync(cfg.dest.temp + '/bundles/' + cfg.jsBundle + '/' + cfg.jsBundle + '.js', '' +
				'define(' + (files.length > 0 ? '["' + files.join('", "') + '"]' : '') + ', function () {' + "\n" +
					"\t" + '// bundle file' + "\n" +
				'});'
			);
			stealTools.build(
				{
					main:			cfg.jsBundle,
					config:			'./package.json!npm',
					bundlesPath:	cfg.dest.dist + '/bundles/' + cfg.jsBundle,
					paths: (function () {
						var paths = {};

						paths[cfg.jsBundle] = cfg.dest.temp + '/bundles/' + cfg.jsBundle + '/' + cfg.jsBundle + '.js';
						return paths;
					})()
				},
				{
					sourceMaps: false,
					bundleSteal: true,
					debug: false,
					minify: false
				}
			).then(function () {
				gulp.src(cfg.dest.dist + '/bundles/' + cfg.jsBundle + '/*')
					/*.pipe(gulpIf('*.js', uglify()))
					.pipe(gulpIf('*.js', rename(function (filePath) {
						filePath.basename += '.min';
					})))
					.pipe(gulpIf('*.map', rename(function (filePath) {
						filePath.basename = filePath.basename.replace(/(\.js)$/, '.min$1');
					})))*/
					.pipe(gulp.dest(cfg.dest.js))
					.on('end', function () {
						cb();
					});
			});
		}
		else {
			cb();
		}
	});

	return function (initialize) {
		if (initialize) {
			return gulpSequence('jsInitialize', 'jsRun').call();
		}
		else {
			return gulpSequence('jsRun').call();
		}
	};
};