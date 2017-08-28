myTestApp.controller("articleCtrl", function ($scope, $stateParams, articleService) {
    //
    if (!$stateParams.slugName) {
        articleService.getArticleList().then(function(response) {
            $scope.articles = response.data;
        });
    } else {
        articleService.getArticleBySlug($stateParams.slugName).then(function(response) {
            $scope.article = response;
        });
    }
});