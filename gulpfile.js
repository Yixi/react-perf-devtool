let gulp = require('gulp');
let rename = require('gulp-rename');
let ts = require('gulp-typescript');
let merge = require('merge2');
let clean = require('gulp-clean');

let tsProject = ts.createProject('./tsconfig.json');

console.log(tsProject.target)

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

gulp.task('ts', () => {
    let backgorund = gulp.src('./src/chrome/background/index.ts').pipe(tsProject());

    return merge([
        backgorund.js
            .pipe((rename('background.bundle.js')))
            .pipe(gulp.dest('./dev/js'))
    ]);

});


gulp.task('watch:ts', ['ts'], function() {
    gulp.watch('./src/**/*.ts', ['ts']);
});

gulp.task('clean:build', () => {
    gulp.src('./dev/**/*').pipe(clean());
});

gulp.task('copy:chrome', ['copy:dev', 'copy:view', 'copy:assets']);

gulp.task('default', ['clean:build' ,'copy:chrome', 'view:watch', 'watch:ts']);