let gulp = require('gulp');
let mocha = require('gulp-mocha');
let gutil = require('gulp-util');

gulp.task('mocha', () => {
	return gulp.src(['lib/test/**/*.js'], {read:false})
	.pipe(mocha({reporter: 'list'}))
	.on('error', gutil.log);
});

gulp.task('watch-mocha', ['mocha'], () => {
	gulp.watch(['lib/test/**/*.js'], ['mocha']);
});
