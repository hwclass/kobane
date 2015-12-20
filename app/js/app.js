define(['angular'], function() {
  'use strict';
  return angular.module('app', [
    'ngRoute',
    'app.configs',
    'app.filters',
    'app.services',
    'app.directives',
    'app.controllers'
  ]);
});
