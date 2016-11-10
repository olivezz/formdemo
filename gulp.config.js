module.exports = function () {

    var config = {

            indexFile: './src/index.html',
            jsFiles: [
                'src/app/**/*.js',
                '!src/app/**/*.spec.js'
            ],
            filesToInject: [
                './src/app/shared/**/*.module.js',
                './src/app/shared/**/*.js',
                './src/app/**/*.js',
                '!./src/app/**/*.spec.js',
                './src/app/assets/css/main.css'
            ],
            SASS: [
                /* first 3 files must in order */
                //'./src/sass/_colors.scss',
                //'./src/sass/_marginpadding.scss',
                //'./src/sass/_typography.scss',
               // './src/sass/_layout.scss',
                './src/sass/styles.scss',
                './src/app/**/*.scss'
            ],
            CSS: './src/assets/css/*.css',
            path: {
                css: './src/assets/css/',
                html: './src/app/**/*.html',
                development: './app',
                production: './build',
                images: './src/assets/images/**/*.+(png|jpg|gif|svg)',
                imagesProd: './build/assets/images',
                json: './src/app/**/*.json',
                font: './build/assets/fonts'
            },
            fontsToCopy: ['./src/lib/bootstrap/dist/fonts/**/*'],
            /*** Bower and NPM locations */
            bower: {
                json: require('./bower.json'),
                directory: './src/lib/'
            }
        };
    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory
        };
        return options;
    };
    return config;
};
