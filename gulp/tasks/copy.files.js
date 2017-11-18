'use strict';

module.exports = function() {
  $.gulp.task('copy:files', function() {
    return $.gulp.src('./build/*.*', { since: $.gulp.lastRun('copy:files') })
      .pipe($.gulp.dest('./production/'));
  });
};
