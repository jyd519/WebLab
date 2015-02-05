var gulp = require('gulp'),
  gutil = require('gulp-util'),
  // sass = require('gulp-ruby-sass'),
  uglify = require('gulp-uglify'),
  jshint = require('gulp-jshint'),
  watch = require('gulp-watch'),
  concat = require('gulp-concat'),
  del = require('del'),
  notify = require('gulp-notify');
  
var htmlreplace = require('gulp-html-replace');

// sass task
// gulp.task('sass', function() {
//   gulp.src('./assets/styles/**/*.scss')
//     .pipe(sass({
//       noCache: true,
//       style: "expanded",
//       lineNumbers: true,
//       loadPath: './assets/styles/*'
//     }))
//     .pipe(gulp.dest('./assets/styles'))
//     .pipe(notify({
//       message: "You just got super Sassy!"
//     }));
// });

// css task
gulp.task('css', function() {
  gulp.src('./css/*.*')
    .pipe(gulp.dest('./build/css'))
    .pipe(notify({
      message: "CSS task completed"
    }));
});

// uglify task
gulp.task('js', function() {
  // main app js file
  gulp.src('./script/notice.js')
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(concat("notice.min.js"))
    .pipe(gulp.dest('./build/script'))
    .pipe(notify({ message: 'Scripts task complete' }));

  gulp.src('./script/jquery.js')
    .pipe(gulp.dest('./build/script'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('html', function() {
  gulp.src('*.html')
    .pipe(htmlreplace({
        'js': 'script/notice.min.js'
    }))
    .pipe(gulp.dest('build/'))
    .pipe(notify({ message: 'HTML task complete' }));
});

gulp.task('watch', function() {
  // watch css files
  gulp.watch('./css/**/*.*', function() {
    gulp.run('css');
  });

  gulp.watch('./script/**/*.js', function() {
    gulp.run('js');
  });
  gulp.watch('./*.html', function() {
    gulp.run('html');
  });
});

gulp.task('clean', function(cb) {
    del(['build'], cb);
});

gulp.task('default', ['js', 'css', 'html']);


