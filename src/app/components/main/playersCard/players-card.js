(function(angular) {

  angular.module('app').component('playersCard', {
    templateUrl:  'app/components/main/playersCard/players-card-template.html',
    controller: playersCard,
    controllerAs: 'playersCard',
    bindings: {
      itemPlayer: '<'
    }
  });

  function playersCard() {
    var vm = this;
  }

})(angular);

