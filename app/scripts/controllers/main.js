'use strict';

/**
 * @ngdoc function
 * @name bexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bexApp
 */
angular.module('bexApp')
  .controller('MainCtrl', ['bexService', '$scope', '$timeout', '$interval', '$http', function (bexService, $scope, $timeout, $interval, $http) {
  	$scope.books=[];
  	$scope.allowremove=false;
  	$scope.counter=20;  
  	$scope.counterpolling = null;
  	$scope.collectedItems=[];

	$scope.searchParam=null;
	$scope.searchParamDefinition=null; 

	$scope.init=function() {
		if(!$scope.searchParam) {
			bexService.getRandomWord().then(function(data){
				$scope.searchParam=data.data;
				getDefinition();
				getList();
			});
		} else {
			getDefinition();
			getList();
		}
	}

	function getDefinition() {
		bexService.getDefinition($scope.searchParam).then(function(data){
			if(data.data.definitions[0] && data.data.definitions[0].text) {
				$scope.searchParamDefinition=data.data.definitions[0].text;	
			} else {
				$scope.searchParamDefinition="Meaning unknown";	
			}
			
		});
	}
	
	function getList() {
		bexService.getBookList($scope.searchParam).then(function(data){
			$scope.books=data.data.items;
			startCounter();
		});
	}


	function startCounter() {
		$scope.counterpolling = $interval(function () {
										if($scope.counter == 0) {
											$scope.stopInterval();  
											$scope.searchParam=null;
	            							$scope.counter=20;
	            							$scope.init();                         
										}
										$scope.counter--;
                                    }, 1000);  
	}

	$scope.init();

	$scope.toggleStartStop = function() {
		     if (angular.isDefined($scope.counterpolling)) {
		     	$scope.stopInterval();
		     } else {
		     	startCounter();
		     }
	}

	$scope.stopInterval = function() {
                                if (angular.isDefined($scope.counterpolling)) {
                                    $interval.cancel($scope.counterpolling);
                                    $scope.counterpolling = undefined;
                                }
                            };  

    function saveBooks() {
    	var savedbooks=getSavedBooks();
    	angular.forEach($scope.books,function(value,index){
               if(value.added) {
				savedbooks.push($scope.books[index]);
               }
            })

    	localStorage.savedbooks = JSON.stringify(savedbooks);
    	console.log(savedbooks);
    }

    function getSavedBooks() {
    	if (localStorage.savedbooks) {
    		return JSON.parse(localStorage.savedbooks);
    	} else {
    		return [];
    	}
    }

    $scope.$on("$destroy", function() {
        $scope.stopInterval();
        saveBooks(); 
    });

	
  }]);
