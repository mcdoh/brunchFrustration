const path = require('path');

module.exports = {
	entry: {
		app: './js/app.js',
		admin: './admin/admin.js',
		vendor: './vendor/vendor.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../priv/static/js')
	}
};
