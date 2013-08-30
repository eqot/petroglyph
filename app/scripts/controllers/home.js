'use strict';

angular.module('petroglyphApp')
  .controller('HomeCtrl', function ($scope, oauthGoogle) {

    oauthGoogle.initialize($scope);

  });
