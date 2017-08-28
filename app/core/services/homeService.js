myTestApp.factory('homeService', function ($http, $q) {
    return {
        getHomeContent: function () {
            var deferred = $q.defer();
            $http.get('../assets/data/home.json').then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        }
    }
});