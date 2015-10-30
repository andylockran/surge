'use strict';

/**
 * @ngdoc function
 * @name alcoukApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the alcoukApp
 */
angular.module('alcoukApp')
  .controller('BlogCtrl', function ($http,$scope,$route,$routeParams,$location) {
  	if ($routeParams.page) {
  		$scope.page = $routeParams.page;	
  	}
  	else {
  		$scope.page=1;
  	}
  	
    $http({
    	method: 'GET',
    	url: "http://www.andyloughran.co.uk/wp-json/wp/v2/posts?filter[posts_per_page]=9&page="+$scope.page
    })
    .success(function(response,status,headers)
    	{
    		$scope.maxposts = Math.round(parseInt(headers('X-WP-Total'))/9);
    		if (response.length === 0) 
    		{
    			$scope.blogs = "";
    		}
    		else {
    			$scope.blogs = response;
    			var range = [];
			  	var top = parseInt($scope.page) + 5;
			  	if (top > $scope.maxposts) {
			  		top = parseInt($scope.maxposts)+1;
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
	    	}
      );

    $scope.loadPage = function () {
    	var current = "/blog" + '/' + $scope.page;
    	$location.path(current);
    };

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
      var current = $location.path().substring(1);
      return page === current ? "active" : "";
     };
  });
