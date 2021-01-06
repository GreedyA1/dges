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
      token: '6bb4c65c-699b-421d-92b2-917f0e567d58', // could also use LHCI_TOKEN variable instead
    },
  },
};
