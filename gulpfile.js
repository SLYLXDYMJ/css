const path = require('path');

const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const eslint = require('gulp-eslint');
const uglify = require("gulp-uglify");
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

// connect 配置
const SERVERCONFIG = {
  root: __dirname,
  port: 8888,
  livereload: true,
}
// style 主文件
const FILE_MAIN_STYLE = [
  path.resolve(__dirname, 'src/scss/jason-fixed.scss'),
  path.resolve(__dirname, 'src/scss/jason-responsive.scss')
];
// 所有 style 文件
const FILE_STYLES = path.resolve(__dirname, 'src/scss/**/*.scss');
// js 主文件
const FILE_MAIN_SCRIPT = path.resolve(__dirname, 'src/script/jason.js');
// 所有 js 文件
const FILE_SCRIPTS = path.resolve(__dirname, 'src/script/**/*.js');
// 输出目录
const OUTPUT = path.resolve(__dirname, 'dist');

gulp.task('build', ['style', 'script']);
gulp.task('dev', ['build', 'connect', 'watch']);

gulp.task('style', function () {
  gulp.src(FILE_MAIN_STYLE)
    .pipe(sass())
      .on('error', function (error) {
        console.log(error);
      })
    .pipe(postcss())
    .pipe(gulp.dest(OUTPUT));
});
gulp.task('script', ['eslint'], function () {
  // eslint 检查
  return browserify(FILE_MAIN_SCRIPT, {standalone: 'jason'})
    .transform('babelify')
    .bundle()
      .on('error', function (err) {
        console.log('JS报错：' + err.message);
        this.emit('end');
      })
    .pipe(source('jason.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(OUTPUT))
});
gulp.task('eslint', function () {
  gulp.src(FILE_SCRIPTS)
    .pipe(eslint())
    .pipe(eslint.format());
});
gulp.task('connect', function () {
  connect.server(SERVERCONFIG);
});
gulp.task('watch', function () {
  gulp.watch(FILE_SCRIPTS, ['script']);
  gulp.watch(FILE_STYLES, ['style']);
});