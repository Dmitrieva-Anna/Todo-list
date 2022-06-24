const gulp = require('gulp');
const fileinclude = require('gulp-file-include');

// компиляция HTML
module.exports = function html2html(cb) {
    return gulp.src('src/templatesHTML/*html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('build'))
};
