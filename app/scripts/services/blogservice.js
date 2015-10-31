'use strict';

/**
 * @ngdoc service
 * @name alcoukApp.blogService
 * @description
 * # blogService
 * Service in the alcoukApp.
 */
angular.module('alcoukApp')
  .factory('blogService', function ($http,$resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
/*    this.getPagination = function() {
	    var range = [];
	    var top = parseInt(page) + 5;
	    if (top > maxposts) {
	      top = parseInt(maxposts)+1;
	    }
	    var bottom = parseInt(page) -3;
	    if (bottom < 1) {
	      bottom = 1;
	    }
	    for (var i=bottom;i<top;i++) {
	      range.push(i);
	    }
	    paginate = range;
	    }
    };
*/
		var wordpressURL, path;
    	wordpressURL = "http://www.andyloughran.co.uk";   	
    	var headers = {
	        method: 'GET',
	        transformResponse: function(data, headers){
	            var response = {};
	            response.headers = headers();
	            response.total = response.headers['x-wp-total'];
	            return response;
	        }
    };
    	path = wordpressURL + "/wp-json/wp/v2/posts?filter[posts_per_page]=9&page=:page";
		return $resource(path, {}, {
			headers: headers,
		});

/*	    $http({
	      method: 'GET',
	      url: wordpressURL + "/wp-json/wp/v2/posts?filter[posts_per_page]=9&page="+page
	    })
	    .success(function(response,status,headers)
	      {
	      	var maxposts,blogs;
	        maxposts = Math.round(parseInt(headers('X-WP-Total'))/9);
	        if (response.length === 0) { blogs = ""; }
	        else {
	        	blogs=response;  
	        }
	        return blogs;
	    });
	    
*/
 });
