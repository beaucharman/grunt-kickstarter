module.exports = {

	/**
	 * Default Grunt Task - `grunt`
	 */
	default: [
		'uglify:dev',
		'notify:defualt'
	],

	js: [
		'uglify:dev'
	],

	watch_js: [
		'watch:js',
		'notify:watch'
	]

};