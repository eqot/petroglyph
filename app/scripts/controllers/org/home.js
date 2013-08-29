/*global gapi */

'use strict';

angular.module('petroglyphApp')
  .controller('HomeCtrl', function ($scope) {

    var OAUTH2_CLIENT_ID = '@@google_crednetial';
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
        loadAPIClientInterfaces();
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

    function loadAPIClientInterfaces() {
      gapi.client.load('youtube', 'v3', function() {
        gapi.client.load('youtubeAnalytics', 'v1', function() {
          getUserChannel();
        });
      });
    }

    function getUserChannel() {
      console.log('ok');

      var request = gapi.client.youtube.channels.list({
        mine: true,
        part: 'id,contentDetails'
      });

      request.execute(function(response) {
        console.log(response);
        if ('error' in response) {
          // displayMessage(response.error.message);
          console.log(response.error.message);
        } else {
          // channelId = response.items[0].id;
          // var uploadsListId = response.items[0].contentDetails.relatedPlaylists.uploads;
          // getUploadsList(uploadsListId);
        }
      });
    }

  });