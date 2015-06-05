// package metadata file for Meteor.js
var packageName = 'velocityjs:velocityjs'; // https://atmospherejs.com/velocityjs/velocityjs
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = "1.2.1";

Package.describe({
  "name": packageName,
  "summary": 'Velocity.js (official) - accelerated JavaScript animation.',
  "version": version,
  "git": 'https://github.com/julianshapiro/velocity.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.use("jquery", where);
  api.addFiles([
    'velocity.min.js',
    'velocity.ui.js'
    ], where
  );
});

Package.onTest(function (api) {
  api.use(packageName, where);
  api.use('tinytest', where);
  api.addFiles('meteor/test.js', where);
});