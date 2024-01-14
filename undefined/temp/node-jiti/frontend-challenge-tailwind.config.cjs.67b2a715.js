"use strict";/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      'bungee'
    },
    extend: {
      colors: {
        'green-custom': '#7bd95d',
        'nav-text': '#E6E1CA',
        'dark-purple': '#1D151F',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('flowbite/plugin'),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
  daisyui: {
    themes: [
      {
        darker: {
          primary: '#28A909',

          secondary: '#064e3b',

          accent: '#eab308',

          neutral: '#404040',

          'base-100': '#0b0b0b',

          info: '#22D3EE',

          success: '#28A909',

          warning: '#facc15',

          error: '#cb0119',
        },
      },
    ],
  },
  safelist: [
    {
      pattern: /(mt|mb|mr|ml|my|mx|px|py|pt|pb|pl|pr)-[0-9]+/,
    },
    {
      pattern: /flex-.*/,
    },
    {
      pattern: /(bottom|right|top|left)-[0-9]+/,
    },
    {
      pattern: /(w|h)-[0-9]+/,
    },
  ],
  darkMode: 'class',
} /* v7-aa667da6d17466ec */