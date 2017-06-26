(function () {
  'use strict';
  angular.module('app').service('GeneroService', generoService);

  generoService.$inject = [];

  function generoService() {
    var service = this;
    let generos = [
      {
        id: 1,
        descripcion: 'Terror'
      }, {
        id: 2,
        descripcion: 'Comedia'
      }, {
        id: 3,
        descripcion: 'Drama'
      }, {
        id: 4,
        descripcion: 'Accion'
      }];
    service.query = function () {
      return generos;
    };
  }
})();
