myTestApp.controller("formCtrl", ['$scope', 'usersService', function ($scope, usersService) {

    // get users list rom usersService
    $scope.users = usersService.list();

    // create new user by usersService.save function
    $scope.saveUser = function () {
        usersService.save($scope.user);
        // log new user's data into console
        console.log(JSON.stringify($scope.user));
        $scope.user = {};
    };


    // delete user by usersService.delete function
    $scope.delete = function (id) {
        usersService.delete(id);
        if ($scope.user.id == id)
            $scope.user = {};
    };

    // defined our todo list as an array of objects
    $scope.todo = [
        {name: 'Some important task', completed: true},
        {name: 'Another important task', completed: true},
        {name: 'And one more important task', completed: false}
    ];
}]);