const path = require('path');
const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
  .vue(3)
  .postCss(
    'resources/css/app.css',
    'public/css',
    [require('tailwindcss')]
  )
  .alias({'@': path.join(__dirname, 'resources/js')})

if (mix.inProduction()) {
  mix.version()
} else {
  mix.sourceMaps()
}
