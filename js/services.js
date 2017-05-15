(function () {
  'use strict';
  angular
    .module("demoApp")
    .service('userService', userService);

  function userService(){
    var collection = [
      {firstName: 'Leia-Kahlan', lastName: 'Mollerstrom'},
      {firstName: 'Mileydis', lastName: 'Mollerstrom'},
      {firstName: 'Max', lastName: 'Mollerstrom'}
    ];
    return {
      users: function(){
        return collection;
      },
        add: function(object){
          collection.push(object);
        }
    };
  }
})();
