'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const mustache = require('gulp-mustache');
const injector = require('gulp-assets-injector')();
const sourcemaps = require('gulp-sourcemaps');

const tempalteContent = require('./content/content');

/**  Copy the source from the modules into our project */
/** elements */
gulp.task('elements:copy:sass', () => {
  return gulp
    .src('./node_modules/govuk-elements-sass/public/sass/**/**.scss')
    .pipe(gulp.dest('./src/sass'));
});

/** toolkit */
gulp.task('toolkit:copy:sass', () => {
  return gulp
    .src('./node_modules/govuk_frontend_toolkit/stylesheets/**/**.scss')
    .pipe(gulp.dest('./src/sass'));
});

gulp.task('toolkit:copy:scripts', () => {
  return gulp
    .src('./node_modules/govuk_frontend_toolkit/javascripts/**.js')
    .pipe(gulp.dest('./src/images'));
});

gulp.task('toolkit:copy:images', () => {
  return gulp
    .src('./node_modules/govuk_frontend_toolkit/images/**')
    .pipe(gulp.dest('./src/images'));
});

/* templates */
gulp.task('template:copy:images', () => {
  return gulp
    .src('./node_modules/govuk-template-sass/src/images/**')
    .pipe(gulp.dest('./src/images'));
});

gulp.task('template:copy:fonts', () => {
  return gulp
    .src('./node_modules/govuk-template-sass/src/fonts/**')
    .pipe(gulp.dest('./src/fonts'));
});

gulp.task('template:copy:sass', () => {
  return gulp
    .src('./node_modules/govuk-template-sass/src/sass/**')
    .pipe(gulp.dest('./src/sass'));
});

/** move our helpers into the src folder */
gulp.task('dxw:copy:sass', () => {
  return gulp
    .src('./dxw-helpers/*.scss')
    .pipe(gulp.dest('./src/sass'));
});

gulp.task('dxw:copy:sass:master',['dxw:copy:sass'], () => {
  return gulp
    .src('./src/sass/master.scss')
    .pipe(rename('govuk-style.scss'))
    .pipe(gulp.dest('./src/sass'));
});

/** build tasks */

/** move all images */
gulp.task('build:images', () => {
  return gulp
    .src('./src/images/**/*.*')
    .pipe(gulp.dest('./dist/assets/images'));
});

/** compile and collect styles */
gulp.task('build:sass', () => {
  return gulp
    .src('./src/sass/govuk-style.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass().on(
        'error',
        sass.logError
      )
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/assets/stylesheets'));   
});

/** Gov UK Template */
gulp.task('html', ['build:collect'], () => {
  return gulp
    .src('./node_modules/govuk_template_mustache/views/layouts/govuk_template.html')
    .pipe(
      mustache(tempalteContent.content())
    )
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:inject', ['html'], () => {
  return gulp
    .src('./dist/index.html')
    .pipe(injector.inject({link: true, filter: () => true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:collect', ['build:sass'], () => {
  return gulp
    .src('./dist/assets/stylesheets/*.css')
    .pipe(injector.collect());
});

gulp.task('build:minify', () => {
  return gulp
    .src('./dist/assets/stylesheets/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/assets/stylesheets'));
});

//** Tasks */
/** 
 * copy module tasks
 * 
 * copy the assets out of the node_modules and into the src folder
*/
gulp.task('copy:elements', ['elements:copy:sass']);
gulp.task('copy:toolkit', ['toolkit:copy:sass', 'toolkit:copy:scripts', 'toolkit:copy:images']);
gulp.task('copy:template', ['template:copy:sass', 'template:copy:images', 'template:copy:fonts']);
// copy all the static assets from the node modules
gulp.task('source:copy', ['copy:elements', 'copy:toolkit', 'copy:template', 'toolkit:copy:images']);
// copy and rename our additions
gulp.task('dxw:copy', ['dxw:copy:sass:master']);

gulp.task('copy', ['dxw:copy', 'source:copy']);

/** 
 * build 
 * 
 * compile the sass inject the css file into the html and copy the images into the dist folder
 * */
gulp.task('build', ['build:sass', 'build:inject', 'build:images']);

/** Default task */
gulp.task('default', ['copy', 'build']);