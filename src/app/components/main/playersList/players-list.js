(function(angular) {

  angular.module('app').component('playersList', {
    templateUrl:  'app/components/main/playersList/players-list-template.html',
    controller: ['$state', 'cardsFactory', playersList],
    controllerAs: 'playersList'
  });

  /* Inyectamos aquí y arriba $state */
  function playersList($state, cardsFactory) {
    var vm = this;

    vm.$onInit = function() {
      vm.allPlayers = cardsFactory.getAllPlayers();
      vm.currentPosition = 'up';
    };
  
    /* Al clicar sobre un elemento de la lista,
    nos vamos al detalle con el método go de $state 
    vm.goToGame = function(_idPlayer_) {
      $state.go('game', {idPlayer: _idPlayer_});
    };*/

    vm.sortList = function(_position_) {
      if ( _position_ !== vm.currentPosition ) {
        vm.allPlayers.reverse();
        vm.currentPosition = _position_;
      }
    };
  }

})(angular);