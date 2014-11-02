'use strict';

/**
 * @ngdoc function
 * @name geeksTeatimeHomepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geeksTeatimeHomepageApp
 */
angular.module('geeksTeatimeHomepageApp')
  .controller('EditorCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.doLogin = function() {
      console.log('login');
    };
  });
