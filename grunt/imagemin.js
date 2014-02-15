/**
 *
 * Image Min
 *
 */

module.exports = {

	png: {
		options: {
			optimizationLevel: 7,
			cache: false
		},
		files: [{
			expand: true,
			cwd: '<%= vars.img.src.dir %>',
			src: '<%= vars.img.src.png %>',
			dest: '<%= vars.img.dest.dir %>',
			ext: '.png'
		}]
	},

	jpg: {
		options: {
			progressive: false,
			cache: false
		},
		files: [{
			expand: true,
			cwd: '<%= vars.img.src.dir %>',
			src: '<%= vars.img.src.jpg %>',
			dest: '<%= vars.img.dest.dir %>',
			ext: '.jpg'
		}]
	}

};