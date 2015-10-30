'use strict';

/**
 * @ngdoc function
 * @name alcoukApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alcoukApp
 */
angular.module('alcoukApp')
  .controller('NavCtrl', function ($scope, $location) {
  	$scope.menuClass = function(page) {
  		var current = $location.path().substring(1);
  		return page === current ? "active" : "";
     };
});