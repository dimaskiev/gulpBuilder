'use strict';

module.exports = function() {
  $.gulp.task('clean:prod', function(cb) {
    return $.del('./production', cb);
  });
};

