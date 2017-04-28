(function(angular) {

  angular.module('app').component('logosList', {
    templateUrl:  'app/components/main/logosList/logos-list-template.html',
    controller: ['$state', 'logosFactory', logosList],
    controllerAs: 'logosList'
  });

  /* Inyectamos aquí y arriba $state */
  function logosList($state, logosFactory) {
    var vm = this;

    vm.$onInit = function() {
      vm.alllogos = logosFactory.getAllLogos();
      vm.currentPosition = 'up';
    };

   
  }

})(angular);