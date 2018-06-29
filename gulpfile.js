const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');

const index = './src/index.scss';
const output = './dist';

gulp.task('build:sass', () => {
  gulp.src(index)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss())
    .pipe(gulp.dest(output));
});
