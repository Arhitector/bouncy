module.exports = new function () {
	cfg.minifiedJsFilename	= 'all.min.js';
	cfg.jsBundle = 'all';
	cfg.jsBundles = {
		all: {
			include: [
				'*'
			],
			exclude: [
				/^header/
			]
		}
	};
};
