angular.module('ToDoApp', ['ngRoute', 'RouteControllers', 'UserService', 'angular-storage', 'TodoService']);
 
angular.module('ToDoApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    
    .when('/todo', {
        templateUrl: 'templates/todo.html',
        controller: 'TodoController'
    })
    
    .when('/todo/edit/:id', {
    templateUrl:'templates/edit-todo.html',
    controller: 'EditTodoController'
    })
    
    .when('/accounts/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });
});