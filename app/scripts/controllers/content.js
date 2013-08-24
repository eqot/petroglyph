'use strict';

angular.module('petroglyphApp')
  .controller('ContentCtrl', function ($scope, $routeParams, YouTube) {

    $scope.videoId = $routeParams.id;
    // console.log(videoId);

    YouTube.getInfo($scope.videoId, function (res) {
      // console.log(res);
      $scope.title = res.data.title;
      $scope.description = res.data.description;
      $scope.thumbnail = res.data.thumbnail.sqDefault;
      $scope.durationString = YouTube.getDuration(res.data.duration);
    });

    $scope.getPlayerUrl = function () {
      return YouTube.getIFramePlayerUrl($scope.videoId);
    };

  });
