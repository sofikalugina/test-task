myTestApp.factory('articleService', function ($http, $q) {
    return {
        getArticleList: function () {
            var deferred = $q.defer();
            $http.get('../assets/data/articles.json').then(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        },
        getArticleBySlug: function (slugName) {
            var deferred = $q.defer();
            $http.get('../assets/data/articles.json').then(function (response) {
                response.data.forEach(function(item, i, arr) {
                    if (item.slug === slugName) {
                        deferred.resolve(item);
                    }
                });
            });

            return deferred.promise;
        }
    }
});