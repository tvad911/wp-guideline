// webpack.mix.js

let mix = require('laravel-mix');

mix.options({
    processCssUrls: false,
    clearConsole: true,
    terser: {
        extractComments: false,
    }
});

const source = 'sources';
const dist = 'dist';

mix.less(source + '/css/style.less', dist + '/css');
