'use strict';

angular.module('petroglyphApp')
  .controller('HomeCtrl', function ($scope, oauthGoogle) {

    $scope.signInGoogle = function (immediate) {
      oauthGoogle.signIn(immediate);
    };

  });
