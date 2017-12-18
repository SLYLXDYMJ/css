// 依赖导入
const gulp=require('gulp');
const $=require('gulp-load-plugins')();

// 本地服务器选项
const connectOptions={
  root:'./',
  port:8888,
};

// 各个文件
const files={
	scss: [
		'./src/scss/jason-fixed.scss',
		'./src/scss/jason-responsive.scss'
	],
  js: './src/js/*.js',
};

// 输出路径
const exportPath={
	distCss:    './dist/css',
  distJs:     './dist/js',
};

gulp.task('build',['style','script'],function () {
  console.log(showTime('build'));
});

gulp.task('style',function(){
  gulp.src(files.scss)
    .pipe($.plumber())
    .pipe($.sass({
      outputStyle: 'expanded'
    }))
    .pipe($.postcss([
      require('autoprefixer')({browsers: ['>=5%']})
    ]))
    .pipe(gulp.dest(exportPath.distCss))
    .pipe($.postcss([
      require('cssnano')()
    ]))
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(exportPath.distCss));

  console.log(showTime('style'));
});

gulp.task('script',function(){
  gulp.src(files.js)
    .pipe($.plumber())
    .pipe($.order([
      'jason.js',
      '*.js'
    ]))
    .pipe($.concat('jason.js'))
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(exportPath.distJs))

  console.log(showTime('script'));
});

gulp.task('dev',['build','connect','watch']);

gulp.task('connect',function(){
  $.connect.server(connectOptions);

  console.log(showTime('server'));
});

gulp.task('watch',function(){
  gulp.watch('./src/**/*.scss',['style']);
  gulp.watch('./src/**/*.js',['script']);

  console.log(showTime('watch'));
});

// 用于显示时间
function showTime(fun){
  let time = new Date();
  return `功能：${fun}\n时间：${time.getHours()}:${time.getMinutes()}:${time.getUTCSeconds()}`
}