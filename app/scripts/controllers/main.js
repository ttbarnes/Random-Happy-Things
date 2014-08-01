'use strict';

angular.module('randomHappyThingsApp')
  .controller('MainCtrl', function ($http, $scope) {

	$http.get('/data/happyItems.json').success(function(data){
	  $scope.happyThings = data;
	});

	$scope.itemId = false; //default state, 'Waiting for something happy...'

	$scope.tempMessage = 'bingo asdflkjasdflkjasdlfkas';

	$scope.activateItem = function (itemId){ //LH COL item selection
		console.log('Activated:', itemId);
		$scope.itemId = itemId;

		$scope.itemTemplate = function(url) { //return the item view template
			url = 'views/items/' + itemId + '.html';
			return url;
		};

		$scope.selectedCategory = itemId;

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








