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
  api.use(['ecmascript','collections', 'cfs:standard-packages@0.5.9', 'cfs:gridfs@0.0.33'],['server','client']);

  api.use(['templating','iron:layout','iron:router','aldeed:autoform@5.6.1', 'yogiben:autoform-file@0.2.9', 'fabienb4:autoform-semantic-ui@0.7.1','less'],'client');

  api.addFiles('routes/routes.js','client');


  //views
  api.addFiles([
    'views/frontpage/index.html',

    'views/frontpage/header.html',
    'views/frontpage/header_client.js',
    'views/frontpage/main_body.html',
    'views/frontpage/main_body_client.js',
    'views/frontpage/footer.html',
    'views/frontpage/footer_client.js',
    'views/frontpage/home.html',
    'views/frontpage/home_client.js',

    'views/projects/addProject.html',
    'views/projects/showProject.html',
    'views/projects/editProject.html',
    'views/projects/listProjects.html',
    'views/projects/editProject.js',
    'views/projects/projectCard.html',
    'views/projects/projectCard_client.js',


    'views/donation/donation.html',
    'views/donation/donation.js',

    'views/user/editUser.html',
    'views/user/profile.html',

    'views/general/not-authorized.html',
    'views/general/not-found.html',
    'views/general/loading.html',

    'views/beneficiary/addBeneficiary.html',
    'views/beneficiary/addBeneficiary.css',
    'views/beneficiary/showBeneficiary.html',
    'views/beneficiary/showBeneficiary.js',
    'views/beneficiary/editBeneficiary.html',
    'views/beneficiary/editBeneficiary.js',

    'views/task/addTask.html',
    'views/task/showTask.html',
    'views/task/editTask.html',

    'views/frontpage/footer.less',
    'views/frontpage/header.less',
    'views/frontpage/main_body.less',
    'views/frontpage/home.less'
  ],'client');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ui');
  api.addFiles('ui-tests.js');
});
