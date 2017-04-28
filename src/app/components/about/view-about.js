(function(angular) {

  angular.module('app').component('viewAbout', {
    templateUrl:  'app/components/about/view-about-template.html',
    controller: ['$stateParams', viewAbout],
    controllerAs: 'viewAbout'
  });

  function viewAbout($stateParams) {
    var vm = this;

    vm.$onInit = function() {
      var idPlayer = $stateParams.idPlayer;
      console.log('El id del player buscado es: ', idPlayer)
    };
  }

})(angular);