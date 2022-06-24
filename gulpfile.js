const gulp = require('gulp');
const paths = require('path');

const serve = require('./gulp/tasks/serve');
const html2html = require('./gulp/tasks/html2html');
const styles = require('./gulp/tasks/styles');
const script = require('./gulp/tasks/script');
const imagemin = require('./gulp/tasks/imageMini');
const dependenciesJS = require('./gulp/tasks/dependenciesJS');
const dependenciesCss = require('./gulp/tasks/dependenciesCSS');
const clean = require('./gulp/tasks/clean');
const favicon = require('./gulp/tasks/favicons');
const ghPages = require('gh-pages');

function deploy(cb) {
    ghPages.publish(paths.join(process.cwd(), './build'), cb);
}
exports.deploy = deploy;

const dev = gulp.parallel(html2html, styles, script, imagemin, favicon);

const build = gulp.series(clean, dependenciesJS, dependenciesCss, dev);

module.exports.start = gulp.series(build, serve);
