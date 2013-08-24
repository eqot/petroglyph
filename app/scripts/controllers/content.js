'use strict';

angular.module('petroglyphApp')
  .controller('ContentCtrl', function ($scope, $routeParams, YouTube) {

    var videoId = $routeParams.id;
    // console.log(videoId);

    YouTube.getInfo(videoId, function (res) {
      // console.log(res);
      $scope.title = res.data.title;
      $scope.description = res.data.description;
      $scope.thumbnail = res.data.thumbnail.sqDefault;
      $scope.duration = res.data.duration;
      $scope.durationString = YouTube.getDuration(res.data.duration);
    });

  });
