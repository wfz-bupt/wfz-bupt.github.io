var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('testLess', function () {
    gulp.src(['less/*.less']) //多个文件以数组形式传入
        .pipe(less())
        .pipe(gulp.dest('css')); //将会在src/css下生成index.css以及detail.css 
});


gulp.task('testWatch', function () {
    gulp.watch('less/*.less', ['testLess']); //当所有less文件发生改变时，调用testLess任务
});
//监听less，解析为css，方式：gulp testWatch
//监听方式：从控制台进入PC，然后执行browser-sync start --server --files "css/*.css, *.html"
//这时就会自动打开浏览器展示index.html的内容