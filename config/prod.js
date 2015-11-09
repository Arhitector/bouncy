module.exports = new function () {
	cfg.isProd = true;

	cfg.dest.root = './prod';
	cfg.destTemplate = {
		'root' : cfg.dest.root,
		'cssPath': 'css',
		'imgPath': '/img',
		'tempPath': '/img',
		'imageSprites': '/img',
		'blocksPath': '/img',
		'modulePath': 'img'
	};
};
