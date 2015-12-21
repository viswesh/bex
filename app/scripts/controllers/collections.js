'use strict';

/**
 * @ngdoc function
 * @name bexApp.controller:CollectionsCtrl
 * @description
 * # CollectionsCtrl
 * Controller of the bexApp
 */
angular.module('bexApp')
  .controller('CollectionsCtrl', ['$scope',function ($scope) {
  	$scope.books=[];
  	$scope.allowremove=true;
    
	if (localStorage.savedbooks) {
                    $scope.books = JSON.parse(localStorage.savedbooks);
                }


  }]);
