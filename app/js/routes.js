define(['app'], function (app) {
  'use strict';
  return app.config(['$routeProvider', function ($routeProvider) {
  	$routeProvider.when('#/', {templateUrl: 'index.html', controller: 'IndexCtrl'});
    $routeProvider.when('/home', {templateUrl: 'partials/html/main.html', controller: 'MyController1'});
    $routeProvider.when('/list', {templateUrl: 'partials/html/list.html', controller: 'MyController2'});
  }]);
});
