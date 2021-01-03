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
      serverBaseUrl: '${{secrets.LHCI_SERVER_BASE_URL}}',
      token: '${{secrets.LHCI_TOKEN}}', // could also use LHCI_TOKEN variable instead
    },
  },
};
