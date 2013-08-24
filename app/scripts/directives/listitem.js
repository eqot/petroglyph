'use strict';

angular.module('petroglyphApp')
  .directive('listitem', function (YouTube) {
    return {
      restrict: 'E',
      templateUrl: 'views/listitem.html',
      link: function preLink(scope) {
        var videoId = YouTube.getVideoId(scope.content.url);
        // console.log(videoId);

        if (videoId) {
          YouTube.getInfo(videoId, function (res) {
            // console.log(res);
            scope.title = res.data.title;
            scope.description = res.data.description;
            scope.thumbnail = res.data.thumbnail.sqDefault;
            // scope.duration = res.data.duration;
            scope.durationString = YouTube.getDuration(res.data.duration);
          });
        }
      }
    };
  });
