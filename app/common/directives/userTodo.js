myTestApp.directive('userTodo', function(){
    return {
        restrict: 'EA',
        templateUrl: './views/form/userTodoView.html',
        scope: {
            list: '=',
            title: '@'
        }
    };
});