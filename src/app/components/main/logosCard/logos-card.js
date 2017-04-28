(function(angular) {

  angular.module('app').component('logosCard', {
    templateUrl:  'app/components/main/logosCard/logos-card-template.html',
    controller: logosCard,
    controllerAs: 'logosCard',
    bindings: {
      itemLogo: '<'
    }
  });

  function logosCard() {
    var vm = this;
  }

})(angular);
