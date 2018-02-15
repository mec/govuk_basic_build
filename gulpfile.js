'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const mustache = require('gulp-mustache');
const injector = require('gulp-assets-injector')();

/** Gov UK Frontend toolkit */
gulp.task('toolkit', () => {
  return gulp
    .src('./src/sass/main.scss')
    .pipe(
      sass({ includePaths: ['./node_modules/govuk_frontend_toolkit/stylesheets', './node_modules/govuk_template_mustache/assets/stylesheets'] }).on(
        'error',
        sass.logError
      )
    )
    .pipe(gulp.dest('./dist/assets/stylesheets'));
});

gulp.task('collect', ['toolkit'], () => {
  return gulp
    .src('./dist/assets/stylesheets/main.css')
    .pipe(injector.collect());
});


/** Gov UK Template */
gulp.task('html', ['collect'], () => {
  return gulp
    .src('./node_modules/govuk_template_mustache/views/layouts/govuk_template.html')
    .pipe(
      mustache({
        topOfPage: '<!-- topOfPage -->',
        htmlLang: 'en',
        assetPath: './assets/',
        pageTitle: 'Title',
        head: '<!-- head -->',
        bodyClasses: 'bodyClasses',
        bodyStart: '<!-- bodyStart -->',
        skipLinkMessage: 'skipLinkMessage',
        cookieMessage: '<p>GOV.UK uses cookies to make the site simpler. <a href="https://www.gov.uk/help/cookies">Find out more about cookies</a></p>',
        headerClass: 'headerClass',
        homepageUrl: 'https://gov.uk',
        logoLinkTitle: 'logoLinkTitle',
        globalHeaderText: 'GOV.UK',
        insideHeader: '<!-- insideHeader -->',
        propositionHeader: '<!-- propositionHeader -->',
        afterHeader: '<!-- afterHeader -->',
        content: '<div class="wrapper" id="wrapper"><main id="main" role="main" class="content">Content</main></div>',
        footerTop: '<!-- footerTop -->',
        footerSupportLinks: 'footerSupportLinks',
        licenceMessage: '<p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated</p>',
        crownCopyrightMessage: '© Crown copyright',
        bodyEnd: '<!-- BodyEnd -->'
      })
    )
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('inject', ['html'], () => {
  return gulp
    .src('./dist/index.html')
    .pipe(injector.inject({link: true, filter: (htmlPath, assetPath) => true }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('fonts', () => {
  return gulp
    .src('./node_modules/govuk_template_mustache/assets/stylesheets/fonts/**.eot')
    .pipe(gulp.dest('./dist/assets/stylesheets/fonts'));
});

gulp.task('css', () => {
  return gulp
    .src('./node_modules/govuk_template_mustache/assets/stylesheets/**.css')
    .pipe(gulp.dest('./dist/assets/stylesheets'));
});

gulp.task('js', () => {
  return gulp
    .src('./node_modules/govuk_template_mustache/assets/javascripts/**.js')
    .pipe(gulp.dest('./dist/assets/javascripts'));
});

gulp.task('images', () => {
  return gulp
    .src('./node_modules/govuk_template_mustache/assets/images/**.*')
    .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('stylesheetImages', function() {
  return gulp
    .src('./node_modules/govuk_template_mustache/assets/stylesheets/images/**.*')
    .pipe(gulp.dest('./dist/assets/stylesheets/images'));
});

//** Helpers */
gulp.task('default', ['inject', 'images', 'stylesheetImages', 'css', 'js', 'fonts']);
