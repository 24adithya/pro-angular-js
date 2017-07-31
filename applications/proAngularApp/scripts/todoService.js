angular.module('todoApp').service('todoService', ['$http', '$q', '$resource', function($http, $q, $resource) {
    // var sampleObj = $http('http://tw-http-hunt-api-1062625224.us-east-2.elb.amazonaws.com/challenge/', {}, {
    //        find: { method: 'GET' },
    //        create: { method: 'POST' },
    //        save: { method: 'PUT' }
    //    });

    var req = {
        method: 'GET',
        url: 'http://tw-http-hunt-api-1062625224.us-east-2.elb.amazonaws.com/challenge/',
        headers: {
            'userId': 'Lmc3Ydm4pi'
        }
    }

    function performGet(params) {
        var deferred = $q.defer();
        var response = $http(req);

        response.then(function(getResponse) {
            deferred.resolve(getResponse);
        }, function(errorData) {
            deferred.reject(errorData);
        });

        return deferred.promise;
    }

    return {
        performGet: performGet
    };
}]);