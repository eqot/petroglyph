'use strict';

angular.module('petroglyphApp', ['ngRoute', 'ngResource', 'AngularOauthGoogle', 'AngularYouTube'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'HomeCtrl'
      })
      .when('/contents', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .when('/contents/:id', {
        templateUrl: 'views/content.html',
        controller: 'ContentCtrl'
      })
      .when('/upload', {
        templateUrl: 'views/upload.html',
        controller: 'UploadCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
