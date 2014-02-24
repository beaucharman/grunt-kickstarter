/**
 *
 * Watch Tasks
 *
 * Cntr + Z to stop a watch task
 *
 * nvm install 0.10.17
 *
 */

var helper = require('./vars.js');

module.exports = {

	js: {

		files: helper.js.src.files.map(function (item) {
			return helper.js.src.dir + item;
		}),
		tasks: ['js', 'notify:watch_js'],
		options: {
			spawn: false,
		},
	},

	css: {

		files: helper.css.src.files.map(function (item) {
			return helper.css.src.dir + item;
		}),
		tasks: 'css:dev',
		options: {
			spawn: false,
		},
	},

	sass: {

		files: helper.scss.src.files.map(function (item) {
			return helper.scss.src.dir + item;
		}),
		tasks: 'sass:dev',
		options: {
			spawn: false,
		},
	}

};