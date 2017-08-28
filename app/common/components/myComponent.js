myTestApp.component('myComponent', {
    bindings: {
        username: '@' // string binding
    },
    controller: [function () {
        var $ctrl = this;
        $ctrl.$onInit = function () {
            $ctrl.username = $ctrl.username || 'NA';
        };
        $ctrl.addName = function (name) {
            $ctrl.username = name;
        };
    }],
    templateUrl: './views/home/myComponentView.html'

});

myTestApp.component('myInnerComponent', {
    bindings: {
        addName: '&' // function binding
    },
    controller: [function () {
        var $ctrl = this;

        $ctrl.addAName = function () {
            $ctrl.addName({name: $ctrl.newName});
            $ctrl.newName = '';
        }
    }],
    templateUrl: './views/home/myInnerComponentView.html'
});
