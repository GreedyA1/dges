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
      token: '${LHCI_TOKEN}', // could also use LHCI_TOKEN variable instead
    },
  },
};
