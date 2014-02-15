/**
 *
 * uglify
 *
 */

var helper = require('./vars.js');

module.exports = {

	options: {
		banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
		sourceMap: '<%= vars.js.dest.dir %>' + '<%= vars.js.dest.file %>' + '.map',
		sourceMappingURL: '<%= vars.js.dest.file %>' + '.map',
	},

	/* Uglify Dev */
	dev: {
		options: {
			mangle: false,
			beautify: true
		},
		src: helper.js.src.files.map(function (item) {
			return helper.js.src.dir + item;
		}),
		dest: '<%= vars.js.dest.dir + vars.js.dest.file %>'
	},

	/* Uglify Prod */
	prod: {
		options: {
			mangle: true,
			beautify: false
		},
		src: helper.js.src.files.map(function (item) {
			return helper.js.src.dir + item;
		}),
		dest: '<%= vars.js.dest.dir + vars.js.dest.file %>'
	}

};