/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { override, addPostcssPlugins } = require('customize-cra')
const tailwindcss = require('tailwindcss')

module.exports = override(
  addPostcssPlugins([tailwindcss('./tailwind.config.js'), require('autoprefixer')])
)
