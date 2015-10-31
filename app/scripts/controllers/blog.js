'use strict';

/**
 * @ngdoc function
 * @name alcoukApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the alcoukApp
 */
angular.module('alcoukApp')
  .controller('BlogCtrl', function ($http,$scope,$route,$routeParams,blogService) {
  	$scope.page=1;
    blogService.headers({page:$scope.page}).$promise
    .then(function(data){
      var maxposts = Math.round(parseInt(data.total)/9);
      $scope.maxposts = maxposts;
    });
   

    function paginate () {
        var range = [];
        var top = parseInt($scope.page) + 5;
        var maxposts = $scope.maxposts;
        if (top > maxposts) {
          top = parseInt(maxposts)+1;
        }
        var bottom = parseInt($scope.page) -3;
        if (bottom < 1) {
          bottom = 1;
        }
        for (var i=bottom;i<top;i++) {
          range.push(i);
        }
        $scope.paginate = range;
    }

    $scope.loadPage = function () {
        $scope.blogs = blogService.query({page:$scope.page});
        paginate();
    };

    $scope.loadPage();

    $scope.nextPage = function() {
        $scope.page++;
        $scope.loadPage();
    };
    $scope.thisPage = function(i) {
    	$scope.page = i;
    	$scope.loadPage();
    };
            
    $scope.previousPage = function() {
        if ($scope.page > 1) {
            $scope.page--;
            $scope.loadPage();
        }
    };
    $scope.menuClass = function(page) {
      var current = $scope.page;
      page = parseInt(page);
      console.log(typeof page);
      return page === current ? "active" : "";
     };
  });
