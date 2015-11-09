module.exports = new function () {
	// Template variables
	cfg.destTemplate = {
		'root' : '../' + cfg.src.root,
		'pageTitle': 'Bouncy',
		'cssPath': 'css',
		'imgPath': '../' + cfg.src.img,
		'jsPath': 'js',
		'tempPath': '../' + cfg.src.tempImg,
		'imageSprites': '../' + cfg.src.sprites,
		'blocksPath': '../' + cfg.src.blocks,
		'modulePath': '../' + cfg.src.modules
	};
}