(function(angular) {

  angular.module('app').component('viewMain', {
    templateUrl:  'app/components/main/view-main-template.html',
    controller: ['$state', viewMain],
    controllerAs: 'viewMain'
  });

 function viewMain($state) {
    var vm = this;

   vm.goToGame = function() {
      $state.go('game');

      console.log("hol");
    };

 
 };

})(angular);

 