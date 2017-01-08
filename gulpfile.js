var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

var javaScriptSources = [
  // 'bower_components/angular/angular.js',
  // 'bower_components/angular-sanitize/angular-sanitize.js',
  // 'bower_components/angular-animate/angular-animate.js',
  // 'bower_components/checklist-model/checklist-model.js',
  // 'bower_components/angular-route/angular-route.js',
  'bower_components/jquery/dist/jquery.js',
  'bower_components/bootstrap/dist/js/bootstrap.min.js'
  // 'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
  // 'bower_components/angular-data-table/release/dataTable.js',
  // 'bower_components/ng-csv/build/ng-csv.js',
  // 'bower_components/ngstorage/ngStorage.js',
  // 'client/lib/js/**/*.js'
];

gulp.task('concatJavascript', function() {
  return gulp.src(javaScriptSources)
    .pipe(concat('bundle.js'))
    .pipe(gup.dest('./client/dist/js'));
});

gulp.task('concatAndMinifyJavascript', function() {
  return gulp.src(javaScriptSources)
    .pipe(babel({
      presets : ['es2015']
    }))
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./client/dist/js'));
});

gulp.task('moveTemplates', function() {
  return gulp.src([
    './client/html/*.html'
  ])
  .pipe(gulp.dest('./client/dist/html'));
});

gulp.task('default', ['concatAndMinifyJavascript', 'moveTemplates']);