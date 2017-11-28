const gulp = require('gulp');
const	gulpWebpack = require('webpack-stream');
const webpack = require('webpack');
const browserSync = require('browser-sync');
const connect = require('gulp-connect-php');
const reload = browserSync.reload;
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const ant = require('postcss-ant');
const autoprefixer = require('autoprefixer');

var paths = {
	scss: './src/assets/scss/*.scss',
	css: './dist/assets/css',
	php: './dist/*.php',
	js: './assets/js/bundle.js',
};

gulp.task('webpack', () => {
	return gulp.src('./src/assets/js/app.js')
	.pipe(gulpWebpack({
		watch: true,
		module: {
			loaders: [
				{ 
					test: /\.js$/, loader: 'imports?define=>false'
				},
				{
					test: /\.js$/,
					loader: 'babel',
					query: {
						presets: ['es2015']
					}
				}
			],
		},
		output: {
			filename: 'bundle.js'
		},
	}, webpack))
	.pipe(gulp.dest('./dist/assets/js/'));
});

gulp.task('sass', () => {
	
	var processors = [
		ant,
		autoprefixer
	]
	
	return gulp.src('./src/assets/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dist/assets/css'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('serve', ['sass'], function () {

	connect.server({base: './dist'}, function () {
		browserSync({
			proxy: '127.0.0.1:8000'
		});

		gulp.watch(paths.scss, ['sass']);
		gulp.watch(paths.php).on('change', reload);
	});
});

gulp.task('default', ['serve', 'webpack']);