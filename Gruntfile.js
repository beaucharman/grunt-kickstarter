/**
 *
 * Gruntfile
 *
 * @link:       https://github.com/beaucharman/grunt-kickstater
 * @author:     Beau Charman | @beaucharman | https://github.com/beaucharman
 * @version:    1 | February 10th 2014
 * @license:    MIT License | http://opensource.org/licenses/MIT
 *
 * ================================================
 *
 * Grunt installation:
 *
 *   npm install -g grunt-cli
 *   npm install -g grunt-init
 *
 * Project Dependencies:
 *
 *   npm install grunt --save-dev
 *   npm install grunt-autoprefixer --save-dev
 *   npm install grunt-contrib-csslint --save-dev
 *   npm install grunt-contrib-cssmin --save-dev
 *   npm install grunt-contrib-imagemin --save-dev
 *   npm install grunt-contrib-jshint --save-dev
 *   npm install grunt-contrib-sass --save-dev
 *   npm install grunt-contrib-uglify --save-dev
 *   npm install grunt-contrib-watch --save-dev
 *   npm install grunt-dploy --save-dev
 *   npm install jshint-stylish --save-dev
 *   npm install load-grunt-tasks --save-dev
 *   npm install time-grunt --save-dev
 *
 * Simple Dependency Install (with a package.josn):
 *
 *   npm install
 *
 * Install with no package.json
 *
 *   npm init
 *   npm install grunt grunt-autoprefixer grunt-contrib-csslint grunt-contrib-cssmin grunt-contrib-imagemin grunt-contrib-jshint grunt-contrib-sass grunt-contrib-uglify grunt-contrib-watch grunt-dploy jshint-stylish load-grunt-tasks time-grunt --save-dev
 *
 * Gem Dependencies:
 *
 *   gem install image_optim
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
			dir: 'library/source/css/',
			files: ['layout.css', 'color.css']
		},
		dest: {
			dir: 'library/css/',
			file: 'main.min.css'
		}
	};

	/**
	 * SCSS
	 */
	var scss = {
		src: {
			dir: 'library/source/scss/',
			files: ['main.scss', '_layout.css', '_color.css'],
			main: 'main.scss'
		},
		dest: {
			dir: 'library/css/',
			file: 'main.min.css'
		}
	};

	/**
	 * JavaScripts
	 */
	var js = {
		src: {
			dir: 'library/source/js/',
			files: ['main.js', 'plugins.js']
		},
		dest: {
			dir: 'library/js/',
			file: 'main.min.js'
		}
	};

	/**
	 * Images
	 */
	var img = {
		src: {
			dir: 'library/images/',
			jpg: ['**/*.jpg', '**/*.jpeg'],
			png: ['**/*.png'],
		},
		dest: {
			dir: 'library/images/'
		}
	};

	/**
	 * Helpers
	 */
	var helper = {
		mapToJSFiles: function () { return js.src.files.map(function (item) { return js.src.dir + item; }); },
		mapToCSSFiles: function () { return css.src.files.map(function (item) { return css.src.dir + item; }); },
		mapToSCSSFiles: function () { return scss.src.files.map(function (item) { return scss.src.dir + item; }); }
	};

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
		 * CSS Lint
		 */
		csslint: {
			strictCSS: {
				options: {
					ids: true
				},
				src: helper.mapToCSSFiles()
			}
		},

		/**
		 * CSS minify and concat
		 */
		cssmin: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
				report: 'min'
			},
			build: {
				src: helper.mapToCSSFiles(),
				dest: css.dest.dir + css.dest.file
			}
		},

		/**
		 * Sass
		 */
		sass: {
			dev: {
				options: {
					style: 'expanded',
					lineNumbers: true
				},
				src: scss.src.dir + scss.src.main,
				dest: scss.dest.dir + scss.dest.file
			},
			prod: {
				options: {
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
					style: 'compressed'
				},
				src: scss.src.dir + scss.src.main,
				dest: scss.dest.dir + scss.dest.file
			}
		},

		/**
		 * AutoPrefixer
		 */
		autoprefixer: {
			prod: {
				src: css.dest.dir + css.dest.file,
				dest: css.dest.dir + css.dest.file
			}
		},




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
			},
			/* Uglify Dev */
			dev: {
				options: {
					mangle: false,
					beautify: true
				},
				src: helper.mapToJSFiles(),
				dest: js.dest.dir + js.dest.file
			},
			/* Uglify Prod */
			prod: {
				options: {
					mangle: true,
					beautify: false
				},
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
					optimizationLevel: 7,
					cache: false
				},
				files: [{
					expand: true,
					cwd: img.src.dir,
					src: img.src.png,
					dest: img.dest.dir,
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
					cwd: img.src.dir,
					src: img.src.jpg,
					dest: img.dest.dir,
					ext: '.jpg'
				}]
			}
		},



		/**
		 *
		 * Dploy Tasks
		 * ================================================
		 *
		 */
		dploy: {
			staging: {
				scheme : '',
				host: '',
				user: '',
				pass: '',
				check: true,
				slots: 2,
				exclude: [
					'.gitignore',
					'Gruntfile.js'
				],
				path: {
					local: '/',
					remote: 'public_html/'
				}
			},
			prod: {
				scheme : '',
				host: '',
				user: '',
				pass: '',
				check: true,
				slots: 2,
				exclude: [
					'.gitignore',
					'Gruntfile.js'
				],
				path: {
					local: '/',
					remote: 'public_html/'
				}
			}
		},



		/**
		 *
		 * Watch Tasks
		 * ================================================
		 *
		 */
		watch: {
			js: {
				files: helper.mapToJSFiles(),
				tasks: 'js'
			},
			css: {
				files: helper.mapToCSSFiles(),
				tasks: 'css'
			},
			sass: {
				files: helper.mapToSCSSFiles(),
				tasks: 'sass:dev'
			}
		}

	});



	/**
	 *
	 * Register Tasks
	 * ================================================
	 *
	 */

	/**
	 * Default
	 */
	grunt.registerTask('default', ['uglify', 'jshint']);

	grunt.registerTask('js', ['uglify', 'jshint']);

	grunt.registerTask('css', ['cssmin']);

	/**
	 * Optimise Images
	 */
	grunt.registerTask('images', ['imagemin']);

	grunt.registerTask('imagepng', ['imagemin:png']);

	grunt.registerTask('imagejpg', ['imagemin:jpg']);

	/**
	 * Development
	 */

	// watch

	// dev

	/**
	 * Staging
	 */
	grunt.registerTask('staging-deploy', ['dploy:staging']);
	// compile test

	/**
	 * Production
	 */
	grunt.registerTask('prod-build', ['imagemin']);

	grunt.registerTask('prod-deploy', ['dploy:prod']);

	// css / sass, lint, min, concat, autoprefix

	// js, lint, min, concat


};
