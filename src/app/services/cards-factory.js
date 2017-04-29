(function(angular) {

  angular.module('app').factory('cardsFactory', [cardsFactory]);

  function cardsFactory() {
    var module = {};
    var self = module;

   module.allplayers = [
        {id: 0, name: 'Torres', img: 'torres.jpg'},
        {id: 1, name: 'Godin', img: 'godin.jpg'},
        {id: 2, name: 'Saul', img: 'saul.jpg'},
        {id: 3, name: 'Griezzman', img: 'griezzman.jpg'},
        {id: 4, name: 'Gabi', img: 'gabi.jpg'},
        {id: 5, name: 'Oblak', img: 'oblak.jpg'},
        {id: 6, name: 'Carrasco', img: 'carrasco.jpg'},
        {id: 7, name: 'Torres', img: 'torres.jpg'},
        {id: 8, name: 'Godin', img: 'godin.jpg'},
        {id: 9, name: 'Saul', img: 'saul.jpg'},
        {id: 10, name: 'Griezzman', img: 'griezzman.jpg'},
        {id: 11, name: 'Gabi', img: 'gabi.jpg'},
        {id: 12, name: 'Oblak', img: 'oblak.jpg'},
        {id: 14, name: 'Carrasco', img: 'carrasco.jpg'},
        
    ];

    module.getAllPlayers = function() {
        return self.allplayers;
    };

    return module;
  };

})(angular);