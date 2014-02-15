/**
 *
 * Task Aliases
 *
 */


module.exports = {

	/**
	 * Default Grunt Task - `grunt`
	 */
	default: [
		'uglify:dev',
		'notify:defualt'
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