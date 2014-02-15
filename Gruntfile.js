/**
 *
 * Gruntfile
 *
 * @link:       https://github.com/beaucharman/grunt-kickstater
 * @author:     Beau Charman | @beaucharman | https://github.com/beaucharman
 * @version:    1 | February 10th 2014
 * @license:    MIT License | http://opensource.org/licenses/MIT
 * ================================================
 *
 * Grunt Configuration (this file)
 *
 *   Gruntfile.js
 *
 * Project and Dependency Information
 *
 *   package.json
 *
 * Task Aliases
 *
 *   grunt/aliases.js
 *
 * Project Paths / Grunt Variables
 *
 *   grunt/vars.js
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
 *   npm install grunt-notify --save-dev
 *   npm install jshint-stylish --save-dev
 *   npm install -D load-grunt-config
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
 *   npm install grunt grunt-autoprefixer grunt-contrib-csslint grunt-contrib-cssmin grunt-contrib-imagemin grunt-contrib-jshint grunt-contrib-sass grunt-contrib-uglify grunt-contrib-watch grunt-dploy grunt-notify jshint-stylish load-grunt-config load-grunt-tasks time-grunt --save-dev
 *   npm install -D load-grunt-config
 *
 * Gem Dependencies:
 *
 *   gem install image_optim
 *
 */

module.exports = function (grunt) {

	'use strict';

	/**
	 * measures the time each task takes
	 */
	require('time-grunt')(grunt);

	/**
	 * load gruntConfig, and loadNpmTasks
	 */
	require('load-grunt-config')(grunt, {

		/* Options for `loadNpmTasks`/`load-grunt-tasks` */
		loadGruntTasks: {
			pattern: ['grunt-*']
		},

		/* Options for `grunt.initConfig` */
		config: {
			vars: require('./grunt/vars.js'),
			pkg: require('./package.json')
		}
	});

};
