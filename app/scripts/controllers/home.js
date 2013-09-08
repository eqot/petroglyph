'use strict';

angular.module('petroglyphApp')
  .controller('HomeCtrl', function ($scope, oauthGoogleService) {

    $scope.signInGoogle = function (immediate) {
      oauthGoogleService.signIn(immediate);
    };

  });
