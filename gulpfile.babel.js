'use strict';

import babel from 'gulp-babel';
import del from 'del';
import gulp from 'gulp';
import install from 'gulp-install';
import jshint from 'gulp-jshint';
import mocha from 'gulp-mocha';
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
    dist: 'dist',
    tmp: 'tmp/*.js',
    pkgs: ['./bower.json', './package.json'],
    js: {
        src: 'jquery.kanye-ipsum.js',
        dist: 'dist'
    },
    test: {
        src: 'test/*.js',
        dist: 'dist/test'
    }
};

/**
* clean build directories
*/

gulp.task('clean', () => {
    return del(paths.dist);
});

gulp.task('clean:tmp', () => {
    return del(paths.tmp);
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
    return gulp.src(paths.js.src.concat(paths.test.src))
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('unix'));
});

/**
* run tests
*/

gulp.task('test', ['compile:src', 'compile:test'], () => {
    return gulp.src(paths.test.dist)
        .pipe(plumber())
        .pipe(mocha({
            reporter: 'dot',
            timeout: 5000,
            ui: 'bdd'
        }));
});

/**
* compile & minify code
*/

gulp.task('compile:src', () => {
    return gulp.src(paths.tmp)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(uglify({
            preserveComments: 'some'
        }))
        .pipe(sourcemaps.write())
        .pipe(plumber.stop())
        .pipe(rename('jquery.kanye-ipsum.min.js'))
        .pipe(gulp.dest(paths.js.dist));
});

gulp.task('compile:test', () => {
    return gulp.src(paths.test.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.test.dist));
});

/**
* Add build timestamp
*/

gulp.task('timestamp', () => {
    const now = new Date().toUTCString();

    return gulp.src(paths.js.src)
        .pipe(plumber())
        .pipe(replace('{timestamp}', now))
        .pipe(gulp.dest(paths.tmp));
});

/**
* build & watch
*/

gulp.task('build', (cb) => {
    seq('clean', 'install', 'jshint', 'timestamp', 'compile:src', 'compile:test', 'clean:tmp', cb);
});

gulp.task('watch', () => {
    gulp.watch(paths.js.src.concat(paths.test.src), ['jshint', 'timestamp', 'compile:src', 'compile:test', 'clean:tmp']);
});

gulp.task('default', ['build', 'watch']);
