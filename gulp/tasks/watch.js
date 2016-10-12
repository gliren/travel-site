var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function(){

    browserSync.init({
       notify: false,
       server:{
           baseDir: "app"
       }
    });

    watch('./app/index.html', function(){

        browserSync.reload();
    });

     watch('./app/assets/styles/**/*.css', function(){
                /* **: any folders in between; *: any files end with .css */

        gulp.start('cssInject');
    });

    watch('./app/assets/scripts/**/*.js', function(){
      gulp.start('scriptsRefresh');
    })

});

                     /* 3. run the styles task first/convert to browser readable code */
gulp.task('cssInject', ['styles'], function(){
    gulp.src('./app/temp/styles/styles.css') /* 1. locate the css file */
    .pipe(browserSync.stream()); /* 2. browsersync it */
});

gulp.task('scriptsRefresh', ['runWebPack'], function(){
  browserSync.reload();
});
