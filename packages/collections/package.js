Package.describe({
  name: 'collections',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use([
    'ecmascript',
    'mongo',
    'aldeed:collection2',
    'check',
    'cfs:standard-packages@0.5.9',
    'cfs:gridfs@0.0.33',
    'alanning:roles@1.2.4'
  ],['client','server']);

  api.addFiles([
    'beneficiaries/beneficiaries-common.js',
    'projects/projects-common.js',
    'tasks/tasks-common.js',
    'donations/donations-common.js',
    'images/images-common.js',
    'projectTypes/projectTypes-common.js',
    'projectStates/projectStates-common.js',
    'financingCategs/financingCategories-common.js',
    'resources/resources-common.js',

    //methods
    'users/userMethods.js',
    'projects/methods.js'
  ],['client','server']);

  api.addFiles([
    'beneficiaries/publications.js',
    'projects/publications.js',
    'tasks/publications.js',
    'images/publications.js',
    'projectTypes/publications.js',
    'projectStates/publications.js',
    'financingCategs/publications.js',
    'resources/publications.js'
  ],'server');


  api.export(['DB', 'Schemas', 'FS'],['client','server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('collections');
  api.addFiles('collections-tests.js');
});
