/**
 *
 * Dploy
 *
 */

 var vars = require('./vars.js');

module.exports = {

	staging: {
		scheme : '',
		host: '',
		user: '',
		pass: '',
		check: true,
		slots: 3,
		exclude: [
			'.gitignore',
			'Gruntfile.js',
			'grunt_tasks/**'
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
		slots: 3,
		exclude: [
			'.gitignore',
			'Gruntfile.js',
			'grunt_tasks/**'
		],
		path: {
			local: '/',
			remote: 'public_html/'
		}
	}

};