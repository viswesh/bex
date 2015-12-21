'use strict';

/**
 * @ngdoc service
 * @name bexApp.bexService
 * @description
 * # bexService
 * Service in the bexApp.
 */
angular.module('bexApp')
  .service('bexService', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = this;

    service.getBookList = function(searchParam) {
    	return $http.get('https://www.googleapis.com/books/v1/volumes?q='+searchParam);
    }

    service.getRandomWord = function() {
    	return $http.get('http://randomword.setgetgo.com/get.php');
    }

    service.getDefinition = function(searchParam) {    	
		return $http({
					method: 'GET', 
					url: "https://montanaflynn-dictionary.p.mashape.com/define?word="+searchParam,
					headers: { 'Content-Type': 'application/x-www-form-urlencoded',
					'X-Mashape-Key' : "5sd1WcBtGAmsh7BEwlHtlP2DueeTp1kKiQwjsny8xJ60gXLgRv"
						}
				});	
    }

  }]);
