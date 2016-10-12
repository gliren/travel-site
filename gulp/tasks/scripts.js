var gulp = require('gulp'),
    webpack = require('webpack');

gulp.task('runWebPack', function(callback){
  webpack(require('../../webpack.config.js'), function(err, stats){
            // up to gulp/ up to root/to webpack.config
    if(err){
      console.log(err.toString());
    }
    // show if there's an error

    console.log(stats.toString());
    // show detail error message

    callback();
    // so gulp can be certain webpack is completed
  })
});
