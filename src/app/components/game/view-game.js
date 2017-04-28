(function(angular) {

  angular.module('app').component('viewGame', {
    templateUrl:  'app/components/Game/view-game-template.html',
    controller: ['$stateParams', viewGame],
    controllerAs: 'viewGame'
  });

  function viewGame($stateParams) {
    var vm = this;

    vm.$onInit = function() {
      var idPlayer = $stateParams.idPlayer;
      console.log('El id del Player buscado es: ', idPlayer)
    };
  }

})(angular);