# Browserify with Grunt

Browserify is a global install usually...

With `grunt-browserify`, `browserify` gets installed locally, and is referenced there.

This project blatantly follows this [Sitepoint tutorial](http://www.sitepoint.com/getting-started-browserify/)

Other resources I found helpful as a node API/ Browserify novice: 

- [https://nodejs.org/docs/latest/api/modules.html](https://nodejs.org/docs/latest/api/modules.html)
- [Browserify handbook](https://github.com/substack/browserify-handbook#exports)
- on `exports` vs `module.exports`: [this stackoverflow answer helped](http://stackoverflow.com/a/17944431/487746)


## In this project: npm install's

...as devDependencies

	grunt
	grunt-browserify (which auto-installs local browserify)
	grunt-contrib-connect
	grunt-contrib-watch
	grunt-contrib-sass
	grunt-postcss
		grunt-postcss autoprefixer (autoprefixer-core is deprecated!)

	grunt-contrib-copy
	grunt-contrib-uglify
	grunt-contrib-cssmin

... as dependencies (app dependencies):

	jquery
	underscore

have dropped:

- watchify (because grunt)

## Grunt tasks configured for this project

`grunt` : runs `connect` and `watch` (`watch` runs `sass`, `postcss` and `browserify` in the server)

`grunt build`: runs 

- `sass` (src/scss/import-all.scss -> src/scss/_pre-postcss.css)
- `postcss` (src/scss/_pre-postcss.css --> src/css/all.css)
- `uglify` (src/js/ -> dist/js/)
- `cssmin` (src/css/ -> dist/css/)
- `copy` (src -> dist: html and images - and fonts, if necessary)


## jQuery with browserify and Grunt

Varied info on how to use jquery with browserify, but this works with jquery 2.x (bascally, latest jquery in npm)

	npm install jquery 

(remember to save as dependencies rather than devDeps)

For 1.11.x version - might be able to specify at install, but not tried it yet:

	npm install jquery@1.11.x

### jquery-compat 

jquery-compat is currently in alpha - this will be jquery 3 that's backwards compatible.


## Issues as yet unresolved

I dont know whay but every so often, one change in the script can set off the `watch` task and `livereload` multiple times (sometimes to the point where I've had to `Ctrl C` to stop).
Happened once on a Mac and again, and now happening on a PC. 



