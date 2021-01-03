module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: ['https://dges.app/'],
      // staticDistDir: './dist/apps/dges-front/',
    },
    upload: {
      target: 'temporary-public-storage',
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://limitless-lowlands-77781.herokuapp.com/',
      token: 'cd36d33e-f72a-46db-ab2c-3bce75b07741', // could also use LHCI_TOKEN variable instead
    },
  },
};
