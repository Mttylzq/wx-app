
'use strict';


var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var sass = require('gulp-sass')

gulp.task('clean',function(){
    del(['./dist'])
});
gulp.task('wxss', function() {
    gulp.src(['./src/**/*.css','./src/**/*.wxss'])
        .pipe(rename({extname: ".wxss"}))
        .pipe(gulp.dest('dist'));
});
gulp.task('wxml', function() {
    gulp.src(['./src/**/*.xml','./src/**/*.wxml'])
        .pipe(rename({extname: ".wxml"}))
        .pipe(gulp.dest('dist'));
});
gulp.task('js', function() {
    gulp.src(['./src/**/*.js'])
        .pipe(gulp.dest('dist'));
});
gulp.task('json', function() {
    gulp.src(['./src/**/*.json'])
        .pipe(gulp.dest('dist'));
});
gulp.task('img', function() {
    gulp.src(['./src/**/*.png','./src/**/*.img'])
        .pipe(gulp.dest('dist'));
});

gulp.task('watch',function() {
    gulp.watch([
        './src/**/*.css','./src/**/*.wcss',
        './src/**/*.xml','./src/**/*.wxml',
        './src/**/*.js',
        './src/**/*.json',
        './src/**/*.png','./src/**/*.img'
    ], ['wxss','wxml','js','json','img']);
})
gulp.task('default',['watch','wxss','wxml','js','json','img']);