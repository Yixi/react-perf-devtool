let gulp = require('gulp');
let gutil = require('gulp-util');
let rename = require('gulp-rename');
let clean = require('gulp-clean');
let webpack = require('webpack');
let webpackDevConfig = require('./webpack.dev');

gulp.task('copy:dev', () => {
    gulp.src('./src/chrome/manifest.json')
        .pipe(gulp.dest('./dev'));
});

gulp.task('copy:view', () => {
    gulp.src('./src/chrome/view/*.html')
        .pipe(gulp.dest('./dev'));
});

gulp.task('copy:assets', () => {
    gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./dev'));
});

gulp.task('view:watch', () => {
    gulp.watch('./src/chrome/view/*.html', ['copy:view']);
});

gulp.task('static:watch', () => {
    gulp.watch(['./src/assets/**/*', './src/chrome/manifest.json'], ['copy:dev', 'copy:assets']);
});

gulp.task('webpack:dev', callback => {
    webpack(webpackDevConfig, (err, stats) => {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            colors: true,
            cached: true,
            chunkModules: false
        }));
    });
    callback();
});

gulp.task("build:dev", ["webpack:dev"], function() {
    gulp.watch(["src/**/*.ts"], ["webpack:dev"]);
});

gulp.task('clean:build', () => {
    return gulp.src('./dev').pipe(clean());
});

gulp.task('copy:chrome', ['copy:dev', 'copy:view', 'copy:assets']);

gulp.task('default', ['clean:build'], () => {
    gulp.run(['copy:chrome', 'view:watch', 'webpack:dev']);
});