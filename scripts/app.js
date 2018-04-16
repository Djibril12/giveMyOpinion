  angular.module('myOpinion', ["ngRoute"])
  .config(function ($routeProvider, $locationProvider, $interpolateProvider) {
  /*$locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });*/
  
  $interpolateProvider.startSymbol('**');
  $interpolateProvider.endSymbol('**');

  $routeProvider
    .when('/', {
      templateUrl: '../views/recherche/main.twig',
        controller: 'MainCtrl'
      })
      .when('/watch/web/search', {
        templateUrl: '../views/recherche/search.twig',
        controller: 'SearchCtrl'
    })
  });