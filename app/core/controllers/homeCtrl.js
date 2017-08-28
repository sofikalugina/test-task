myTestApp.controller("homeCtrl", ['$scope', 'homeService', function ($scope, homeService) {

    homeService.getHomeContent().then(function(response) {
        $scope.homeContent = response.data;
    });


}]);
