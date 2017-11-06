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
  shelf: './src/shelf/**/*' 
};

// 输出路径
const exportPath={
  distShelf:  './dist/shelf',
	distCss:    './dist/css',
  distJs:     './dist/js',
  shelfCss:   './dist/shelf/plugins/jason/css',
  shelfJs:    './dist/shelf/plugins/jason/js'
};

gulp.task('build',['shelf','style','script'],function () {
  console.log(showTime('build'));
});

gulp.task('shelf',function(){
  gulp.src(files.shelf)
    .pipe(gulp.dest(exportPath.distShelf));

  console.log(showTime('shelf'));
});

gulp.task('style',function(){
  gulp.src(files.scss)
    .pipe($.plumber())
    .pipe($.sass())
    .pipe($.postcss([
      require('autoprefixer')({browsers: ['>=5%']})
    ]))
    .pipe(gulp.dest(exportPath.distCss))
    .pipe($.minifyCss())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(exportPath.distCss))
    .pipe(gulp.dest(exportPath.shelfCss));

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
    .pipe(gulp.dest(exportPath.distJs))
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(exportPath.distJs))
    .pipe(gulp.dest(exportPath.shelfJs));

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