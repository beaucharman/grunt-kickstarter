/**
 *
 * CSS minify and concat
 *
 */

 var helper = require('./vars.js');

module.exports = {

	options: {

		banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
		report: 'min'
	},

	build: {

		src: helper.css.src.files.map(function (item) {
			return helper.css.src.dir + item;
		}),
		dest: '<%= vars.css.dest.dir %>' + '<%= vars.css.dest.file %>'
	}

};