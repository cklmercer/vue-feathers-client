var elixir = require('laravel-elixir')
require('laravel-elixir-vue-2')

elixir(function (mix) {
    mix.copy('./node_modules/font-awesome/fonts/**', 'public/fonts')
    mix.copy('./assets/images/**', './public/images')
    mix.sass('./assets/scss/app.scss', './public/css/app.css')
    mix.webpack('./app/index.js', './public/js/app.js')
})
