module.exports = new function () {
	var Handlebars				= require('handlebars'),
		handlebarsLayoutsHelper	= require('handlebars-layouts');

	Handlebars.getPropertyValue = function (name, data) {
		if (!name || !data || data === null || typeof data !== 'object') {
			return undefined;
		}
		if (data[name]) {
			return data[name];
		}
		else {
			var root = data;
			while (root = root.root) {
				if (root[name]) {
					return root[name];
				}
			}
			return undefined;
		}
	};

	gulp.task('handlebarsInit', function (cb) {
		Handlebars.registerHelper(handlebarsLayoutsHelper(Handlebars));

		return gulp
			.src(cfg.src.markups + '/**/*.tpl.hbs')
			.pipe(foreach(function (stream, file) {
				try {
					fs.readFile(file.path, {encoding: 'utf8'}, function (err, data) {
						if (err) {
							console.log(err);
						}
						else {
							try {
								var partialName = path.basename(file.path).replace(/\.tpl\.hbs$/, '').trim();
								Handlebars.registerPartial(
									partialName,
									data
								);
							}
							catch (err) {
								console.log(err);
							}
						}
					});
				}
				catch (err) {
					console.log(err);
				}
				return stream;
			}));
	});

	gulp.task('handlebarsInitHelpers', function (cb) {
		Handlebars.registerHelper(handlebarsLayoutsHelper(Handlebars));

		Handlebars.registerHelper('isEnv', isEnvHelper);
		Handlebars.registerHelper('classes', classesHelper);
		Handlebars.registerHelper('attributes', attributesHelper);
		Handlebars.registerHelper('include', mixinHelper);
		Handlebars.registerHelper('mixin', mixinHelper);
		Handlebars.registerHelper('data', dataHelper);

		return gulp
			.src(cfg.src.markups + '/blocks/**/*.helpers.js')
			.pipe(foreach(function (stream, file) {
				try {
					var helpers = require(file.path);

					_.each(helpers, function (helper, name) {
						Handlebars.registerHelper(name, helper);
					});
				}
				catch (err) {
					console.log(err);
				}
				return stream;
			}));
	});

	gulp.task('handlebarsRun', function () {
		return gulp.src(cfg.src.markups + '/*.hbs')
			.pipe(foreach(function (stream, file) {
				try {
					var template = Handlebars.compile(fs.readFileSync(file.path, 'utf8')),
					    output   = template(_.extend(
							{
								'env'		: env,
								isProd		: cfg.isProd,
								jsBundlePath: cfg.destTemplate.jsPath + '/' + cfg.jsBundle + '.js'
							}, cfg.destTemplate));
					fs.writeFile(cfg.dest.html + '/' + path.basename(file.path.replace(/\.hbs$/, '.html')), output);
				}
				catch (err) {
					console.log(err);
					process.exit(1);
				}
				return stream;
			}));
	});

	function loadJson(path) {
		var filePath = cfg.src.markups + '/' + path;

		if (filePath.indexOf('.json') === -1) {
			filePath += '.json';
		}
		if (fs.existsSync(filePath)) {
			try {
				jsonData = JSON.parse(fs.readFileSync(filePath));
			}
			catch (err) {
				console.log(err);
			}
			return jsonData;
		}
		return {};
	}

	function getChildContext(options) {
		return Handlebars.createFrame(options.data);
	}

	function isEnvHelper(env, options) {
		return global.env && global.env === env ? options.fn(this) : options.inverse(this);
	}

	function mixinHelper(name, options) {
		var context  = getChildContext(options),
		    output,
		    template,
		    filePath = cfg.src.markups +
			    (name.indexOf('/') === -1 ? '/blocks/' + name + '/' + name : '/' + name);

		if (filePath.indexOf('.hbs') === -1) {
			filePath += '.hbs';
		}
		if (fs.existsSync(filePath)) {
			if (options.hash.path) {
				context.data = loadJson(options.hash.path);
				delete options.hash.path;
			}
			context = _.extend(context, options.hash || {});
			template = Handlebars.compile(fs.readFileSync(filePath, 'utf8'));
			output = new Handlebars.SafeString(template(context));
		}
		return output;
	}

	function dataHelper(path, options) {
		var context = getChildContext(options);

		context.data = loadJson(path);
		return options.fn(context);
	}

	function attributesHelper(data, options) {
		var html = '';

		_.each(data, function (value, name) {
			html += name + '="' + (value + '').replace('"', '\\"') + '" ';
		});

		return html.trim();
	}

	function classesHelper(data, options) {
		return 'class="' + data.join(' ') + '"';
	}

	return function (initialize) {
		if (initialize) {
			return gulpSequence('handlebarsInit', 'handlebarsInitHelpers', 'handlebarsRun').call();
		}
		else {
			return gulpSequence('handlebarsRun').call();
		}
	};
};