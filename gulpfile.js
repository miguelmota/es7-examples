require('babel-register')();
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('compile', function() {
  return gulp.src('index.js')
    .pipe(babel({
      plugins: [
        'transform-decorators-legacy'
      ]
    }))
    .pipe(gulp.dest('dist'));
});
