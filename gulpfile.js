const path = require('path');

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');

const connect = require('gulp-connect');

// connect 配置
const SERVER_CONFIG = {
  root: __dirname,
  port: 8888,
  livereload: true,
}
// style 主文件
const SCSS_MAIN_FILES = [
  path.resolve(__dirname, 'src/jason-fixed.scss'),
  path.resolve(__dirname, 'src/jason-responsive.scss')
];
// 所有 style 文件
const SCSS_ALL_FILES = path.resolve(__dirname, 'src/**/*.scss');
// 输出目录
const OUTPUT = path.resolve(__dirname, 'dist');

// 开发模式
gulp.task('dev', ['build', 'connect', 'watch']);
// 打包
gulp.task('build', function () {
  gulp.src(SCSS_MAIN_FILES)
    .pipe(sass())
      .on('error', function (error) {
        console.log(error);
      })
    .pipe(postcss())
    .pipe(gulp.dest(OUTPUT));
});
// 开启本地服务器
gulp.task('connect', function () {
  connect.server(SERVER_CONFIG);
});
// 监听文件变化自动打包
gulp.task('watch', function () {
  gulp.watch(SCSS_ALL_FILES, ['build']);
});