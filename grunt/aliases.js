/**
 *
 * Task Aliases
 *
 * Work in progress...
 *
 */

module.exports = {

	/**
	 *
	 * Default Grunt Task - `grunt`
	 *
	 */
	default: [
		'uglify:dev',
		'jshint',
		'sass:dev',
		// 'csslint',
		// 'cssmin',
		'autoprefixer:prod',
		'notify'
	],



	/**
	 *
	 * Development
	 *
	 */

	js: [
		'uglify:dev',
		'jshint',
		'notify:js'
	],

	css: [
		'csslint',
		'cssmin',
		'notify:css'
	],

	scss: [
		'sass:dev',
		'notify:scss'
	],

	watch_project: [
		'watch_js',
		'watch_sass'
	],

	watch_js: [
		'watch:js',
		'notify:js'
	],

	watch_css: [
		'watch:js',
		'notify:css'
	],

	watch_sass: [
		'watch:sass',
		'notify:sass'
	],



	/**
	 *
	 *	Staging
	 *
	 */

	staging_setup: [
		'sass:dev',
		// 'csslint',
		// 'cssmin',
		'autoprefixer:prod',
		'uglify:dev',
		'notify'
	],

	staging_deploy: [
		'dploy:staging',
		'notify'
	],



	/**
	 *
	 *	Production
	 *
	 */

	// imagemin

	prod_setup: [
		'sass:prod',
		// 'csslint',
		// 'cssmin',
		'autoprefixer:prod',
		'uglify:prod',
		'notify'
	],

	prod_deploy: [
		'dploy:prod',
		'notify'
	]


};