var myTestApp = angular.module('myTestApp', ['ui.router']);

myTestApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './views/home/homeView.html',
            controller: 'homeCtrl'
        })
        .state('form', {
            url: '/form',
            templateUrl: './views/form/formView.html',
            controller: 'formCtrl'
        })
        .state('article', {
            abstract: true,
            url: '/article',
            templateUrl: './views/article/mainView.html',
            controller: 'articleCtrl'
        })
        .state('article.list', {
            url: '/list',
            templateUrl: './views/article/listView.html'
        })
        .state('article.item', {
            url: '/:slugName',
            templateUrl: './views/article/itemView.html'
        })
});












