'use strict';

angular.module('petroglyphApp')
  .controller('MainCtrl', function ($scope) {
    $scope.contents = [
      {url: 'test0'},
      {url: 'test1'},
      {url: 'test2'}
    ];
  });
