'use strict';

global.$ = {
    dev: true,
    package: require('./package.json'),
    config: require('./gulp/config'),
    path: {
        task: require('./gulp/paths/tasks.js'),
        jsFoundation: require('./gulp/paths/js.foundation.js'),
        cssFoundation: require('./gulp/paths/css.foundation.js'),
        app: require('./gulp/paths/app.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    merge: require('merge-stream'),
    browserify: require('browserify'),
    source: require('vinyl-source-stream'),
    buffer: require('vinyl-buffer'),
    babel: require('babelify'),
    browserSync: require('browser-sync').create(),
    fs: require('fs'),
    gp: require('gulp-load-plugins')({
        rename: {
            'gulp-replace-task': 'replaceTask'
        }
    })
};

$.path.task.forEach(function (taskPath) {
        require(taskPath)();
    });

$.gulp.task('default',
      $.gulp.series('clean', 
        $.gulp.parallel( 
          'smartgrid',
          'sass',
          'pug',
          'js:foundation',
          'js:lint',
          'js:process',
          'sprite:png',
          'sprite:svg',
          'copy:image',
          'copy:fonts',
          'css:foundation',
          
          
        $.gulp.parallel(
          'watch',
          'serve')
        )
      )
    );
$.gulp.task('build',
  $.gulp.series(
    'sass',
    'pug',
    'js:foundation',
    'js:lint',
    'js:process',
    'sprite:png',
    'sprite:svg',
    'copy:image',
    'copy:fonts',
    'css:foundation',    
    'css:mediagroup',
    'css:combine'
  )
);

$.gulp.task('production',
  $.gulp.series(
    'sass',
    'pug',
    'js:foundation',
    'js:lint',
    'js:process',
    'sprite:png',
    'sprite:svg',
    'copy:image',
    'copy:fonts',
    'css:foundation',
    'css:mediagroup',    
    'css:combine',
    'clean:prod',
    'minify:css',
    'minify:js',
    'copy:prod',
    'copy:files'
  )
);
/*
$
.gulp
.task('default', $.gulp.series('clean', $.gulp.parallel('sass', 'pug', 'js:foundation', 'js:process', 'sprite:png', 'sprite:svg', 'copy:image', 'copy:fonts', 'css:foundation'), $.gulp.parallel('watch', 'serve')));
*/