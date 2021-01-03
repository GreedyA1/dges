module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: ['https://dges.app/'],
      // staticDistDir: './dist/apps/dges-front/',
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://limitless-lowlands-77781.herokuapp.com',
      token: 'f683817f-3fa7-49d1-88ce-e8fe6679c8a8', // could also use LHCI_TOKEN variable instead
    },
  },
};
