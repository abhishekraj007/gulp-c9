var gulp = require("gulp"),
    // For livereloading]
    sync = require("browser-sync"),
    // To compile sass file
    sass = require("gulp-sass"),
    // To compress images
    imagemin = require("gulp-imagemin"),
    // To handle css errors
    plumber = require("gulp-plumber"),
    // For cross browser compilation
    autoprefixer = require("gulp-autoprefixer");
    
    
// Task style
// Compile
gulp.task('style', function(){
    gulp.src('scss/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(plumber())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']}))
        .pipe(gulp.dest('css/'));
});

// Task image
// compress
gulp.task('image', function(){
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('images'));
});

// Task Reload
// Livereloading
gulp.task('reload', function(){
    sync({
       files: '*.php, *.html, scss/*.scss, js/*.js', 
       port: 8082
    });
});

// Task Watch
// Watch changes in files for compilation and reloading
gulp.task('watch', function(){
   gulp.watch('scss/*.scss',['style'])
   gulp.watch('img/*',['image'])
});

// Task Default
// To run all task using default gulp commmand
gulp.task('default',['style','image','watch', 'reload']);