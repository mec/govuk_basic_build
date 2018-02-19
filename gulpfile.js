'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const mustache = require('gulp-mustache');
const sourcemaps = require('gulp-sourcemaps');

/**  Copy the source from the modules into our project */

/** govuk-elements-sass */
gulp.task('elements:copy:sass', () => {
  return gulp
    .src('./node_modules/govuk-elements-sass/public/sass/**/**.scss')
    .pipe(gulp.dest('./src/govuk/sass'));
});

/** govuk_frontend_toolkit */
gulp.task('toolkit:copy:sass', () => {
  return gulp
    .src('./node_modules/govuk_frontend_toolkit/stylesheets/**/**.scss')
    .pipe(gulp.dest('./src/govuk/sass'));
});

gulp.task('toolkit:copy:scripts', () => {
  return gulp
    .src('./node_modules/govuk_frontend_toolkit/javascripts/**/*.js')
    .pipe(gulp.dest('./src/govuk/javascripts'));
});

gulp.task('toolkit:copy:images', () => {
  return gulp
    .src('./node_modules/govuk_frontend_toolkit/images/**')
    .pipe(gulp.dest('./src/govuk/images'));
});

/* govuk-template-sass */
gulp.task('template:copy:images', () => {
  return gulp
    .src('./node_modules/govuk-template-sass/src/images/**')
    .pipe(gulp.dest('./src/govuk/images'));
});

gulp.task('template:copy:fonts', () => {
  return gulp
    .src('./node_modules/govuk-template-sass/src/fonts/**')
    .pipe(gulp.dest('./src/govuk/fonts'));
});

gulp.task('template:copy:sass', () => {
  return gulp
    .src('./node_modules/govuk-template-sass/src/sass/**')
    .pipe(gulp.dest('./src/govuk/sass'));
});

/** 
 * copy scripts 
 * 
 * we copy the precompiled scripts from the mustache template as we don't want to have to use the ruby compiler in govuk_template, this is the only dependancy for govuk_template_mustache
 * 
 * govuk_template_mustache
 * */
gulp.task('template:copy:scripts', () => {
  return gulp
    .src('./node_modules/govuk_template_mustache/assets/javascripts/**')
    .pipe(gulp.dest('./src/govuk/javascripts'));
});

/** build tasks */

/** move all images */
gulp.task('build:govuk:images', () => {
  return gulp.src('./src/govuk/images/**/*.*').pipe(gulp.dest('./dist/assets/images'));
});

/** move all scipts */
gulp.task('build:govuk:scripts', () => {
  return gulp.src('./src/govuk/javascripts/**/*.*').pipe(gulp.dest('./dist/assets/javascripts'));
});

/** move all the font files */
gulp.task('build:govuk:fonts', () => {
  return gulp.src('./src/govuk/fonts/**/*.*').pipe(gulp.dest('./dist/assets/fonts'));
});

/** compile styles from custom */
gulp.task('build:sass', () => {
  return gulp
    .src([
      './src/custom/sass/fonts-ie8.scss',
      './src/custom/sass/govuk-style.scss',
      './src/custom/sass/govuk-style-print.scss',
      './src/custom/sass/govuk-style-ie8.scss'
    ])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/assets/stylesheets'));
});

/** compile styles from govuk, only fonts */
gulp.task('build:sass:fonts', () => {
  return gulp
    .src(['./src/govuk/sass/fonts.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/stylesheets'));
});

/** copy the custom html to the dist folder */
gulp.task('build:html', () => {
  return gulp
    .src('./src/custom/index.html')
    .pipe(gulp.dest('./dist'));
});

//** Tasks */
/**
 * copy module tasks
 *
 * copy the assets out of the node_modules and into the src folder
 */
gulp.task('copy:elements', ['elements:copy:sass']);
gulp.task('copy:toolkit', ['toolkit:copy:sass', 'toolkit:copy:scripts', 'toolkit:copy:images']);
gulp.task('copy:template', [
  'template:copy:sass',
  'template:copy:images',
  'template:copy:fonts',
  'template:copy:scripts'
]);
// copy all the static assets from the node modules
gulp.task('source:copy', ['copy:elements', 'copy:toolkit', 'copy:template']);
// main copy task
gulp.task('copy', ['source:copy']);

/**
 * build
 *
 * compile the sass and copy the assets into the dist folder
 * */
gulp.task('build', [
  'build:sass',
  'build:sass:fonts',
  'build:html',
  'build:govuk:images',
  'build:govuk:fonts',
  'build:govuk:scripts'
]);
