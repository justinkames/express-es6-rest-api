'use strict';

import gulp from 'gulp';
import mocha from 'gulp-mocha';
import istanbul from 'gulp-istanbul';

const babel = require('gulp-babel');
const isparta = require('isparta');

gulp.task('pre-coverage', () => {
	return gulp.src(['lib/**/*.js'])
	// babel
	.pipe(babel({
		presets: ['es2015']
	}))
	// Covering files
	.pipe(istanbul({
		instrumenter: isparta.Instrumenter,
		includeUntested: true
	}))
	// Force `require` to return covered files
	.pipe(istanbul.hookRequire());
});

gulp.task('coverage-report', ['pre-coverage'], () => {
	return gulp.src(['lib/test/**/*.js'])
	// babel
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(mocha())
	// Creating the reports after tests ran
	.pipe(istanbul.writeReports({
		dir: './coverage',
		reporters: [ 'text-summary', 'text', 'json' ]
	}))
	// Enforce a coverage of at least 90%
	.pipe(istanbul.enforceThresholds({ thresholds: { global: 10 } }));
});
