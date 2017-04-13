let gulp = require('gulp');
let rename = require('gulp-rename');


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

gulp.task('copy:chrome', ['copy:dev', 'copy:view', 'copy:assets']);

gulp.task('default', ['copy:chrome', 'view:watch']);