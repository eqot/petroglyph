/*global gapi */

'use strict';

angular.module('petroglyphApp')
  .controller('HomeCtrl', function ($scope, $rootScope) {

    var OAUTH2_CLIENT_ID = '@@google_crednetial';
    var OAUTH2_SCOPES = [
      // 'https://www.googleapis.com/auth/yt-analytics.readonly',
      'https://www.googleapis.com/auth/youtube.readonly',
      'https://www.googleapis.com/auth/userinfo.email'
    ];

    $rootScope.account = 'Sign in';

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

    $scope.signin_google = function () {
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

      getUserInfo();

      gapi.client.load('oauth2', 'v2', function() {
        var request = gapi.client.oauth2.userinfo.get();
        request.execute(function (res) {
          if (res.email) {
            $rootScope.account = res.email;
            $rootScope.$apply();
          }
        });
      });
    }

    function getUserInfo () {
      gapi.client.load('plus','v1', function(){
        var request = gapi.client.plus.people.list({
          'userId': 'me',
          'collection': 'visible'
        });
        request.execute(function(resp) {
          console.log('Num people visible:' + resp.totalItems);
        });
      });
    }

    function getUserChannel() {
      console.log('getUserChannel()');

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
