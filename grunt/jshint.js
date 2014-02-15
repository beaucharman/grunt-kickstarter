/**
 *
 * jshint
 *
 */

var helper = require('./vars.js');

module.exports = {

	options: {
		reporter: require('jshint-stylish')
	},

	beforeconcat: helper.js.src.files.map(function (item) {
		return helper.js.src.dir + item;
	}),

	afterconcat: '<%= vars.js.dest.dir + vars.js.dest.file %>'

};