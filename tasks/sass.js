const gulp = require( 'gulp' );
const sass = require('gulp-sass')(require('sass'));

var sass_task = function() {
  'use strict';

  return gulp.src( './src/resources/scss/**/*.scss' )
    .pipe( sass().on( 'error', sass.logError ) )
    .pipe( gulp.dest( './src/resources/css' ) );
};

gulp.task( 'sass', sass_task );

var sass_task_volt = function() {
  'use strict';

  return gulp.src( './Volt_Vectors/resources/scss/**/*.scss' )
    .pipe( sass().on( 'error', sass.logError ) )
    .pipe( gulp.dest( './Volt_Vectors/resources/css' ) );
};

gulp.task( 'sass-volt', sass_task_volt );


var sass_task_volt_pro = function() {
  'use strict';

  return gulp.src( './Volt_Vectors_Pro/resources/scss/**/*.scss' )
    .pipe( sass().on( 'error', sass.logError ) )
    .pipe( gulp.dest( './Volt_Vectors_Pro/resources/css' ) );
};

gulp.task( 'sass-volt-pro', sass_task_volt_pro );

module.exports = {
	sass_task,
	sass_task_volt,
	sass_task_volt_pro
}
