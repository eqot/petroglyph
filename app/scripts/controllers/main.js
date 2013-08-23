'use strict';

angular.module('petroglyphApp')
  .controller('MainCtrl', function ($scope, Content) {

    $scope.contents = null;
    $scope.url = null;

    Content.query(function (res) {
      $scope.contents = res;
    });

    $scope.addContent = function () {
      if ($scope.url === null || $scope.url.length === 0) {
        return;
      }

      var content = {
        url: $scope.url
      };

      Content.save(content, function (res) {
        content._id = res._id;
        $scope.contents.push(content);
      });
    };

    $scope.getThumbnail = function (url) {
      if (url.match(/^http:\/\/www.youtube.com\/watch\?v=(\w+)/)) {
        var id = RegExp.$1;
        console.log(id);
        return 'http://i.ytimg.com/vi/' + id + '/default.jpg';
      }

      return null;
    };

  });
