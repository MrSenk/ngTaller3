(function () {
  'use strict';
  angular
  .module('app')
  .config(routesConfig);
  function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('ejemplar', {
      url: '/ejemplar',
      component: 'ejemplar'
    })
    .state('crearEjemplar', {
      url: '/ejemplar/crear',
      controller: 'StoreEjemplar.Controller',
      controllerAs: 'vm',
      templateUrl: 'app/FormEjemplar.html'
    })
    .state('verEjemplar', {
      url: '/ejemplar/:id/ver',
      controller: 'ViewEjemplar.Controller',
      controllerAs: 'vm',
      templateUrl: 'app/FormEjemplar.html'
    })
    .state('actualizarEjemplar', {
      url: '/ejemplar/:id/actualizar',
      controller: 'UpdateEjemplar.Controller',
      controllerAs: 'vm',
      templateUrl: 'app/FormEjemplar.html'
    });
  }
})();
