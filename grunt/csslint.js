/**
 * CSS Lint
 */

module.exports = {

	strictCSS: {
		options: {
			ids: true
		},
		src: '<%= vars.helper.mapToCSSFiles() %>'
	}

};