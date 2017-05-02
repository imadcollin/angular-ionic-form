module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
    //   { pattern: 'test/1st.spec.ts',
    //  }
    'test/1st.spec.ts',
    'test/home.spec.ts',
    'test/home.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
        '**/*.ts': ['typescript']

    },
    typescriptPreprocessor: {
  options: {
    sourceMap: true, // generate source maps
    noResolve: false // enforce type resolution
  },
  transformPath: function(path) {
    return path.replace(/\.ts$/, '.js');
  }
},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}