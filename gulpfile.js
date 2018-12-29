const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');

const normalScss = path.resolve(__dirname, './src/normal.scss');
const responsiveScss = path.resolve(__dirname, './src/responsive.scss');
const output = './dist';

gulp.task('build', function () {
  return gulp.src([ normalScss, responsiveScss ])
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss())
    .pipe(gulp.dest(output));
});