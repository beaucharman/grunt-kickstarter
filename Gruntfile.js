/**
*
* Gruntfile
*
* Grunt installation:
*
*  npm install -g grunt-cli
*  npm install -g grunt-init
*
* Project Dependencies:
*
*  npm install grunt --save-dev
*  npm install grunt-contrib-imagemin --save-dev
*  npm install grunt-contrib-jshint --save-dev
*  npm install grunt-contrib-sass --save-dev
*  npm install grunt-contrib-uglify --save-dev
*  npm install grunt-contrib-watch --save-dev
*  npm install jshint-stylish --save-dev
*  npm install load-grunt-tasks --save-dev
*  npm install time-grunt --save-dev
*
* Simple Dependency Install (with a package.josn):
*
*  npm install
*
* Install with no package.json
*
*  npm init
*  npm install grunt grunt-contrib-imagemin grunt-contrib-jshint grunt-contrib-sass grunt-contrib-uglify grunt-contrib-watch jshint-stylish load-grunt-tasks time-grunt --save-dev
*
* Gem Dependencies:
*
*  gem install image_optim
*
*/

module.exports = function (grunt) {

	'use strict';

	/**
	 *
	 * Variables
	 *
	 */

	/**
	 * JavaScripts
	 */
	var js = {
		src: {
			dir: 'demo/',
			files: ['main.js', 'plugin.js']
		},
		dest: {
			dir: 'demo/js/',
			file: 'main.min.js'
		}
	};

	console.log(js.src.files);

	require('time-grunt')(grunt);

	require('load-grunt-tasks')(grunt, ['grunt-*']);

	grunt.initConfig({



		/**
		 * Included Package.json
		 */
		pkg: require('./package'),



		/**
		 *
		 * JavaScript Tasks
		 *
		 */

		/**
		 *
		 * uglify
		 *
		 */
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
				sourceMap: js.dest.dir + js.dest.file + '.map',
				sourceMappingURL: js.dest.file +'.map'
			},
			// scripts: {
			// 	src: js.src.files,
			// 	dest: js.dest.dir + js.dest.file
			// }
			scripts: {
				expand: true,
				cwd: js.src.dir,
				src: js.src.files,
				dest: js.dest.dir + js.dest.file
			}
		},

		/**
		 *
		 * jshint
		 *
		 */
		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			beforeconcat: js.src.files,
			afterconcat: js.dest.dir + js.dest.file
		}

	});



	/**
	 *
	 * Register Tasks
	 *
	 */
	grunt.registerTask('default', ['uglify', 'jshint']);

};
