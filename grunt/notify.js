/**
 *
 * Nofify
 *
 */

module.exports = {

	default: {

		options: {

			title: 'Grunt :: Task Complete', // optional
			message: 'Grunt finished running successfully', //required
		}
	},

	js: {

		options: {

			title: 'Grunt JS :: Task Complete', // optional
			message: 'Uglify and JSHint finished running successfully', //required
		}
	},

	css: {

		options: {

			title: 'Grunt CSS :: Task Complete', // optional
			message: 'CSSLint and CSSMin finished running successfully', //required
		}
	},

	staging_setup: {

		options: {

			title: 'Grunt Staging Setup :: Task Complete', // optional
			message: 'Staging is ready for deployment', //required
		}
	},

	staging_deploy: {

		options: {

			title: 'Grunt Staging Deploy :: Task Complete', // optional
			message: 'Grunt successfully deployed to staging!', //required
		}
	},

	prod_setup: {

		options: {

			title: 'Grunt Production Setup :: Task Complete', // optional
			message: 'Production is ready for deployment', //required
		}
	},

	prod_deploy: {

		options: {

			title: 'Grunt Production Deploy :: task complete', // optional
			message: 'Grunt successfully deployed to production!', //required
		}
	}

};