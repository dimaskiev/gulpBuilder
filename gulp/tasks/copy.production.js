'use strict';

module.exports = function() {
  $.gulp.task('copy:prod', function() {
    return $.gulp.src('./build/assets/img/**/*.{png,gif,jpg,svg}', { since: $.gulp.lastRun('copy:prod') })
      .pipe($.gulp.dest('./production/assets/img'));
  });
};
