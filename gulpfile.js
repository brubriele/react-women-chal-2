var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('public/scss/main.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('public/css'))
});

gulp.task('dev', function () {
    gulp.watch('public/scss/**/*.scss', gulp.series('sass'));
});