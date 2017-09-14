// gulp
let gulp=require('gulp');
// 重命名
let rename=require('gulp-rename');
// js编译错误提示
let jsHint=require('gulp-jshint');
// JS代码合并
let jsConcat=require('gulp-concat');
// JS代码压缩
let jsCompress=require('gulp-uglify');
// CSS代码压缩
let cssCompress=require('gulp-cssnano');
// Less编译
let less=require('gulp-less');
// 给src中的文件排序
let order=require('gulp-order');

gulp.task('default',['css','js','watch']);

// LESS编译生成，压缩
gulp.task('css',function(){
  gulp.src('less/jason-*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'))
    .pipe(cssCompress())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'));
});

// JS整合，压缩
gulp.task('js',function(){
  gulp.src('js/*.js')
    .pipe(order([
      'haveJq.js',
      '$win.js',
      '*.js'
    ]))
    .pipe(jsConcat('jason.js'))
    .pipe(jsHint())
    .pipe(jsHint.reporter('jshint-stylish'))
    .pipe(gulp.dest('dist/js'))
    .pipe(jsCompress())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'));
});

// 监听
gulp.task('watch',function(){
  gulp.watch('less/*.less',['css']);
  gulp.watch('less/mixin/*.less',['css']);
  gulp.watch('js/*.js',['js']);
});
