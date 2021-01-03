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
      serverBaseUrl: '${LHCI_SERVER_BASE_URL} + asdas',
      token: '${LHCI_TOKEN}', // could also use LHCI_TOKEN variable instead
    },
  },
};
