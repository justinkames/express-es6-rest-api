'use strict';

import gulp from 'gulp';
import mocha from 'gulp-mocha';
import gutil from 'gulp-util';

gulp.task('mocha', () => {
	return gulp.src(['lib/test/**/*.js'], {read:false})
	.pipe(mocha({reporter: 'list'}))
	.on('error', gutil.log);
});

gulp.task('watch-mocha', ['mocha'], () => {
	gulp.watch(['lib/test/**/*.js'], ['mocha']);
});
