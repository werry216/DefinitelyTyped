import gulp = require("gulp");
import typescript = require("gulp-typescript");

function merge(streams: NodeJS.ReadWriteStream[]): NodeJS.ReadWriteStream {
    return null;
}

gulp.task('scripts', function() {
    var tsResult = gulp.src('lib/*.ts')
        .pipe(typescript({
            declarationFiles: true,
            noExternalResolve: true
        }));

    return merge([
        tsResult.dts.pipe(gulp.dest('release/definitions')),
        tsResult.js.pipe(gulp.dest('release/js'))]
    );
});


var tsProject = typescript.createProject({
    declarationFiles: true,
    noExternalResolve: true
});

gulp.task('scripts', function() {
    var tsResult = tsProject.src()
        .pipe(typescript(tsProject));

    return tsResult.js.pipe(gulp.dest('release'));
});

var mainTscProject = typescript.createProject("tsconfig.json", {
   target: "es6"
});

gulp.task('scripts', function() {
    var tsResult = gulp.src('lib/*.ts')
        .pipe(typescript(tsProject));

    return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done.
        tsResult.dts.pipe(gulp.dest('release/definitions')),
        tsResult.js.pipe(gulp.dest('release/js'))]
    );
});
gulp.task('watch', ['scripts'], function() {
    gulp.watch('lib/*.ts', ['scripts']);
});

gulp.task('scripts', function () {
    return gulp.src('lib/*.ts')
        .pipe(typescript(tsProject, undefined, typescript.reporter.fullReporter()));
});

gulp.task('default', function () {
    return gulp.src('src/**/*.ts')
        .pipe(typescript())
        .pipe(gulp.dest('built/local'));
});

var compilerOptions = tsProject.config.compilerOptions;
var exclude         = tsProject.config.exclude;
var files           = tsProject.config.files;
