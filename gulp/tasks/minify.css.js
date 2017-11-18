'use strict';


module.exports = function() {
  let cleanCSS = require('gulp-clean-css');
    $.gulp.task('minify:css', function() {
        
      return $.gulp.src('./build/assets/css/*.css')
      .pipe(cleanCSS({debug: true}, function(details) {
        console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);
      }))
    .pipe($.gulp.dest('./production/assets/css'));
      
      

    })
};