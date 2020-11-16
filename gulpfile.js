const gulp = require("gulp");
const connect = require("gulp-connect")

gulp.task("cp_html" , function() {
    return gulp.src("index.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload())
})

gulp.task("cp_img" , function() {
    return gulp.src("image/*.{png,jpg}")
    .pipe(gulp.dest("dist/image"))
    .pipe(connect.reload())
})
gulp.task("cp_css" , function() {
    return gulp.src("css/*.css")
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})
gulp.task("cp_js",function() {
    return gulp.src("js/*.js")
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload())
})
gulp.task("cp_font" , function() {
    return gulp.src("fonts/*.css")
    .pipe(gulp.dest("dist/fonts"))
    .pipe(connect.reload());
})
gulp.task("build" , ["cp_html" , "cp_img" , "cp_css" , "cp_js","cp_font"] , function() {
    console.log("开始");
})
gulp.task("watch" , function(){
    gulp.watch("index.html" , ["cp_html"]);
    gulp.watch("image/*.{png,jpg}", ["cp_img"]);
    gulp.watch("css/*.css" , ["cp_css"]);
    gulp.watch("js/*.js" , ["cp_js"]);
    gulp.watch("fonts/*.css",["cp_font"])
})

gulp.task("server" , function() {
    connect.server({
      root:"dist", 
      port: 8899 , 
      livereload: true  
    })
  })

  gulp.task("default" , ["watch","server","build"]);