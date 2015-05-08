'use strict';

/**
 * @ngdoc service
 * @name homunculusApp.services:HomunculusUtilityService
 * @description
 * # HomunculusUtilityService
 * Service for providing miscellaneous utility helper functions.
 */
angular.module('homunculusApp.services')
  .factory('HomunculusUtilityService', [
    function () {

      return {
        'objectToArray': function (obj) {

          return Object.keys(obj).map(function (key) {
            return obj[key];
          });

        },
        'insertAlpha': function (insertElement, insertArray) {

          // Binary search-like algorithm to find insertion point.
          // Array should be lexicographically pre-sorted.
          var i = 0;
          var low = 0;
          var high = insertArray.length - 1;
          var mid;

          while (high - low > 1) {

            mid = Math.floor((low + high) / 2);

            if (insertElement.name < insertArray[mid].name) {
              high = mid;
            } else {
              low = mid;
            }

          }

          if (insertElement.name < insertArray[low].name) {
            insertArray.unshift(insertElement);
          } else if (insertElement.name > insertArray[high].name) {
            insertArray.push(insertElement);
          } else {
            insertArray.splice(high, 0, insertElement);
          }

        }
      };

    }
  ]);