(function () {
  'use strict';
  angular.module('app')
  .controller('StoreEjemplar.Controller', store);

  store.$inject = ['EjemplarService', '$log', 'GeneroService'];

  function store(EjemplarService, $log, GeneroService) {
    var vm = this;
    vm.location = 'store';
    vm.ejemplarForm = {
      fechaPrestamo: null,
      fechaDevolucion: null,
      libroId: null,
      estadoId: null,
      usuarioId: null
    };
    vm.generos = GeneroService.query();
    vm.ejemplares = null;
    EjemplarService.query().$promise.then(success, error);
    vm.semanticAction = function (form) {
      console.$log(form);
      form.idGenero = form.idGenero.idGenero;
      form.anno = convertDate(form.anno_estreno);
      EjemplarService.save(form, success, error);
    };
    // Private functions
    function success(data) {
      vm.ejemplares = data;
      $log.debug(vm.ejemplares);
    }
    function error(data) {
      $log.debug(data);
    }
    function convertDate(str) {
      var date = new Date(str);
      var mnth = ('0' + (date.getMonth() + 1)).slice(-2);
      var day = ('0' + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join('-');
    }
  }
})();
