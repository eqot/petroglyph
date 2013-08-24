'use strict';

angular.module('petroglyphApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/list.html',
        controller: 'MainCtrl'
      })
      .when('/contents/:id', {
        templateUrl: 'views/content.html',
        controller: 'ContentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
