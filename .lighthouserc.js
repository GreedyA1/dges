module.exports = {
    ci: {
      collect: {
        numberOfRuns: 3,
        staticDistDir: './dist/dges-front',
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };