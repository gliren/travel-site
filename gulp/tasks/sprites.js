var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del');

var   config = {
      shape:{
        spacing:{
          padding:1
        }
      },
      mode: {
        css:{
          sprite:'sprite.svg',
          render:{
            css:{
              template: './gulp/templates/sprite.css'
            }
          }
        }
      }
    };

// delete the old combined svg
gulp.task('beginClean', function(){
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

// create combined svg and sprite.css
gulp.task('createSprite', ['beginClean'], function(){

    return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite'));

});


//============transport files to each location============

// c&p, and update the combined svg in images folder
gulp.task('copySpriteGraphic',['createSprite'], function(){

    return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});


// c&p, and update the sprite.css in modules folder
gulp.task('copySpriteCSS', ['createSprite'], function(){

    return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));

});
//==========================

//delete orginal sprite foler (com svg+sprite.css) in temp
gulp.task('endClean', ['copySpriteCSS', 'copySpriteGraphic'], function(){
  return del ('./app/temp/sprite');
});

// run the whole process step by step
gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);
