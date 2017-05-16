angular.module('starter.controllers', [])

.controller('AboutController', function() {

})

.controller('BmiController', function($scope) {
  $scope.data = {};
  $scope.calculateBMI = function() {
    var person = new Person ({
      weight: $scope.data.weight,
      height: $scope.data.height
    });
    if ($scope.data.metric_bmi == true) {
      person.calculate_bmi("metric_bmi");
    } else {
      person.calculate_bmi("standard_bmi");
    }
    $scope.person = person;
  };

});
