const fs = require('fs');
const path = require('path');
const useTailwind = fs.existsSync(path.join('tailwind.config.js'));

module.exports = {
  plugins: useTailwind
    ? [require('postcss-preset-env'), require('tailwindcss'), require('autoprefixer')]
    : [require('postcss-preset-env'), require('autoprefixer')]
};
