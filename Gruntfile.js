/**
*
* Gruntfile
* ================================================
* Grunt installation:
*
*  	npm install -g grunt-cli
*   npm install -g grunt-init
*
* Project Dependencies:
*
*  	npm install grunt --save-dev
*   npm install grunt-autoprefixer --save-dev
*   npm install grunt-contrib-imagemin --save-dev
*   npm install grunt-contrib-jshint --save-dev
*   npm install grunt-contrib-sass --save-dev
*   npm install grunt-contrib-uglify --save-dev
*   npm install grunt-contrib-watch --save-dev
*   npm install jshint-stylish --save-dev
*   npm install load-grunt-tasks --save-dev
*   npm install time-grunt --save-dev
*
* Simple Dependency Install (with a package.josn):
*
*  	npm install
*
* Install with no package.json
*
*  	npm init
*   npm install grunt grunt-autoprefixer grunt-contrib-imagemin grunt-contrib-jshint grunt-contrib-sass grunt-contrib-uglify grunt-contrib-watch jshint-stylish load-grunt-tasks time-grunt --save-dev
*
* Gem Dependencies:
*
*  	gem install image_optim
*
*/

module.exports = function (grunt) {

	'use strict';

	/**
	 *
	 * Variables
	 * ================================================
	 *
	 */

	/**
	 * CSS
	 */
	var css = {
		src: {
			dir: 'library/css/',
			files: ['main.js', 'plugins.js']
		},
		dest: {
			dir: 'library/css/prod/',
			file: 'main.min.js'
		}
	};

	/**
	 * JavaScripts
	 */
	var js = {
		src: {
			dir: 'library/js/',
			files: ['main.js', 'plugins.js']
		},
		dest: {
			dir: 'library/js/prod/',
			file: 'main.min.js'
		}
	};

	/**
	 * Images
	 */
	var img = {
		src: {
			dir: 'images/',
			jpg: ['**/*.{jpg}'],
			png: ['**/*.{png}'],
		},
		dest: {
			dir: 'images/'
		}
	};

	/**
	 * Helpers
	 */
	var helper = {
		mapToJSFiles: function () {
			return js.src.files.map(function (item) {
				return js.src.dir + item;
			});
		},
    mapToCSSFiles: function () {
			return css.src.files.map(function (item) {
				return css.src.dir + item;
			});
    }
	};

	console.log(helper.mapToJSFiles());

	require('time-grunt')(grunt);

	require('load-grunt-tasks')(grunt, ['grunt-*']);

	/**
	 *
	 * Grunt Configuration
	 * ================================================
	 *
	 */
	grunt.initConfig({



		/**
		 * Included Package.json
		 */
		pkg: require('./package'),



		/**
		 *
		 * CSS Tasks
		 * ================================================
		 *
		 */

		/**
		 * AutoPrefixer
		 */
		/**
		 * CSS Concat
		 */
		/**
		 * CSS Minify
		 */
		/**
		 * CSS Lint
		 */
		/**
		 * Sass
		 */




		/**
		 *
		 * JavaScript Tasks
		 * ================================================
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
				sourceMappingURL: js.dest.file +'.map',
				mangle: false,
				beautify: true,
				separator: ';'
			},
			build: {
				src: helper.mapToJSFiles(),
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
			beforeconcat: js.src.files.map(function (item) { return js.src.dir + item; }),
			afterconcat: js.dest.dir + js.dest.file
		},



		/**
		 *
		 * Image Tasks
		 * ================================================
		 *
		 */
		imagemin: {
			png: {
				options: {
					optimizationLevel: 7
				},
				files: [{
					expand: true,
					cwd: img.src.dir,
					src: img.src.png,
					dest: img.dest.file,
					ext: '.png'
				}]
			},
			jpg: {
				options: {
					progressive: false
				},
				files: [{
					expand: true,
					cwd: img.src.dir,
					src: img.src.jpg,
					dest: img.dest.file,
					ext: '.jpg'
				}]
			}
		},


		/**
		 *
		 * Watch Tasks
		 * ================================================
		 *
		 */
		watch: {
			scripts: {
				files: helper.mapToJSFiles(),
				tasks: 'scripts'
			},
			stylesheets: {
				files: helper.mapToCSSFiles(),
				tasks: 'stylesheets'
			}
		}

	});



	/**
	 *
	 * Register Tasks
	 * ================================================
	 *
	 */
	grunt.registerTask('default', ['uglify', 'jshint']);

	grunt.registerTask('scripts', ['uglify', 'jshint']);

	grunt.registerTask('stylesheets', ['uglify', 'jshint']);



};
