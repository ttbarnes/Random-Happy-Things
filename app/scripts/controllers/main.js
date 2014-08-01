'use strict';

angular.module('randomHappyThingsApp')
  .controller('MainCtrl', function ($http, $scope) {

	$http.get('/data/happyItems.json').success(function(data){
	  $scope.happyThings = data;
	});

	//default state, 'Waiting for something happy...'
	$scope.itemId = false;

	//LH COL item selection
	$scope.activateItem = function (itemId){
		console.log('Activated:', itemId);
		$scope.itemId = itemId;

		//return the item view template
		$scope.itemTemplate = function(url) {
			url = 'views/items/' + itemId + '.html';
			return url;
		};

		$scope.selectedItem = itemId;

		//item specific defaults (needed with json data?!?!)
		if(itemId === 'smiley-face') {
			$scope.eyeSize = 4;
			$scope.noseSize = 4;
			$scope.smileLoudness = 'superHappy';
			//$scope.hairAmount = 10;
		}

	};

  $scope.activateItem('smiley-face'); //default item
  //$scope.activateItem('balloons'); //default item

});








