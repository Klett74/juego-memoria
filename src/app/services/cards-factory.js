(function(angular) {

  angular.module('app').factory('cardsFactory', [cardsFactory]);

  function cardsFactory() {
    var module = {};
    var self = module;

   module.allplayers = [
        {id: 0, name: 'Torres', img: 'torres.jpg', img2:'cartareverso'},
        {id: 1, name: 'Godin', img: 'godin.jpg', img2:'cartareverso'},
        {id: 2, name: 'Saul', img: 'saul.jpg', img2:'cartareverso'},
        {id: 3, name: 'Griezzman', img: 'griezzman.jpg', img2:'cartareverso'},
        {id: 4, name: 'Gabi', img: 'gabi.jpg', img2:'cartareverso'},
        {id: 5, name: 'Oblak', img: 'oblak.jpg', img2:'cartareverso'},
        {id: 6, name: 'Carrasco', img: 'carrasco.jpg', img2:'cartareverso'},
        {id: 7, name: 'Torres', img: 'torres.jpg', img2:'cartareverso'},
        {id: 8, name: 'Godin', img: 'godin.jpg', img2:'cartareverso'},
        {id: 9, name: 'Saul', img: 'saul.jpg', img2:'cartareverso'},
        {id: 10, name: 'Griezzman', img: 'griezzman.jpg', img2:'cartareverso'},
        {id: 11, name: 'Gabi', img: 'gabi.jpg', img2:'cartareverso'},
        {id: 12, name: 'Oblak', img: 'oblak.jpg', img2:'cartareverso'},
        {id: 13, name: 'Carrasco', img: 'carrasco.jpg', img2:'cartareverso'}
        
    ];

    module.getAllPlayers = function() {
        return self.allplayers;
    };

    return module;
  };

})(angular);