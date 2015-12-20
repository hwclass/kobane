define(function (require) {
  'use strict';
  require('angular').module('app.controllers', ['app.configs', 'app.services', 'firebase']).
  	controller('IndexController', require('controller/index_controller')).
    controller('MyController1', require('controller/my_controller1')).
    controller('MyController2', require('controller/my_controller2'));
});
