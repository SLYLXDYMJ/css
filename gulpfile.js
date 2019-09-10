const path = require('path')
const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')

const normalScss = path.resolve(__dirname, './src/normal/index.scss')
const responsiveScss = path.resolve(__dirname, './src/responsive/index.scss')
const miniProgramScss = path.resolve(__dirname, './src/mini-program/index.scss')
const output = './dist'

gulp.task('build', async function () {
  await gulp.src([ normalScss, responsiveScss ])
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss())
    .pipe(gulp.dest(output))
  await gulp.src(miniProgramScss)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss())
    .pipe(rename({ extname: '.wxss' }))
    .pipe(gulp.dest(output))
})