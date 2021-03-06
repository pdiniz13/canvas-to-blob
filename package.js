Package.describe({
    name: 'pdiniz:canvas-to-blob',
    version: '0.0.2',
    // Brief, one-line summary of the package.
    summary: 'Simple wrapper around the blueimp\'s JavaScript-Canvas-to-Blob package',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.3');

    api.addFiles('canvas-to-blob.js', 'client');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('pdiniz:canvas-to-blob');
    api.addFiles('canvas-to-blob-tests.js');
});