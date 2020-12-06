module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      staticDistDir: './dist/apps/dges-front/',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
