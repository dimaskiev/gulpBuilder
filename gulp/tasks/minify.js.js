'use strict';


module.exports = function() {
  let minify = require('gulp-minify');
    $.gulp.task('minify:js', function() {
        
      return $.gulp.src('./build/assets/js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        noSource: true
    }))
    .pipe($.gulp.dest('./production/assets/js/'))
      
      

    })
};
