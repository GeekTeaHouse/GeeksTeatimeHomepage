'use strict';

/**
 * @ngdoc function
 * @name geeksTeatimeHomepageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the geeksTeatimeHomepageApp
 */
angular.module('geeksTeatimeHomepageApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
