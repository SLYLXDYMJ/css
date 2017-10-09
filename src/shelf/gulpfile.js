const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const path = {
  script:__dirname+'/script',
  style:__dirname+'/style',
  plugins:__dirname+'/plugins'
}

// 开发者模式
gulp.task('dev',['build','server','watch']);

// 打包
gulp.task('build',['style','script'],build);

// 样式编译
gulp.task('style',function(){
  gulp.src(path.style+'/import.less')
    .pipe($.plumber())
    .pipe($.less())
    .pipe($.autoprefixer({
      browsers:['>= 5%']
    }))
    .pipe($.cleanCss())
    .pipe(gulp.dest(path.style));

  console.log(showTime('style'));
  
});

// 逻辑编译
gulp.task('script',function(){
  gulp.src(path.script+'/main.js')
    .pipe($.plumber())
    .pipe($.jshint())
    .pipe($.jshint.reporter("default"))
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(path.script));

  console.log(showTime('script'));

});

// 开启本地服务器
gulp.task('server',function(){

  $.connect.server({
    root: './',
    port: 8888
  })

  console.log(showTime('server'));

});

// 监听
gulp.task('watch',function(){

  gulp.watch(path.script+'/main.js',['script']);
  gulp.watch(path.style+'/*.less',['style']);
  $.watch('plugins/**/*.*',build);

  console.log(showTime('watch'));

});

// 打包函数，因为 gulp-watch 无法 调用task
function build(){
  gulp.src([path.plugins+'/**/*.css',path.plugins+'/**/*.less'])
    .pipe($.less())
    .pipe($.concat('bundle.css'))
    .pipe($.autoprefixer({
      browsers:['>= 5%']
    }))
    .pipe($.cleanCss())
    .pipe(gulp.dest(path.style));

  gulp.src(path.plugins+'/**/*.js')
    .pipe($.order([
      '*/jquery.js',
      '*/jason.min.js',
      '*/*.js'
    ]))
    .pipe($.concat('bundle.js'))
    .pipe(gulp.dest(path.script));
  console.log(showTime('build'));
}

// 用于显示时间
function showTime(fun){
  let time = new Date();
  return `功能：${fun}\n时间：${time.getHours()}:${time.getMinutes()}:${time.getUTCSeconds()}`
}