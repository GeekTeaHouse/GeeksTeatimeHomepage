'use strict';

/**
 * @ngdoc overview
 * @name geeksTeatimeHomepageApp
 * @description
 * # geeksTeatimeHomepageApp
 *
 * Main module of the application.
 */
angular
  .module('geeksTeatimeHomepageApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
