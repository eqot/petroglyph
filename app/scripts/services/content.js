'use strict';

angular.module('petroglyphApp')
  .factory('Content', function ($http) {

    var DB_URL = '//192.168.33.10:3000/petroglyph/contents';

    return {
      query: function (callback) {
        $http.get(DB_URL).success(function (res) {
          if (callback) {
            callback(res);
          }
        });
      },

      get: function (id, callback) {
        $http.get(DB_URL + '/' + id).success(function (res) {
          if (callback) {
            callback(res);
          }
        });
      },

      save: function (data, callback) {
        $http.post(DB_URL, data).success(function (res) {
          if (callback) {
            callback(res);
          }
        });
      },

      update: function (id, data, callback) {
        $http.put(DB_URL + '/' + id, data).success(function (res) {
          if (callback) {
            callback(res);
          }
        });
      },

      remove: function (id, callback) {
        $http.delete(DB_URL + '/' + id).success(function (res) {
          if (callback) {
            callback(res);
          }
        });
      }

    };
  });
