var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var uncss = require('gulp-uncss');
var rev = require('gulp-rev-append');
var	uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var csso = require('gulp-csso');
var wiredep = require('wiredep').stream;

//server connect (root: '',)
gulp.task('connect', function() {
  connect.server({
  root: 'public',
  livereload: true
  });
});

//css
gulp.task('css', function() {
 gulp.src('assets/css/*.css')
  .pipe(concatCss('allCss.css'))
  .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 5%', 'IE 7'],
            cascade: false
        }))
  .pipe(csso())
  .pipe(rename('allCss.min.css'))
  .pipe(gulp.dest('public/'))
  .pipe(connect.reload());

});

// js
gulp.task('js', function () {
  gulp.src(['assets/js/*.js'])
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/'))
  .pipe(connect.reload());
});

//html
gulp.task('html', function () {
  gulp.src('public/index.html')
    .pipe(connect.reload());
});

// Кеширование
gulp.task('rev', function() {
  gulp.src('public/index.html')
    .pipe(rev())
    .pipe(gulp.dest('public/'))
    .pipe(connect.reload());
});

// //wiredep bower, 
// gulp.task('bower', function () {
//   gulp.src('./public/index.html')
//     .pipe(wiredep({
//       directory : "assets/bower_components"
//     }))
//     .pipe(gulp.dest('./public'));
// });

//watch
gulp.task('watch', function() {
	gulp.watch('assets/css/*.css', ['css'])
	gulp.watch('assets/js/*.js', ['js'])
	gulp.watch('index.html', ['html'])
});

//default
gulp.task('default', ['connect', 'html', 'css', 'rev', 'js', 'watch']);