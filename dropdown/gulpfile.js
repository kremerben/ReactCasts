// responsible for build process
var gulp = require('gulp');
// responsible for console.logging
var gutil = require('gulp-util');
// used to handle text files within build
var source = require('vinyl-source-stream');
// figures out load order and dependencies
var browserify = require('browserify');
// tool to auto run gulp when code changes
var watchify = require('watchify');
// converting jsx files into js
var reactify = require('reactify');


gulp.task('default', function() {
    // tell browserify to look for jsx and package them up
    var bundler = watchify(browserify({
        entries: ['./src/app.jsx'],
        transform: [reactify],
        extensions: ['.jsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));

    function build(file) {
        if (file) gutil.log('Recompiling ' + file);
        return bundler
            .bundle()  // hey go compile my files!
            .on('error', gutil.log.bind(gutil, 'Browerify Error'))
            .pipe(source('main.js')) //put it all togehter here
            .pipe(gulp.dest('./'))   //put that file here
    };

    build();
    bundler.on('update', build);
});









// var gulp = require('gulp');
// var react = require('gulp-react');
// var concat = require('gulp-concat');

// gulp.task('default', function() {
//     return gulp.src('src/**')
//         .pipe(react())
//         .pipe(concat('application.js'))
//         .pipe(gulp.dest('./'));
//     });
