module.exports = new function () {
	// CSS compiler (LESS is default): LESS, SASS
	this.cssBuilder		= 'less';
	// HTML compiler (Handlebars is default): Handlebars, Jade
	this.htmlCompiler	= 'jade';
	// Server port
	this.serverPort		= 8054;
};
