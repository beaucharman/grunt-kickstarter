/**
 *
 * Variables
 *
 */

module.exports = {

		/**
		 *
		 * CSS
		 *
		 */
		css: {
			src: {
				dir: 'library/source/css/',
				files: ['layout.css', 'color.css']
			},
			dest: {
				dir: 'library/css/',
				file: 'main.min.css'
			}
		},



		/**
		 *
		 * SCSS
		 *
		 */
		scss: {
			src: {
				dir: 'library/source/scss/',
				files: ['main.scss', '_layout.css', '_color.css'],
				main: 'main.scss'
			},
			dest: {
				dir: 'library/css/',
				file: 'main.min.css'
			}
		},



		/**
		 *
		 * JavaScripts
		 *
		 */
		js: {
			src: {
				dir: 'library/source/js/',
				files: ['main.js', 'plugins.js']
			},
			dest: {
				dir: 'library/js/',
				file: 'main.min.js'
			}
		},



		/**
		 *
		 * Images
		 *
		 */
		img: {
			src: {
				dir: 'library/images/',
				jpg: ['**/*.jpg', '**/*.jpeg'],
				png: ['**/*.png'],
			},
			dest: {
				dir: 'library/images/'
			}
		}

};
