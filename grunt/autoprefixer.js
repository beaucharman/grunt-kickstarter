/**
 * AutoPrefixer
 */

module.exports = {

	prod: {
		src:  '<%= vars.css.dest.dir %>' + '<%= vars.css.dest.file %>',
		dest: '<%= vars.css.dest.dir %>' + '<%= vars.css.dest.file %>'
	}

};