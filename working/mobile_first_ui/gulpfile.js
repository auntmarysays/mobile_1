/* eslint-disable */
const gulp = require('gulp');
const config = require('./activity_config');
const taskpath = './node_modules/hucklebuck/gulptasks/';
const tasks = require('require-dir')(taskpath);

gulp.task('langs', tasks.langs(config));

gulp.task('images', [ 'langs' ], tasks.images(config));

gulp.task('sections', [ 'images' ], tasks.sections(config));

gulp.task('indexhtml', [ 'sections' ], tasks.indexhtml(config));

gulp.task('manifest', ['indexhtml'], tasks.manifest(config));

gulp.task('tincan', ['manifest'], tasks.tincan(config));

gulp.task('polyfills', [ 'tincan' ], tasks.polyfills(config));

gulp.task('bundle', [ 'polyfills' ], tasks.bundle(config));

gulp.task('watch', [ 'bundle' ], tasks.watch(config));

gulp.task('browser-sync', [ 'watch' ], tasks.browsersync(config));

gulp.task('default', [ 'browser-sync' ]);

gulp.task('refresh', [ 'bundle' ], tasks.reload);
