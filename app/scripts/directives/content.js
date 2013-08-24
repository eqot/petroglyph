'use strict';

angular.module('petroglyphApp')
  .directive('content', function ($http) {
    return {
      restrict: 'E',
      templateUrl: 'views/content.html',
      link: function preLink(scope) {
        if (scope.content.url.match(/^http:\/\/www.youtube.com\/watch\?v=([\w-]+)/)) {
          scope.videoId = RegExp.$1;
          // console.log(scope.videoId);

          $http.jsonp('http://gdata.youtube.com/feeds/api/videos/' + scope.videoId + '?v=2&alt=jsonc&callback=JSON_CALLBACK')
            .success(function (res) {
              // console.log(res);
              scope.title = res.data.title;
              scope.description = res.data.description;
              scope.thumbnail = res.data.thumbnail.sqDefault;
              scope.duration = res.data.duration;
            });

          scope.getDuration = function () {
            return Math.floor(scope.duration / 60) + ':' + (scope.duration % 60);
          };
        }
      }
    };
  });
