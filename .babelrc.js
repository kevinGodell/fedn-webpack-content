'use strict';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1%', 'not dead'/*, 'not ie 11'*/]
        },
        useBuiltIns: 'usage',
        corejs: 3,
        debug: true
      }
    ]
  ]
};
