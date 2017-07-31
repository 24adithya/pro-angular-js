angular.module('todoApp').service('todoService', ['$http', '$q', '$resource', function($http, $q, $resource) {
    // var sampleObj = $http('http://tw-http-hunt-api-1062625224.us-east-2.elb.amazonaws.com/challenge/', {}, {
    //        find: { method: 'GET' },
    //        create: { method: 'POST' },
    //        save: { method: 'PUT' }
    //    });

    var initialGet = {
        method: 'GET',
        url: 'http://tw-http-hunt-api-1062625224.us-east-2.elb.amazonaws.com/challenge',
        headers: {
            'userId': 'Lmc3Ydm4pi'
        }
    }

    var reqGet = {
        method: 'GET',
        url: 'http://tw-http-hunt-api-1062625224.us-east-2.elb.amazonaws.com/challenge/input',
        headers: {
            'userId': 'Lmc3Ydm4pi'
        }
    }

    // var reqPost = {
    //     method: 'POST',
    //     url: 'http://tw-http-hunt-api-1062625224.us-east-2.elb.amazonaws.com/challenge/output',
    //     headers: {
    //         'userId': 'Lmc3Ydm4pi',
    //         'content-type' : 'application/json'
    //     }
    // }

    function performGet(params) {
        var deferred = $q.defer();
        var response = $http(initialGet);

        response.then(function(getResponse) {
            deferred.resolve(getResponse.data.sampleInput.input);
        }, function(errorData) {
            deferred.reject(errorData);
        });

        return deferred.promise;
    }

    function performChallengeGet(params) {
        var deferred = $q.defer();
        var response = $http(reqGet);

        response.then(function(getResponse) {
            deferred.resolve(getResponse.data);
        }, function(errorData) {
            deferred.reject(errorData);
        });

        return deferred.promise;
    }

    function performChallengePost(params) {
        var deferred = $q.defer();

        var reqPost = {
            method: 'POST',
            url: 'http://tw-http-hunt-api-1062625224.us-east-2.elb.amazonaws.com/challenge/output',
            headers: {
                'userId': 'Lmc3Ydm4pi',
                'content-type': 'application/json'
            },
            data : params
        }

        var response = $http(reqPost);

        response.then(function(getResponse) {
            deferred.resolve(getResponse.data.sampleInput.input);
        }, function(errorData) {
            deferred.reject(errorData);
        });

        return deferred.promise;
    }

    return {
        performGet: performGet,
        performChallengeGet: performChallengeGet,
        performChallengePost: performChallengePost
    };
}]);