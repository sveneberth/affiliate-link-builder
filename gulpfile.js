// Variables and requirements

const gulp = require('gulp');
const VIUR = {
	css: require('viur-ignite-css'),
	icons: require('viur-ignite-icons')
}

var srcpaths = {
	less: './sources/less/**/*.less'
};

// Tasks

// compilation and postproduction of LESS to CSS
gulp.task('css', function () {
	return VIUR.css.build({
		dest: './static/css/'
	})
});


// build icon classes
gulp.task('icons', function () {
	return VIUR.icons.build()
});

// create source folder with prototype style.less
// create source folder with prototype app.js
// create source folder with icons
gulp.task('init', function () {
	VIUR.css.init();
	VIUR.icons.init();
});

// watch tasks
gulp.task('watch', function () {
	gulp.watch(srcpaths.less, ['css']);
});

// default rendering
gulp.task('default', ['css']);
