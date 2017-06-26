(function () {
  'use strict';
  angular.module('app')
  .controller('ViewEjemplar.Controller', viewCtrl);

  viewCtrl.$inject = ['EjemplarService', '$stateParams', '$log'];
  function viewCtrl(EjemplarService, $stateParams, $log) {
    var vm = this;
    vm.location = 'view';
    $log.debug($stateParams.id);
    vm.ejemplarForm = EjemplarService.get({id: $stateParams.id});
  }
})();
