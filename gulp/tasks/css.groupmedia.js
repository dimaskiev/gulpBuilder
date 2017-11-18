'use strict';

module.exports = function() {
  const gcmq = require('gulp-group-css-media-queries');
    $.gulp.task('css:mediagroup', function() {        
      return $.gulp.src('./build/assets/css/*.css')
      .pipe(gcmq())
      .pipe($.gulp.dest('./build/assets/css'));  
      

    })
};
/*
'use strict';

module.exports = function() {
  const cmq = require('gulp-combine-media-queries');
    $.gulp.task('css:mediagroup', function() {        
      return $.gulp.src('./build/assets/css/app.css')
      .pipe(cmq({
        log: false
      }))
      .pipe($.gulp.dest('./build/assets/css'));     

    })
};*/