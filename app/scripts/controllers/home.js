'use strict';

angular.module('petroglyphApp')
  .controller('HomeCtrl', function ($scope, oauthGoogle) {

    $scope.signedIn = false;
    $scope.$on('oauth.authenticated', function () {
      $scope.signedIn = true;
      $scope.$apply();
    });

    $scope.signInGoogle = function (immediate) {
      oauthGoogle.signIn(immediate);
    };

  });
