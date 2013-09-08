'use strict';

angular.module('petroglyphApp')
  .controller('HomeCtrl', function ($scope, oauthGoogleService) {

    $scope.signInGoogle = function () {
      oauthGoogleService.signIn(false);
    };

  });
