'use strict';

(function(angular) {
  /* Declaramos el módulo e inyectamos el router */
  // https://github.com/angular-ui/ui-router
  // npm install --save angular-ui-router
  var dependenciasProyecto = ['ui.router'];

  angular.module('app', dependenciasProyecto);

  /* Definimos la configuración del proyecto durante la fase config */
  /* Necesitamos inyectar algunos "providers" del router */
   angular.module('app').config(['$stateProvider', '$urlRouterProvider',  appConfig]);

  function appConfig($stateProvider, $urlRouterProvider) {
    var main = {
      name: 'main',
      url: '/main',
      template: '<view-main></view-main>'
    };

    var game = {
      name: 'game',
      url: '/game/:idPlayer',
      /*params: {
        idPlayer: { squash: true, value: null }
      },*/
      template: '<view-game></view-game>'
    };

    var about = {
      name:'about',
      url: '/about',
      template: '<view-about></view-about>'
    };

    $stateProvider.state(main);
    $stateProvider.state(game);
    $stateProvider.state(about);
  
    /* Definimos una ruta por defecto: */
    $urlRouterProvider.otherwise('/main');
  }

})(angular);