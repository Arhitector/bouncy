'use strict';

var fs			= require('fs'),
	path		= require('path'),
	destPath	= path.join('.git', 'hooks', 'pre-commit');

if (!fs.existsSync('.git')) {
	console.error("Isn't a git repository, hook wasn't installed");
	process.exit(1);
}
console.log('Copying hook...');
try {
	if (!fs.existsSync(destPath)) {
		fs.mkdirSync(path.dirname(destPath));
	}
} catch(e) {
	console.error(e);
	process.exit(1);
}
fs.writeFileSync(destPath, fs.readFileSync(path.join(__dirname, 'files', 'pre-commit')));
fs.chmodSync(destPath, '755');