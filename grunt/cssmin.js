/**
 * CSS minify and concat
 */

module.exports = {

	options: {

		banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
		report: 'min'
	},

	build: {

		src: '<%= vars.helper.mapToCSSFiles() %>',
		dest: '<%= vars.css.dest.dir %>' + '<%= vars.css.dest.file %>'
	}

};