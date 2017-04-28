(function(angular) {

  angular.module('app').factory('logosFactory', [logosFactory]);

  function logosFactory() {
    var module = {};
    var self = module;

   module.alllogos = [
        {id: 0, name: '1903', img: 'logo2.jpg'},
        {id: 1, name: '1945', img: 'logo4.jpg'},
        {id: 2, name: '1978', img: 'logo5.jpg'},
        
        
    ];

    module.getAllLogos = function() {
        return self.alllogos;
    };

    return module;
  };

})(angular);