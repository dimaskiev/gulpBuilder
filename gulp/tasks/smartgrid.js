'use strict';

module.exports = function() {
  const smartgrid = require('smart-grid');
  const settings = {
    filename: "mediagrid",
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '10px', /* gutter width px || % */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        //fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1200px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '992px'
        },
        sm: {
            width: '780px',
           // fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '576px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};
  $.gulp.task('smartgrid', function() {
    return smartgrid('./source/style/common', settings);
  });
};
