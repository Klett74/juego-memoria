(function(angular) {

  angular.module('app').factory('cardsFactory', [cardsFactory]);

  function cardsFactory() {
    var module = {};
    var self = module;

   module.allplayers = [
        {id: 0, name: 'Oblak', img:'oblak.jpg'},
        {id: 1, name: 'Gabi', img:'gabi.jpg'},
        {id: 2, name: 'Carrasco', img: 'carrasco.jpg'},
        {id: 3, name: 'Griezzman', img: 'griezzman.jpg'},
        {id: 4, name: 'Torres', img: 'torres.jpg'},
        {id: 5, name: 'Godin', img: 'godin.jpg'},
        {id: 6, name: 'Saul', img: 'saul.jpg'},
        {id: 7, name: 'Gameiro', img: 'gameiro.jpg'},
    ];

    module.getAllPlayers = function() {
        return self.allplayers;
    };

    return module;
  };

})(angular);