/*global gapi */

'use strict';

angular.module('petroglyphApp')
  .controller('HomeCtrl', function ($scope) {

    var OAUTH2_CLIENT_ID = 'xxxxxxxx';
    var OAUTH2_SCOPES = [
      // 'https://www.googleapis.com/auth/yt-analytics.readonly',
      'https://www.googleapis.com/auth/youtube.readonly'
    ];

    gapi.auth.init(function() {
      setTimeout(checkAuth, 1);
    });

    function checkAuth () {
      console.log('checkAuth()');

      gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: true
      }, handleAuthResult);
    }

    function handleAuthResult (authResult) {
      console.log('handleAuthResult()');
      console.log(authResult);

      if (authResult) {
        console.log('Authenticated.');
      } else {
        console.log('Failed.');
      }
    }

    $scope.signin = function () {
      gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: false
      }, handleAuthResult);
    };

  });
