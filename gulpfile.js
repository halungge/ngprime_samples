var gulp = require("gulp");
var sass = require('gulp-sass');
var del = require('del');
var watch = require('gulp-watch');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("clean", function(){
  return del(["build"]);
});

gulp.task("compile", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("build"));
});

gulp.task("copy:assets", function(){
  return gulp.src("src/assets/**/*", "!.*").pipe(gulp.dest("build"))
});


gulp.task('watch:assets', function() {
  return gulp.src('sass/*.scss')
    .pipe(watch('sass/*.scss'))
    .pipe(sass())
    .pipe(gulp.dest('build'));
});

gulp.task('tslint', () => {
    return gulp.src("src/**/*.ts")
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report());
});
