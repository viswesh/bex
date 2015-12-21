'use strict';

/**
 * @ngdoc overview
 * @name bexApp
 * @description
 * # bexApp
 *
 * Main module of the application.
 */
angular
  .module('bexApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/collections', {
        templateUrl: 'views/collections.html',
        controller: 'CollectionsCtrl',
        controllerAs: 'collections'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
