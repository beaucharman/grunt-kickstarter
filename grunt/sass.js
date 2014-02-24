/**
 *
 * Sass
 *
 */

module.exports = {

	dev: {

		options: {
			style: 'expanded',
			lineNumbers: true
		},
		src: '<%= vars.scss.src.dir %>' + '<%= vars.scss.src.main %>',
		dest: '<%= vars.scss.dest.dir %>' + '<%= vars.scss.dest.file %>'
	},

	prod: {

		options: {
			banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
			style: 'compressed'
		},
		src: '<%= vars.scss.src.dir %>' + '<%= vars.scss.src.main %>',
		dest: '<%= vars.scss.dest.dir %>' + '<%= vars.scss.dest.file %>'
	}

};