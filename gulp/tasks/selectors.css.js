'use strict';
   
   module.exports = function() {
    const fs = require('fs');
    const postcss = require('postcss');
    const css = fs.readFileSync('./build/assets/css/app.css');
       $.gulp.task('css:combine', function() {        
         return postcss([require('postcss-combine-duplicated-selectors')])
         .process(css, {from: './build/assets/css/app.css', to: './build/assets/css/app.css'})
         .then((result) => {
          fs.writeFileSync('./build/assets/css/app.css', result.css);
          if (result.map) fs.writeFileSync('./build/assets/css/app.css.map', result.map);
        });
   
       })
   };