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
	less:[
		'./src/less/jason-fixed.less',
		'./src/less/jason-responsive.less'
	],
	js:'./src/js/*.js'
};

// 输出路径
const exportPath={
	distCss:'./dist/css',
	distJs:'./dist/js'
};

gulp.task('build',['less','js'],function () {
  console.log('========== 构建成功 ==========');
});

gulp.task('less',function(){
  gulp.src(files.less)
    .pipe($.plumber())
    .pipe($.less())
    .pipe($.autoprefixer({
      browsers:'>0%',
      cascade:true
    }))
    .pipe(gulp.dest(exportPath.distCss))
    .pipe($.minifyCss())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(exportPath.distCss));
});

gulp.task('js',function(){
  gulp.src(files.js)
    .pipe($.plumber())
    .pipe($.jshint())
    .pipe($.order([
      'jason.haveJq.js',
      'jason.win.js',
      '*.js'
    ]))
    .pipe($.concat('jason.js'))
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(exportPath.distJs))
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(exportPath.distJs));
});

gulp.task('dev',['build','connect','watch']);

gulp.task('connect',function(){
  $.connect.server(connectOptions);
});

gulp.task('watch',function(){
  gulp.watch('./src/**/*.less',['less']);
  gulp.watch('./src/**/*.js',['js']);
});