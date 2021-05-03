'use strict';

angular.module('core.phone').factory('Phone', [
  '$resource',
  function ($resource) {
    return $resource(
      'angularjs/phones/:phoneId.json',
      {},
      {
        query: {
          method: 'GET',
          params: { phoneId: 'phones' },
          isArray: true,
        },
      }
    );
  },
]);
