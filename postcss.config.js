const autoprefixer = require('autoprefixer');

module.exports = {
	plugins: [
		autoprefixer({
			browserlist: ['> 1%', 'last 4 versions'],
		}),
	],
};
