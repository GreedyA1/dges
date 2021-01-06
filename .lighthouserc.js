module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: ['https://dges.app/'],
      // staticDistDir: './dist/apps/dges-front/',
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://morning-ravine-50826.herokuapp.com/',
      token: 'f6e59884-50ef-47a5-8a8e-27864e1c1ade', // could also use LHCI_TOKEN variable instead
    },
  },
};
