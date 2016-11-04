var gulp = require('gulp'),
    modernizr = require('gulp-modernizr');

gulp.task('modernizr', function(){
                  // all css files
  return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
  // all js files

  .pipe(modernizr({
    "options" : [
      "setClasses"
    ]
  }))
  .pipe(gulp.dest('./app/temp/scripts/'));

});
