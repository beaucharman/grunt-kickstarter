/**
 * CSS Lint
 */

var helper = require('./vars.js');

module.exports = {

	strictCSS: {

		options: {
			ids: true
		},

		src: helper.css.src.files.map(function (item) {
			return helper.css.src.dir + item;
		})
	}

};