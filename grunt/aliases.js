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
		'notify:default'
	],

	/**
	 *
	 * Development
	 *
	 */
	js: [
		'uglify:dev'
	],

	watch_js: [
		'watch:js',
		'notify:watch'
	]



};