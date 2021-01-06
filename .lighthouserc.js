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
      token: '5cd5bfab-c0ee-4f2d-b3b0-c98d32078846', // could also use LHCI_TOKEN variable instead
    },
  },
};
