'use strict';

angular.module('petroglyphApp')
  .controller('ContentCtrl', function ($scope, $routeParams) {
    var videoId = $routeParams.id;
    console.log(videoId);
  });
