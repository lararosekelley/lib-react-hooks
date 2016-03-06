'use strict';

import babel from 'gulp-babel';
import del from 'del';
import gulp from 'gulp';
import install from 'gulp-install';
import jshint from 'gulp-jshint';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import seq from 'run-sequence';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';

/**
* filepaths
*/

const paths = {
    dist: './dist',
    pkgs: [ './bower.json', './package.json' ],
    js: './jquery.kanye-ipsum.js'
};

/**
* clean build directories
*/

gulp.task('clean', () => {
    return del(paths.dist);
});

/**
* install dependencies
*/

gulp.task('install', () => {
    return gulp.src(paths.pkgs)
        .pipe(plumber())
        .pipe(install());
});

/**
* lint code
*/

gulp.task('jshint', () => {
    return gulp.src(paths.js)
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('unix'));
});

/**
* compile & minify code, add timestamp to build output
*/

gulp.task('compile', () => {
    const now = new Date().toUTCString();

    return gulp.src(paths.js)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(uglify({
            preserveComments: 'some'
        }))
        .pipe(sourcemaps.write())
        .pipe(plumber.stop())
        .pipe(rename('jquery.kanye-ipsum.min.js'))
        .pipe(replace('{timestamp}', now))
        .pipe(gulp.dest(paths.dist));
});

/**
* build & watch
*/

gulp.task('build', (cb) => {
    seq('clean', 'install', 'jshint', 'compile', cb);
});

gulp.task('watch', () => {
    gulp.watch(paths.js, ['jshint', 'compile']);
});

gulp.task('default', ['build', 'watch']);
