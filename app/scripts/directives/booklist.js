'use strict';

/**
 * @ngdoc directive
 * @name bexApp.directive:bookList
 * @description
 * # bookList
 */
angular.module('bexApp')
  .directive('bookList', function () {
    return {
      templateUrl: '../views/booklist.html',
      restrict: 'E',
      replace: true,
      scope: true,
      controller: function ($scope) {
        $scope.toggleCollect =function(book) {    	
	    	 book.added=!book.added;    	
	      };

		    $scope.removeBook=function(book) {
		    	var savedbooks=JSON.parse(localStorage.savedbooks);
		    	angular.forEach(savedbooks, function(value, key) {
		    		if(book.id == value.id) {
		    			savedbooks.splice(key, 1);  	
		    		}
		    	});
		    	$scope.books = savedbooks;
		    	localStorage.savedbooks = JSON.stringify(savedbooks);
    		};

        $scope.showDetails = function($event) {
          var target = $event.target;
          var panel = $( $event.target.parentElement.parentElement.nextElementSibling );
          
          //Using jQuery to support IE8 and backwards
          if (panel.hasClass("visible")) {
            panel.removeClass('visible').animate({'margin-top':'0px', 'height':'0px', 'width':'0px' });
            panel.children().hide();
          } else {

            $('.slide-panel').removeClass('visible').css({'margin-top':'0px', 'height':'0px', 'width':'0px' });
            $('.slide-panel').children().hide();


            panel.addClass('visible').animate({'margin-top':'0px', 'height':'300px', 'width':'500px' });
             panel.children().show();
          } 
          return false; 
        }



    	}
    }
  });
