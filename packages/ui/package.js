Package.describe({
  name: 'hack-ui',
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
  api.use('ecmascript');

  api.use([
    'iron:router',
    'templating',
    'semantic:ui'
    ],'client');

  api.addFiles('routes/routes.js','client');


  //views
  api.addFiles([
    'views/frontpage/index.html',
    'views/frontpage/footer.html',
    'views/frontpage/footer_client.js',
    'views/frontpage/header.html',
    'views/frontpage/header_client.js',
    'views/frontpage/main_body.html',
    'views/frontpage/main_body_client.js',
    'views/frontpage/home.html',
    'views/frontpage/home_client.js',
  ],'client');

  // LESS
  api.addAssets([
    'views/frontpage/footer.less',
    'views/frontpage/header.less',
    'views/frontpage/main_body.less',
    'views/frontpage/home.less',
  ],'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ui');
  api.addFiles('ui-tests.js');
});
