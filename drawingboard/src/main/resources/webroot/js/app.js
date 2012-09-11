'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/main', {templateUrl: 'partials/main.html', controller: MainController});
    $routeProvider.when('/drawings/:drawingId', {templateUrl: 'partials/drawing.html', controller: DrawingController});
    $routeProvider.otherwise({redirectTo: '/main'});
  }]);
