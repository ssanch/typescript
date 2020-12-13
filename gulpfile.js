let gulp = require("gulp");
let typeScriptFilesPath = 'js/**/*.ts';

let tsProject;

gulp.task("scripts", function () {
  let ts = require("gulp-typescript");
  let sourcemaps = require('gulp-sourcemaps');
  if (!tsProject) {
    tsProject = ts.createProject("tsconfig.json");
  }

  return gulp.src(typeScriptFilesPath, { base: '.' })
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
  gulp.watch(typeScriptFilesPath, gulp.series(['scripts']));
});
