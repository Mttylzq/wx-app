
'use strict';


var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var compass = require('gulp-compass');

gulp.task('clean',function(){
    del(['./dist'])
});
gulp.task('compass', function() {
    gulp.src(['./src/**/*.scss'])
        .pipe(compass({
            config_file: './config.rb',
            logging:true,
            sass:'src',
            css: './build/temp/css',
            generated_images_path:'./build/temp/images'
        }))
        .pipe(rename({extname: ".wxss"}))
        .pipe(gulp.dest('dist'))
});
gulp.task('wxss', function() {
    gulp.src(['./src/**/*.css','.n/src/**/*.wxss'])
        .pipe(rename({extname: ".wxss"}))
        .pipe(gulp.dest('dist'));
});
gulp.task('wxml', function() {
    gulp.src(['./src/**/*.xml','./src/**/*.wxml','./src/**/*.html'])
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
        './src/**/*.css','./src/**/*.wcss','./src/**/*.scss',
        './src/**/*.xml','./src/**/*.wxml','./src/**/*.html',
        './src/**/*.js',
        './src/**/*.json',
        './src/**/*.png','./src/**/*.img'
    ], ['compass','wxss','wxml','js','json','img']);
})
gulp.task('default',['watch','compass','wxss','wxml','js','json','img']);